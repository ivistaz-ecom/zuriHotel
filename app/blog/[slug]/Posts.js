'use client'
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';

import config from '../../../config'

import '../../../components/StyledComponents'
import Link from 'next/link';

import { usePathname, useRouter } from 'next/navigation';


const Posts = ({ slug }) => {
    const pathname = usePathname(); // e.g. /blog/<slug>
    const router = useRouter();

    const [fullUrl, setFullUrl] = useState('');
    const [data, setData] = useState([]);
    const [isStaging, setIsStaging] = useState(false);
    const [blocked, setBlocked] = useState(false); // true when we redirected / blocked render

    const siteUrl = config.apiUrl;

    // <-- CHANGE THIS if your target slug differs -->
    const TARGET_SLUG = 'tiecon-kerala-2025-at-the-zuri-kumarakom-a-landmark-celebration-of-entrepreneurship';
    const STAGING_HOST = 'staging.thezurihotels.com';

    // detect environment & perform redirect for the single slug if on LIVE
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const hostname = window.location.hostname || '';
        const currentFullUrl = window.location.href;
        setFullUrl(currentFullUrl);

        const staging = hostname.includes('staging') || hostname === STAGING_HOST;
        setIsStaging(staging);

        // If this is the protected slug AND we are NOT on staging -> redirect to staging equivalent
        if (!staging && slug && slug === TARGET_SLUG) {
            // build the staging url that mirrors the current path
            const stagingUrl = `https://${STAGING_HOST}${pathname || window.location.pathname}`;
            // Use replace so user won't get the live page in history
            window.location.replace(stagingUrl);
            setBlocked(true); // stop component from rendering / fetching
        }
    }, [slug, pathname]);


    // fetch post only when not blocked (i.e., not redirecting)
    const FetchPost = async () => {
        try {
            const URL_Fetchpost = `${siteUrl}/wp-json/wp/v2/posts?_embed&slug=${slug}`;
            let result = await fetch(URL_Fetchpost);
            result = await result.json();
            setData(result);
        } catch (err) {
            console.error('FetchPost error', err);
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

    // if we've redirected/blocked, render nothing to avoid flicker
    if (blocked) return null;

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
