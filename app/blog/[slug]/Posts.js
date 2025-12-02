'use client'
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';

import config from '../../../config'

import '../../../components/StyledComponents'
import Link from 'next/link';

import { usePathname, useRouter } from 'next/navigation';


const Posts = ({ slug }) => {


    const router = usePathname();

    const [fullUrl, setFullUrl] = useState('');

    useEffect(() => {
        const url = window.location.href;
        setFullUrl(url);
    }, []);
    const [data, setData] = useState([])

    const siteUrl = config.apiUrl;

    // alert(router);

    const FetchPost = async () => {
        const URL_Fetchpost = `${siteUrl}/wp-json/wp/v2/posts?_embed&slug=${slug}`;
        let result = await fetch(URL_Fetchpost);
        result = await result.json();
        setData(result);
        // console.log(result);
    }
    useEffect(() => {
        FetchPost();
    }, [])

    const formatPublishedDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

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
                        <title>{post.acf.custom_meta_title}</title>
                        <meta name="description" content={post.acf.custom_meta_description} />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="robots" content="index, follow" />
                        <link rel="icon" href="/images/cac_favicon-150x150.png" />
                        <link rel="canonical" href={fullUrl} />
                        <meta property="og:locale" content="en_US" />
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content={post.acf.custom_meta_title} />
                        <meta property="og:description" content={post.acf.custom_meta_description} />
                        {/* <meta property="og:url" content={path} /> */}
                        <meta property="og:site_name" content={post.acf.custom_meta_title} />
                        <meta property="og:image" content="" />
                        <meta name="twitter:card" content="summary_large_image" />

                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    "@context": "https://schema.org/",
                                    "@type": "WebSite",
                                    "name": "thezurihotels",
                                    // "url": path,
                                    "potentialAction": {
                                        "@type": "SearchAction",
                                        // "target": `${path}{search_term_string}`,
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
                                        src={items.acf.image_for_post.url}
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

                                    {/* <p dangerouslySetInnerHTML={{ __html: items.content.rendered }} /> */}
                                    {/* <div dangerouslySetInnerHTML={{ __html: items.content.rendered.replace(/http:\/\/localhost:3000/g, config.apiDomain) }} /> */}
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