'use client'
// BlogPostsByCategory.js

import React, { useState, useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import DomainUrl from '../../config';
import Link from 'next/link';

const BlogPostsByCategory = ({ categoryId }) => {
    const siteUrl = DomainUrl.wpApiUrl;
    const postsPerPage = 4;

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPostsByCategory = async () => {
            try {
                let endpoint;

                // Check if a category is selected
                if (categoryId !== null) {
                    endpoint = `${siteUrl}/posts?categories=${categoryId}&per_page=${postsPerPage}&page=${currentPage}`;
                } else {
                    // Fetch all posts when no category is selected
                    endpoint = `${siteUrl}/posts?per_page=${postsPerPage}&page=${currentPage}`;
                }

                const response = await fetch(endpoint);

                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const data = await response.json();
                setPosts(data);
                console.log(data);
                if (categoryId !== null) {
                    const totalPagesHeader = response.headers.get('X-WP-TotalPages');
                    setTotalPages(totalPagesHeader ? parseInt(totalPagesHeader, 10) : 1);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPostsByCategory();
    }, [categoryId, currentPage, isLoading]);


    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const maxPagesToShow = 4; // Adjust the number of pages to show as needed

    const getPageRange = () => {
        if (totalPages <= maxPagesToShow) {
            return Array.from({ length: totalPages }, (_, index) => index + 1);
        }

        const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        const endPage = Math.min(totalPages, startPage + maxPagesToShow);

        if (endPage === totalPages) {
            return Array.from({ length: maxPagesToShow }, (_, index) => totalPages - maxPagesToShow + 1 + index);
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Container>
            <Col
                md={7}
                className='p-4'
            >
                <Col
                    className='d-flex flex-column gap-4 p-4'
                    style={{ background: '#fbfcfe' }}
                >
                    {posts.map(post => (
                        <Row key={post.id}>
                            <Col>
                                <Image
                                    src={post['acf']['list_page_image']['url']}
                                    alt={post.title.rendered}
                                    fluid
                                    width="100%"
                                />
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

                                    <p
                                        className='font19px text-purple text-uppercase'
                                    >
                                        {post.title.rendered}
                                    </p>
                                    <p
                                        className="post-content font15px"
                                        style={{ fontSize: '15px' }}
                                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                                    />
                                </Col>
                                <Col className='d-flex flex-column justify-content-end border border-3 border-top-0 border-start-0 border-end-0'>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className='text-decoration-none'
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
                </Col>
                {totalPages > 1 && ( // Check if there's more than one page
                    <div>
                        {currentPage > 1 && (
                            <button onClick={() => handlePageChange(currentPage - 1)}>
                                Previous
                            </button>
                        )}
                        {getPageRange().map(page => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                disabled={currentPage === page}
                            >
                                {page}
                            </button>
                        ))}
                        {currentPage < totalPages && (
                            <button onClick={() => handlePageChange(currentPage + 1)}>
                                Next
                            </button>
                        )}
                    </div>
                )}
            </Col>
        </Container>
    );

};

export default BlogPostsByCategory;
