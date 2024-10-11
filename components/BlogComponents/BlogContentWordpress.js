'use client'// 'use client' import and other imports...

import React, { useState, useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import BlogPostsByCategory from './ BlogPostsByCategory';  // Import the new component
import Link from 'next/link';

import DomainUrl from '../../config';
import '../../app/globals.css';

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
                // console.log(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        const fetchAllPosts = async () => {
            try {
                //const response = await fetch(`${siteUrl}/posts?per_page=${postsPerPage}&page=${currentPage}`);
                const response = await fetch(`${siteUrl}/posts?per_page=4&page=${currentPage}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch all posts');
                }
                const data = await response.json();
                // console.log(data);
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
                //const response = await fetch(`${siteUrl}/posts?per_page=${postsPerPage}&page=${currentPage}`);
                const response = await fetch(`${siteUrl}/posts?per_page=4&page=${currentPage}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch all posts');
                }
                const data = await response.json();
                // console.log(data);
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
                    {
                        `
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
                `
                    }
                </style>

                <h1 className='text-center text-custom-grey p-5'>Blog</h1>
                <Row>
                    <Col className='' lg={7}>
                        {selectedCategory ? (
                            <BlogPostsByCategory categoryId={selectedCategory} />
                        ) : (
                            <>
                                <div
                                    className='d-flex flex-column gap-4 p-4'
                                    style={{ background: '#fbfcfe' }}
                                >
                                    {allPosts.map(post => (
                                        <Row key={post.id}
                                        >
                                            <Col>
                                                <Link
                                                    href={`/blog/${post.slug}`}
                                                    className='text-decoration-none'
                                                    target='_blank'
                                                >
                                                    <Image
                                                        src={post['acf']['list_page_image']['url']}
                                                        alt={post.title.rendered}
                                                        fluid
                                                        width="100%"
                                                    />
                                                </Link>
                                            </Col>

                                            <Col className='p-2 d-flex flex-column justify-content-between align-ite'>
                                                <Col>
                                                    <p>
                                                        {
                                                            new Date(post.date).toLocaleDateString
                                                                ('en-US',
                                                                    {
                                                                        year: 'numeric', month: 'long', day: 'numeric'
                                                                    }
                                                                )
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
                                                    <p
                                                        className="post-content font15px"
                                                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
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
                                                            <i
                                                                className="bi bi-arrow-right text-purple"
                                                            >
                                                            </i>
                                                        </p>

                                                    </Link>
                                                </Col>
                                            </Col>

                                        </Row>
                                    ))}
                                </div>
                                <div
                                    className='py-2'
                                >
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
                        <div
                            className='text-purple text-uppercase mb-2'
                        >
                            Categories
                        </div>
                        <div>
                            {categories.map(category => (
                                <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
                                    {category.name}
                                </li>
                            ))}
                        </div>

                        <div className='mt-3 text-purple'>
                            MOST VIEWED

                            <div className='d-flex flex-column gap-4 p-4 shadow-sm'>
                                {mostViewPosts.map(post => (
                                    <Row
                                        key={post.id}
                                        className=' border border-3 border-top-0 border-start-0 border-end-0'
                                    >
                                        <Col md={4}>
                                            <Image
                                                src={post['acf']['side_bar_image']['url']}
                                                alt={post.title.rendered}
                                                fluid
                                                width="100%"
                                            />
                                        </Col>

                                        <Col className='p-2 d-flex flex-column justify-content-between'>
                                            <Col>
                                                <p>
                                                    {
                                                        new Date(post.date).toLocaleDateString
                                                            ('en-US',
                                                                {
                                                                    year: 'numeric', month: 'long', day: 'numeric'
                                                                }
                                                            )
                                                    }
                                                </p>

                                                <p
                                                    className='font15px text-purple text-uppercase'
                                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                                />
                                                <p
                                                    className="post-content font15px"
                                                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
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
                                                        <i
                                                            className="bi bi-arrow-right text-purple"
                                                        >
                                                        </i>
                                                    </p>
                                                </Link>
                                            </Col>
                                        </Col>
                                    </Row>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    );
};

export default BlogContentWordpress;
