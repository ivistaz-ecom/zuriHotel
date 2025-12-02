'use client'

import React, { useState, useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import BlogPostsByCategory from './BlogPostsByCategory';  // keep using your component
import Link from 'next/link';

import DomainUrl from '../../config';
import '../../app/globals.css';

/**
 * sanitizeContent(html)
 * - removes iframe/video/embed/object/script/style elements
 * - removes elements that link to youtube/vimeo (src or href)
 * - unwraps non-allowed tags while preserving text/children
 * - strips unsafe attributes (on*, javascript: links, etc.)
 * - returns sanitized HTML string that is safe to render with dangerouslySetInnerHTML
 */
function sanitizeContent(html) {
    if (!html) return '';

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // 1) Remove elements that are media/embeds/scripts/styles
    const removeSelectors = [
        'iframe',
        'video',
        'audio',
        'embed',
        'object',
        'source',
        'track',
        'script',
        'style',
        'noscript',
        'svg'
    ];
    removeSelectors.forEach(sel => {
        doc.querySelectorAll(sel).forEach(n => n.remove());
    });

    // 2) Remove any element whose src/href contains known video hostnames
    const suspiciousHosts = ['youtube.com', 'youtu.be', 'vimeo.com', 'dailymotion.com', 'drive.google.com'];
    doc.querySelectorAll('[src],[href]').forEach(el => {
        const src = el.getAttribute('src') || '';
        const href = el.getAttribute('href') || '';
        const combined = (src + ' ' + href).toLowerCase();
        for (const host of suspiciousHosts) {
            if (combined.includes(host)) {
                // remove the whole element (embed link), or just remove the attribute
                el.remove();
                break;
            }
        }
    });

    // Allowed tags & attributes
    const allowedTags = new Set([
        'p', 'br', 'strong', 'b', 'em', 'i', 'u', 'ul', 'ol', 'li',
        'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'blockquote', 'pre', 'code'
    ]);
    const allowedAttrs = {
        'a': ['href', 'title', 'rel', 'target'],
        'img': ['src', 'alt', 'title', 'width', 'height'],
        // other tags keep no attributes
    };

    // Helper: sanitize attributes on a given element
    function sanitizeAttributes(el) {
        // Remove event handlers and unsafe attributes
        Array.from(el.attributes).forEach(attr => {
            const name = attr.name.toLowerCase();
            const val = attr.value || '';

            // remove event handlers like onclick
            if (name.startsWith('on')) {
                el.removeAttribute(attr.name);
                return;
            }

            // remove javascript: href/src
            if ((name === 'href' || name === 'src') && val.trim().toLowerCase().startsWith('javascript:')) {
                el.removeAttribute(attr.name);
                return;
            }

            // only allow whitelisted attributes per tag
            const tag = el.tagName.toLowerCase();
            if (allowedAttrs[tag] && allowedAttrs[tag].includes(name)) {
                // keep attribute, but for anchors, add rel noopener and target _blank safety if external
                if (tag === 'a') {
                    // normalize hrefs if external
                    try {
                        const hrefVal = el.getAttribute('href') || '';
                        if (hrefVal && !hrefVal.startsWith('#') && !hrefVal.startsWith('/')) {
                            el.setAttribute('rel', 'noopener noreferrer');
                            el.setAttribute('target', '_blank');
                        }
                    } catch (e) {
                        // ignore
                    }
                }
                return; // allowed attribute
            }

            // if attribute not allowed, remove it
            el.removeAttribute(attr.name);
        });
    }

    // 3) Traverse tree and remove/unwrap tags not in allowedTags
    function traverse(node) {
        // make a static copy because we may alter children while iterating
        const children = Array.from(node.childNodes);
        for (const child of children) {
            if (child.nodeType === Node.ELEMENT_NODE) {
                const tag = child.tagName.toLowerCase();

                // If tag is not allowed, unwrap it (replace node with its children)
                if (!allowedTags.has(tag)) {
                    // But if it has no children or only text, just replace with its text content
                    if (child.childNodes.length === 0) {
                        child.remove();
                        continue;
                    } else {
                        // move its children in-place, preserving their nodes
                        while (child.firstChild) {
                            node.insertBefore(child.firstChild, child);
                        }
                        child.remove();
                        // we have inserted its previous children into node; traverse them in next iterations
                        continue;
                    }
                } else {
                    // Allowed tag -> sanitize attributes and continue traversing children
                    sanitizeAttributes(child);
                    traverse(child);
                }
            } else if (child.nodeType === Node.TEXT_NODE) {
                // keep text nodes
                continue;
            } else {
                // remove other node types (comments, processing instructions, etc.)
                child.remove();
            }
        }
    }

    traverse(doc.body);

    // Finally, return innerHTML
    return doc.body.innerHTML;
}

const BlogContentWordpress = () => {
    const siteUrl = DomainUrl.wpApiUrl;
    const postsPerPage = 4;

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [allPosts, setAllPosts] = useState([]);
    const [mostViewPosts, setMostViewPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllCategories = async () => {
            try {
                const response = await fetch(`${siteUrl}/categories?per_page=100`);
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        const fetchAllPosts = async () => {
            try {
                const response = await fetch(`${siteUrl}/posts?per_page=${postsPerPage}&page=${currentPage}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch all posts');
                }
                const data = await response.json();
                setAllPosts(data);
                const totalPagesHeader = response.headers.get('X-WP-TotalPages');
                setTotalPages(totalPagesHeader ? parseInt(totalPagesHeader, 10) : 1);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllCategories();
        fetchAllPosts();
    }, [currentPage]);

    useEffect(() => {
        const fetchMostViewPosts = async () => {
            try {
                const response = await fetch(`${siteUrl}/posts?per_page=${postsPerPage}&page=1`);
                if (!response.ok) {
                    throw new Error('Failed to fetch most viewed posts');
                }
                const data = await response.json();
                setMostViewPosts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMostViewPosts();
    }, []);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        setCurrentPage(1); // Reset page when selecting a category
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const maxPagesToShow = 4;

    const getVisiblePages = () => {
        const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
        const firstVisiblePage = Math.max(1, currentPage - halfMaxPagesToShow);
        const lastVisiblePage = Math.min(totalPages, firstVisiblePage + maxPagesToShow - 1);

        return Array.from({ length: lastVisiblePage - firstVisiblePage + 1 }, (_, index) => firstVisiblePage + index);
    };

    return (
        <>
            <Container className='custom-kumarkom-menu-container'>
                <style>
                    {`
                        button.previous , button {
                            border: 1px solid purple;
                            background: none;
                            margin: 2px;
                            box-shadow: 0px 0px 3px 0px purple;
                            border-radius: 3px;
                            padding: 3px 15px;
                        }
                        button.active { 
                            background-color: purple;
                            color: white;
                        }
                         .post-content a {
                            color: purple !important;
                            text-decoration: none !important;
                        }
                        .post-content a:hover {
                            text-decoration: underline !important;
                        }
                    `}
                </style>

                <h1 className='text-center text-custom-grey p-5'>Blog</h1>
                <Row>
                    <Col lg={7}>
                        {selectedCategory ? (
                            <BlogPostsByCategory categoryId={selectedCategory} />
                        ) : (
                            <>
                                <div
                                    className='d-flex flex-column gap-4 p-4'
                                    style={{ background: '#fbfcfe' }}
                                >
                                    {allPosts.map(post => {
                                        const safeContent = sanitizeContent(post.content?.rendered || '');
                                        return (
                                            <Row key={post.id}>
                                                <Col>
                                                    <Link
                                                        href={`/blog/${post.slug}`}
                                                        className='text-decoration-none'
                                                        target='_blank'
                                                    >
                                                        {/* guard acf fields */}
                                                        {post.acf && post.acf.list_page_image && post.acf.list_page_image.url && (
                                                            <Image
                                                                src={post.acf.list_page_image.url}
                                                                alt={post.title.rendered || ''}
                                                                fluid
                                                                width="100%"
                                                            />
                                                        )}
                                                    </Link>
                                                </Col>

                                                <Col className='p-2 d-flex flex-column justify-content-between align-ite'>
                                                    <Col>
                                                        <p>
                                                            {
                                                                new Date(post.date).toLocaleDateString('en-US', {
                                                                    year: 'numeric', month: 'long', day: 'numeric'
                                                                })
                                                            }
                                                        </p>

                                                        <Link
                                                            href={`/blog/${post.slug}`}
                                                            className='text-decoration-none'
                                                            target='_blank'
                                                        >
                                                            <p
                                                                className='font19px text-purple text-uppercase'
                                                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                                            />
                                                        </Link>

                                                        {/* Render sanitized content (headings + text only) */}
                                                        <div
                                                            className="post-content font15px"
                                                            dangerouslySetInnerHTML={{ __html: safeContent }}
                                                        />
                                                    </Col>
                                                    <Col className='d-flex flex-column justify-content-end border border-3 border-top-0 border-start-0 border-end-0'>
                                                        <Link
                                                            href={`/blog/${post.slug}`}
                                                            className='text-decoration-none'
                                                            target='_blank'
                                                        >
                                                            <p>
                                                                READ MORE
                                                                <i className="bi bi-arrow-right text-purple" />
                                                            </p>
                                                        </Link>
                                                    </Col>
                                                </Col>
                                            </Row>
                                        );
                                    })}
                                </div>

                                <div className='py-2'>
                                    {currentPage !== 1 && (
                                        <button
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            className='previous'
                                        >
                                            Previous
                                        </button>
                                    )}
                                    {getVisiblePages().map(pageNumber => (
                                        <button
                                            key={pageNumber}
                                            onClick={() => handlePageChange(pageNumber)}
                                            disabled={currentPage === pageNumber}
                                            className={currentPage === pageNumber ? 'active' : ''}
                                        >
                                            {pageNumber}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className={currentPage === totalPages ? 'disabled' : ''}
                                    >
                                        Next
                                    </button>
                                </div>
                            </>
                        )}
                    </Col>

                    <Col>
                        <div className='text-purple text-uppercase mb-2'>
                            Categories
                        </div>
                        <div>
                            {categories.map(category => (
                                <li key={category.id} onClick={() => handleCategoryClick(category.id)} style={{ cursor: 'pointer' }}>
                                    {category.name}
                                </li>
                            ))}
                        </div>

                        <div className='mt-3 text-purple'>
                            MOST VIEWED

                            <div className='d-flex flex-column gap-4 p-4 shadow-sm'>
                                {mostViewPosts.map(post => {
                                    const safeContent = sanitizeContent(post.content?.rendered || '');
                                    return (
                                        <Row
                                            key={post.id}
                                            className=' border border-3 border-top-0 border-start-0 border-end-0'
                                        >
                                            <Col md={4}>
                                                {post.acf && post.acf.side_bar_image && post.acf.side_bar_image.url && (
                                                    <Image
                                                        src={post.acf.side_bar_image.url}
                                                        alt={post.title.rendered || ''}
                                                        fluid
                                                        width="100%"
                                                    />
                                                )}
                                            </Col>

                                            <Col className='p-2 d-flex flex-column justify-content-between'>
                                                <Col>
                                                    <p>
                                                        {
                                                            new Date(post.date).toLocaleDateString('en-US', {
                                                                year: 'numeric', month: 'long', day: 'numeric'
                                                            })
                                                        }
                                                    </p>

                                                    <p
                                                        className='font15px text-purple text-uppercase'
                                                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                                    />
                                                    <div
                                                        className="post-content font15px"
                                                        dangerouslySetInnerHTML={{ __html: safeContent }}
                                                    />
                                                </Col>
                                                <Col className='d-flex flex-column justify-content-end'>
                                                    <Link
                                                        href={`/blog/${post.slug}`}
                                                        className='text-decoration-none'
                                                        target='_blank'
                                                    >
                                                        <p>
                                                            READ MORE
                                                            <i className="bi bi-arrow-right text-purple" />
                                                        </p>
                                                    </Link>
                                                </Col>
                                            </Col>
                                        </Row>
                                    );
                                })}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BlogContentWordpress;
