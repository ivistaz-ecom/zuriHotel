'use client'
import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import BannerAllPage from '../../BannerAllPage'

const ChristmasBanner = () => {
    const desktopImageUrl = '/christmas/make_your_christmas.jpg'; // Image for desktop view
    const mobileImageUrl = '/christmas/make_your_christmas_mobile_banner.jpg';   // Image for mobile view

    return (
        <>
            <Container fluid className='p-0'>
                <Container className='custom-kumarkom-menu-container px-0'>
                    <h3 className='text-center py-md-4 text-custom-grey p-2'>Celebrate the Magic of the Festive Season at<br/> The Zuri Hotels & Resorts</h3>

                    {/* Desktop banner */}
                    <div className="d-none d-sm-block">
                        <BannerAllPage backgroundImageUrl={desktopImageUrl} />
                    </div>

                    {/* Mobile banner */}
                    <div className="d-block d-md-none ">
                        <BannerAllPage backgroundImageUrl={mobileImageUrl} />
                    </div>

                    <Col className='d-flex flex-row flex-wrap p-0 align-items-center'>
                        <Link href="/"
                            className='text-decoration-none text-black m-0'>
                            {/* <h6 className='mb-0 font12px ps-lg-0 ps-2'>Home</h6> */}
                        </Link>
                    </Col>

                    <Col className='mt-lg-5 mt-4 text-center p-lg-0 p-3'>
                        <p>
                            Make this Christmas and New Year Eve unforgettable with Zuri Hotels & Resorts! Experience the joy of the season with dazzling celebrations, gourmet feasts, live entertainment, and luxurious stays. Whether you’re planning a family gathering, a romantic evening, or a lively party with friends, we’ve got something special for everyone.
                        </p>
                        <p>
                            Spaces are filling up fast - don’t miss out on the festivities!
                        </p>
                        <p>
                            Reserve your spot now and make this holiday season one to remember!
                        </p>
                    </Col>
                </Container>
            </Container>
        </>
    )
}

export default ChristmasBanner
