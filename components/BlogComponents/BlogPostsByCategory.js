'use client'
// BlogPostsByCategory.js

import React, { useState, useEffect } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import DomainUrl from '../../config';
import Link from 'next/link';

const BlogPostsByCategory = ({ categoryId, blockedSlug = '', isStaging = false }) => {
    const siteUrl = DomainUrl.wpApiUrl;
    const postsPerPage = 4;

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // ---------------------------
    // REMOVE VIDEOS FROM HTML
    // ---------------------------
    const stripVideoFromHtml = (html) => {
        if (!html) return "";

        if (typeof DOMParser === "undefined") {
            return html
                .replace(/<iframe[\s\S]*?<\/iframe>/gi, "")
                .replace(/<video[\s\S]*?<\/video>/gi, "")
                .replace(/<embed[\s\S]*?<\/embed>/gi, "")
                .replace(/<object[\s\S]*?<\/object>/gi, "")
                .replace(/\[video[^\]]*\]/gi, "");
        }

        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            const selectors = [
                "video",
                "iframe",
                "embed",
                "object",
                "figure.wp-block-video",
                "div.wp-block-video",
                "div[data-type='video']",
                "figure.embed-video"
            ];

            selectors.forEach(sel => {
                doc.querySelectorAll(sel).forEach(node => node.remove());
            });

            let cleaned = doc.body.innerHTML
                .replace(/\[video[^\]]*\]/gi, '')
                .replace(/\[\/?embed[^\]]*\]/gi, '');

            const cleanDoc = parser.parseFromString(cleaned, "text/html");
            cleanDoc.querySelectorAll("p, div").forEach(el => {
                if (!el.textContent.trim() && el.querySelectorAll("*").length === 0) {
                    el.remove();
                }
            });

            return cleanDoc.body.innerHTML;
        } catch {
            return html
                .replace(/<iframe[\s\S]*?<\/iframe>/gi, "")
                .replace(/<video[\s\S]*?<\/video>/gi, "")
                .replace(/<embed[\s\S]*?<\/embed>/gi, "")
                .replace(/<object[\s\S]*?<\/object>/gi, "");
        }
    };

    // ---------------------------
    // FALLBACK CONTENT PREVIEW
    // ---------------------------
    const getSafePreviewText = (html, maxChars = 200) => {
        if (!html) return "";

        try {
            const temp = document.createElement("div");
            temp.innerHTML = html;

            const selectors = ["p", "h2", "h3", "h4", "span", "li"];
            for (let sel of selectors) {
                const el = temp.querySelector(sel);
                if (el && el.textContent.trim()) {
                    const text = el.textContent.trim();
                    return text.length > maxChars ? text.slice(0, maxChars) + "..." : text;
                }
            }

            const allText = (temp.textContent || '').trim();
            return allText.length > maxChars ? allText.slice(0, maxChars) + "..." : allText;
        } catch {
            const fallback = html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
            return fallback.length > maxChars ? fallback.slice(0, maxChars) + "..." : fallback;
        }
    };

    // ---------------------------
    // FETCH POSTS
    // ---------------------------
    useEffect(() => {
        const fetchPostsByCategory = async () => {
            setIsLoading(true);
            try {
                const endpoint =
                    categoryId !== null
                        ? `${siteUrl}/posts?categories=${categoryId}&per_page=${postsPerPage}&page=${currentPage}`
                        : `${siteUrl}/posts?per_page=${postsPerPage}&page=${currentPage}`;

                const response = await fetch(endpoint);
                if (!response.ok) throw new Error("Failed to fetch posts");
                const data = await response.json();

                // Hide blocked slug on LIVE only
                let filteredPosts = isStaging ? data : data.filter(p => p.slug !== blockedSlug);

                // Clean video content & create preview
                filteredPosts = filteredPosts.map(p => {
                    const stripped = stripVideoFromHtml(p.content?.rendered || "");
                    let preview = stripped && stripped.trim() !== "" ? stripped : getSafePreviewText(p.content?.rendered || "");

                    // ensure preview is HTML
                    if (preview && !/^<[^>]+>/.test(preview)) {
                        preview = `<p>${preview}</p>`;
                    }

                    return {
                        ...p,
                        content: {
                            ...p.content,
                            rendered_stripped: preview
                        }
                    };
                });

                setPosts(filteredPosts);

                const totalPagesHeader = response.headers.get("X-WP-TotalPages");
                setTotalPages(totalPagesHeader ? parseInt(totalPagesHeader, 10) : 1);
            } catch (err) {
                setError(err.message || "Error fetching posts");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPostsByCategory();
    }, [categoryId, currentPage, isStaging, blockedSlug]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) setCurrentPage(newPage);
    };

    const maxPagesToShow = 4;
    const getPageRange = () => {
        if (totalPages <= maxPagesToShow) return Array.from({ length: totalPages }, (_, i) => i + 1);
        const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // NOTE: This component does NOT render its own Container/Col wrapper.
    // It expects to be placed within parent layout (like the main blog page),
    // so the column widths match across both listing and category views.
    return (
        <>
            <style>{`
                .category-post-row { padding-bottom: 30px; border-bottom: 1px solid #e6e6e6; margin-bottom: 24px; }
                .category-post-img img { width: 100%; height: auto; object-fit: cover; display: block; }
                .category-post-content .post-content { color: #666; line-height: 1.6; }
            `}</style>

            {posts.map(post => (
                <Row key={post.id} className="category-post-row align-items-center">
                    {/* Left image column - same as main listing (md=4) */}
                    <Col md={4} className="category-post-img mb-3 mb-md-0">
                        <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                            <Image src={post.acf?.list_page_image?.url || ''} alt={post.title.rendered} fluid />
                        </Link>
                    </Col>

                    {/* Right content column */}
                    <Col md={8} className="category-post-content">
                        <p style={{ marginBottom: 6, color: '#777' }}>
                            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                            <h3 className="font19px text-purple text-uppercase" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </Link>

                        {/* cleaned content (no video) */}
                        <div className="post-content font15px" dangerouslySetInnerHTML={{ __html: post.content?.rendered_stripped || '' }} />

                        <div style={{ marginTop: 12 }}>
                            <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                                <span style={{ color: '#913065', fontWeight: 600 }}>
                                    READ MORE &nbsp;<i className="bi bi-arrow-right"></i>
                                </span>
                            </Link>
                        </div>
                    </Col>
                </Row>
            ))}

            {totalPages > 1 && (
                <div style={{ marginTop: 12 }}>
                    {currentPage > 1 && <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>}

                    {getPageRange().map(page => (
                        <button key={page} onClick={() => handlePageChange(page)} disabled={currentPage === page} style={{ margin: '0 6px' }}>
                            {page}
                        </button>
                    ))}

                    {currentPage < totalPages && <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>}
                </div>
            )}
        </>
    );
};

export default BlogPostsByCategory;
