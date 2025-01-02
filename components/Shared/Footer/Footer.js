import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Link from 'next/link'

import StaticStarRating from './StaticStarRating'; // Import the StaticStarRating component

const Footer = ({ rating }) => {

    // const currentYear = new Date().getUTCFullYear();
    const currentYearIST = new Date().toLocaleString("en-IN", {
        year: "numeric",
        timeZone: "Asia/Kolkata",
      });
    

    // Ensure rating is defined before accessing its properties
    const ratingValue = rating !== undefined ? rating : 4.5;
    const filledStars = Math.round(ratingValue);

    return (
        <>
            <Container className=' mt-5 ' style={{ background: '#eee' }}>
                <Row className='p-3'>
                    <Col md={4} className='text-center p-0'>
                        <h4 className='text-black '>Guest Reviews</h4>
                    </Col>

                    <Col md={4} className='text-center p-0'>
                        <p>
                            <StaticStarRating rating={ratingValue} /> {/* Pass ratingValue to StaticStarRating */}
                            {ratingValue.toFixed(1)} out of 5.0 ({/* Display ratingValue */}
                            {ratingValue * 10} Reviews)
                        </p>
                        {/* <p>
                            4.5 out of 5.0 (47 Reviews)
                        </p> */}
                    </Col>

                    <Col md={4} className='text-center p-0'>
                        <h5>
                            99% of guests recommend this hotel
                        </h5>
                        <p>
                            Here&apos;s what our guests have to say about their stay at the hotel.<Link href="/customer-review" className='text-decoration-none fw-bolder text-purple'> Read More</Link>
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container className='p-md-0 p-3'>
                <hr />
                <Row className='d-flex flex-row flex-wrap ps-lg-5'>
                    <Col md={2} xs={6} className='p-0'>
                        <div className='d-flex flex-column gap-1'>
                            <div>
                                <Link href="/about-us"
                                    className='text-black text-decoration-none lh-sm'>
                                    About Us
                                </Link>
                            </div>
                            <div>
                                <Link href="/awards"
                                    className='text-black text-decoration-none'>
                                    Awards
                                </Link>
                            </div>
                            <div>
                                <Link href="/sitemap"
                                    className='text-black text-decoration-none'>
                                    Sitemap
                                </Link>
                            </div>
                            <div>
                                <Link href="/testimonial"
                                    className='text-black text-decoration-none'>
                                    Testimonials
                                </Link>
                            </div>
                            <div>
                                <Link href="/footer/classification_2024.pdf"
                                    target='_blank'
                                    className='text-black text-decoration-none'>
                                    Classification
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={2} xs={6} className='p-0'>
                        <div className='d-flex flex-column gap-1'>
                            <div>
                                <Link href="/careers"
                                    className='text-black text-decoration-none'>
                                    Careers
                                </Link>
                            </div>
                            <div>
                                <Link href="/contact-us"
                                    className='text-black text-decoration-none'>
                                    Contact Us
                                </Link>
                            </div>
                            <div>
                                <Link href="/customer-review"
                                    className='text-black text-decoration-none'>
                                    Review
                                </Link>
                            </div>
                            <div>
                                <Link href="/gallery"
                                    className='text-black text-decoration-none'>
                                    Gallery
                                </Link>
                            </div>
                            <div>
                                <Link href="/privacy-policy"
                                    className='text-black text-decoration-none'>
                                    Privacy policy
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='p-lg-0 pt-lg-0 p-3'>
                        <div className='d-flex flex-column gap-1'>
                            <div>
                                <Link href="/lake-resorts-in-kumarakom"
                                    className='text-black text-decoration-none'>
                                    The Zuri Kumarakom, Kerala Resort & Spa
                                </Link>
                            </div>
                            <div>
                                <Link href="/beach-resorts-in-goa"
                                    className='text-black text-decoration-none'>
                                    The Zuri White Sands, Goa Resort & Casino
                                </Link>
                            </div>
                            <div>
                                <Link href="/hotels-in-bengaluru"
                                    className='text-black text-decoration-none'>
                                    The Zuri Whitefield, Bengaluru
                                </Link>
                            </div>
                            <div className='pt-3'>
                                <Link href="https://iprefer.com/members/signup?enrollcode=BLRTZ&hotel=BLRTZ"
                                    className='text-black text-decoration-none'
                                    target='_blank'
                                >
                                    <Image src="/footer/i_prefer_logo_new.jpg"
                                        alt=""
                                        width={115}
                                    />
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <p className='text-center'>
                            CONNECT WITH US
                        </p>
                        <Col className='d-flex flex-row justify-content-center'>
                            <Link
                                href="https://www.facebook.com/thezurihotels"
                                target='_blank'
                                className='text-decoration-none text-black px-2'
                            >
                                <Image src='/header/facebook_final.svg' alt='' height={20} />
                            </Link>

                            <Link
                                href="https://twitter.com/zurihotels"
                                target='_blank'
                                className='text-decoration-none text-black px-2'
                            >
                                <Image src='/header/twitter_final.svg' alt='' height={20} />
                            </Link>

                            <Link
                                href="https://www.youtube.com/channel/UCXxjZ-f7LTEMchpvECctUKg?view_as=subscriber"
                                target='_blank'
                                className='text-decoration-none text-black px-2'
                            >
                                <Image src='/header/youtube_final.svg' alt='' height={20} />
                            </Link>

                            <Link
                                href="https://www.instagram.com/thezurihotels/"
                                target='_blank'
                                className='text-decoration-none text-black px-2'
                            >
                                <Image src='/header/instafinal.svg' alt='' height={20} />
                            </Link>

                            <Link
                                href="https://www.linkedin.com/company/the-zuri-hotels-&-resorts/"
                                target='_blank'
                                className='text-decoration-none text-black px-2'
                            >
                                <Image src='/header/linked_in_final.svg' alt='' height={20} />
                            </Link>
                        </Col>
                    </Col>
                </Row>
                <hr />
                <p>
                    E-brochures &gt;
                    <span className='text-black'> <Link href="/footer/zuri_bengaluru.pdf" className='text-decoration-none text-black' target='_blank'>The Zuri Whitefield, Bengaluru</Link> / <Link href="/footer/zuri_kumarkom.pdf" className='text-decoration-none text-black' target='_blank'>The Zuri Kumarakom, Kerala Resort & Spa</Link> / <Link href="/footer/zuri_goa.pdf" className='text-decoration-none text-black' target='_blank'>The Zuri White Sands, Goa Resort & Casino</Link></span>
                </p>
            </Container>

            <Container fluid className='p-3 text-center bg-black'>
                <h6 className='text-white'>© {currentYearIST} ZURI HOTELS & RESORTS, All rights Reserved.</h6>
            </Container>
        </>
    )
}

export default Footer