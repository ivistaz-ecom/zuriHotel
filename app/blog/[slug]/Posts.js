'use client'
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row, Button } from 'react-bootstrap';

import config from '../../../config'

import '../../../components/StyledComponents'
import Link from 'next/link';

import { usePathname } from 'next/navigation';


const Posts = ({ slug }) => {
    const pathname = usePathname(); // e.g. /blog/<slug>

    const [fullUrl, setFullUrl] = useState('');
    const [data, setData] = useState([]);
    const [isStaging, setIsStaging] = useState(false);
    const [blocked, setBlocked] = useState(false); // true when we block render for this slug on live
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    const siteUrl = config.apiUrl;

    // <-- CHANGE THIS if your target slug differs -->
    const TARGET_SLUG = 'tiecon-kerala-2025-at-the-zuri-kumarakom-a-landmark-celebration-of-entrepreneurship';
    const STAGING_HOST = 'staging.thezurihotels.com';

    // Detect environment and decide whether to block (no redirect)
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const hostname = window.location.hostname || '';
        const currentFullUrl = window.location.href;
        setFullUrl(currentFullUrl);

        const staging = hostname.includes('staging') || hostname === STAGING_HOST;
        setIsStaging(staging);

        // If live and this is the protected slug -> block (do not fetch)
        if (!staging && slug && slug === TARGET_SLUG) {
            setBlocked(true);
            setLoading(false);
        } else {
            setBlocked(false);
        }
    }, [slug, pathname]);


    // fetch post only when not blocked (i.e., not the protected slug on live)
    const FetchPost = async () => {
        setLoading(true);
        setFetchError(null);
        try {
            const URL_Fetchpost = `${siteUrl}/wp-json/wp/v2/posts?_embed&slug=${slug}`;
            const res = await fetch(URL_Fetchpost);
            if (!res.ok) {
                throw new Error(`Failed to fetch post (status ${res.status})`);
            }
            const result = await res.json();
            setData(result);
        } catch (err) {
            console.error('FetchPost error', err);
            setFetchError(err.message || 'Fetch error');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!blocked && slug) {
            FetchPost();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blocked, slug]);


    const formatPublishedDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // --- BLOCKED UI (live + protected slug) ---
    if (blocked) {
        // create the staging URL that mirrors the current path
        const stagingUrl = `https://${STAGING_HOST}${pathname || (new URL(fullUrl || window.location.href)).pathname}`;

        return (
            <>
                {/* Basic noindex meta to avoid indexing blocked page on live */}
                <head>
                    <meta name="robots" content="noindex, nofollow" />
                    <link rel="canonical" href={stagingUrl} />
                    <title>Post not available on live</title>
                </head>

                <Container className='custom-kumarkom-menu-container py-5'>
                    <Row className="justify-content-center mt-5">
                        <Col md={8} className="text-center mt-5">
                            <h2 className="text-uppercase" style={{ color: '#913065' }}>
                                This post is not available on the live site
                            </h2>

                            <p style={{ color: '#555' }}>
                                The content you are trying to view is only published on the staging environment.
                                If you need to access it, please view it on staging or contact the content owner.
                            </p>

                            <div className="my-3">
                                <a href={stagingUrl} target="_blank" rel="noreferrer">
                                    <Button variant="outline-primary">Open on Staging</Button>
                                </a>
                            </div>

                            <p style={{ fontSize: 12, color: '#777' }}>
                                If you are the site administrator and want this post live, publish it from the CMS or remove the staging-only flag.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }


    // --- Normal loading / error states ---
    if (loading) {
        return <div style={{ padding: 40, textAlign: 'center' }}>Loading...</div>;
    }

    if (fetchError) {
        return <div style={{ padding: 40, textAlign: 'center' }}>Error loading post: {fetchError}</div>;
    }

    // --- Normal post render (staging OR non-protected slug on live) ---
    return (
        <>
            <style>
                {`
                    div h2 {
                        color: #767676;;
                    }

                    a strong {
                        color: black;
                    }

                    a {
                        text-decoration: none;
                    }
                `}
            </style>
            {/* custom_meta_description */}

            <head>
                {data.map((post) => (
                    <div key={post.id}>
                        <meta charSet="utf-8" />
                        <title>{post.acf?.custom_meta_title}</title>
                        <meta name="description" content={post.acf?.custom_meta_description} />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="robots" content="index, follow" />
                        <link rel="icon" href="/images/cac_favicon-150x150.png" />
                        <link rel="canonical" href={fullUrl} />
                        <meta property="og:locale" content="en_US" />
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content={post.acf?.custom_meta_title} />
                        <meta property="og:description" content={post.acf?.custom_meta_description} />
                        <meta property="og:site_name" content={post.acf?.custom_meta_title} />
                        <meta property="og:image" content={post.acf?.image_for_post?.url || ''} />
                        <meta name="twitter:card" content="summary_large_image" />

                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    "@context": "https://schema.org/",
                                    "@type": "WebSite",
                                    "name": "thezurihotels",
                                    "potentialAction": {
                                        "@type": "SearchAction",
                                        "query-input": "required name=search_term_string"
                                    }
                                })
                            }}
                        />
                    </div>
                ))}
            </head>

            <Container className='custom-kumarkom-menu-container'>
                <Row>
                    {data.map((items) => (
                        <Col key={items.id}>
                            <h2 className='text-uppercase text-center py-4' dangerouslySetInnerHTML={{ __html: items.title.rendered }} />
                            <Row>
                                <Col lg={8}>
                                    <Image
                                        src={items.acf?.image_for_post?.url}
                                        alt={items.title.rendered} fluid
                                    />

                                    <p
                                        style={{ fontSize: '11px !important', color: '#126634' }}
                                    >
                                        <Link
                                            href="/"
                                            className='text-decoration-none text-black'
                                        >
                                            Home
                                        </Link> / {formatPublishedDate(items.date)}
                                    </p>

                                    <div
                                        className='py-2'
                                        style={{ color: '#913065' }}
                                    >
                                        <h4 className='text-uppercase' dangerouslySetInnerHTML={{ __html: items.title.rendered }} />
                                    </div>

                                    <div dangerouslySetInnerHTML={{ __html: items.content.rendered }} />
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>

            </Container>
        </>
    )
}

export default Posts
