'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import { Col, Container, Row } from 'react-bootstrap'

import Carousel from 'react-multi-carousel';


const HomeOffers = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 0 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 0 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (
        <>

            {/* Desktop View */}
            <Container className='p-0 d-md-flex d-none mt-md-5 flex-column gap-2'>
                <Col className='d-flex flex-column align-items-center' >
                    <Image src='/cl.png' alt='' width={50} height={50} />
                    <h6 className='py-2'>OFFERS</h6>
                </Col>

                <Row className='p-0 gap-1'>
                    <Col md={4} className='border border-1 shadow-sm p-0'>
                        <Image
                            src="/home/weekend_package.jpg"
                            alt='Weekend Packages'
                            width={400}
                            height={220}
                            className='w-100'
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={85}
                        />
                        <Col className='p-2 pb-0'>
                            <div className='arrow-up'></div>
                            <h6>
                                WEEKEND PACKAGES
                            </h6>
                            <p className='p-0 m-0'>
                                Spend a weekend nestled in the lap of luxury, at any of our luxury properties. Choose from the Summer Family Package, the Honeymoon Package in Goa, or the Honeymoon Package in Kumarakom.
                            </p>
                        </Col>
                        <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2 pb-2'>
                            <Link href="/offers/stay-offers/"
                                className='bg-black text-center text-decoration-none btn-circle'
                            >
                                <p className=' mb-0 font11px lh-sm text-white'>
                                    VIEW
                                    <br />
                                    OFFER
                                </p>
                            </Link>
                        </Col>
                    </Col>


                    <Col className='d-flex flex-md-row flex-column gap-1'>
                        <Col className='d-flex flex-column gap-1'>
                            <Col className='d-flex flex-row border border-1 shadow-sm position-relative'>
                                <Col>
                                    <h6 className='p-2'>
                                        WELLNESS PACKAGES</h6>
                                    <p
                                        className='px-2'
                                    >
                                        Discover a new you, when you partake of our wellness packages here at the Zuri.
                                    </p>
                                </Col>
                                <Col className='d-flex justify-content-center align-items-md-start position-absolute bottom-0 start-50 translate-middle'>
                                    <Link href="/offers/ayurveda-package"
                                        className='bg-black text-center text-decoration-none btn-circle'
                                    >
                                        <p className=' mb-0 font11px lh-sm text-white'>
                                            VIEW<br />
                                            OFFER
                                        </p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Image
                                        src='/home/wellness_package.jpg'
                                        alt='Wellness Packages'
                                        width={200}
                                        height={200}
                                        className='w-100'
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                        quality={85}
                                    />
                                </Col>
                            </Col>

                            <Col className='d-flex flex-row border border-1 shadow-sm position-relative'>
                                <Col>
                                    <h6
                                        className='p-2'
                                    >
                                       ADVANCE BOOKING OFFER 
                                    </h6>
                                    <p
                                        className='p-2'
                                    >
                                       Book 21 days in advance and avail 25% discount on room with breakfast bookings
                                    </p>
                                </Col>
                                <Col>
                                    <Image
                                        src='/stay_offers/advance_booking_tumbnail.jpg'
                                        alt='Dining Offers'
                                        width={200}
                                        height={200}
                                        className='w-100'
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                        quality={85}
                                    />
                                </Col>
                                <Col className='d-flex justify-content-center align-items-md-start position-absolute bottom-0 start-50 translate-middle'>
                                    <Link href="/lake-resorts-in-kumarakom/offers/advance-booking-offer"
                                        className='bg-black text-center text-decoration-none btn-circle'
                                    >
                                        <p className=' mb-0 font11px lh-sm text-white'>
                                            VIEW
                                            <br />
                                            OFFER
                                        </p>
                                    </Link>
                                </Col>
                            </Col>
                        </Col>

                        <Col className='d-flex flex-md-row flex-column'>
                            <Col className='d-flex flex-column gap-1'>
                                <Col className='d-flex flex-row border border-1 shadow-sm position-relative'>
                                    <Col>
                                        <h6
                                            className='p-2'
                                        >
                                            STAY OFFERS
                                        </h6>
                                        <p
                                            className='p-2'
                                        >
                                            Revel in luxury, with our STAY OFFERS at the Zuri property of your choice!
                                        </p>
                                    </Col>
                                    <Col>
                                        <Image
                                            src='/home/stay_offers.jpg'
                                            alt='Stay Offers'
                                            width={200}
                                            height={200}
                                            className='w-100'
                                            sizes="(max-width: 768px) 100vw, 25vw"
                                            quality={85}
                                        />
                                    </Col>
                                    <Col className='d-flex justify-content-center align-items-md-start position-absolute bottom-0 start-50 translate-middle'>
                                        <Link href="/offers/stay-offers/"
                                            className='bg-black text-center text-decoration-none btn-circle'
                                        >
                                            <p className=' mb-0 font11px lh-sm text-white'>
                                                VIEW
                                                <br />
                                                OFFER
                                            </p>
                                        </Link>
                                    </Col>
                                </Col>

                                <Col className='d-flex flex-row border border-1 shadow-sm position-relative'>
                                    <Col>
                                        <h6 className='p-2'>
                                            HONEYMOON PACKAGES
                                        </h6>
                                        <p
                                            className='p-2'
                                        >
                                            The Zuri strives to make sure you have an unforgettable experience while you stay here.
                                        </p>
                                    </Col>
                                    <Col className='d-flex justify-content-center align-items-md-start position-absolute bottom-0 start-50 translate-middle'>
                                        <Link href="/lake-resorts-in-kumarakom/offers/honeymoon-package/"
                                            className='bg-black text-center text-decoration-none btn-circle'
                                        >
                                            <p className=' mb-0 font11px lh-sm text-white'>
                                                VIEW
                                                <br />
                                                OFFER
                                            </p>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Image
                                            src='/home/honeymoon_package.jpg'
                                            alt='Honeymoon Packages'
                                            width={200}
                                            height={200}
                                            className='w-100'
                                            sizes="(max-width: 768px) 100vw, 25vw"
                                            quality={85}
                                        />
                                    </Col>
                                </Col>
                            </Col>
                        </Col>
                    </Col>
                </Row>
            </Container >



            {/* Mobile View */}
            <Container className='p-0 d-md-none d-flex flex-column mt-5'>
                <Col className='d-flex flex-column align-items-center' >
                    <Image src='/cl.png' alt='' width={50} height={50} />
                    <h6 className='py-2'>OFFERS</h6>
                </Col >
                <Carousel className=''
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "desktop"]}
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                // autoPlay={true}
                >
                    <Col className='border border-1 shadow-sm p-0'>
                        <Image
                            src="/home/weekend_package.jpg"
                            alt='Weekend Packages'
                            width={400}
                            height={340}
                            className='w-100'
                            sizes="100vw"
                            quality={85}
                        />
                        <Col className='p-2 pb-0'>
                            <div className='arrow-up'></div>
                            <h6 className='text-black'>
                                WEEKEND PACKAGES
                            </h6>
                            <p className='p-0 m-0'>
                                Spend a weekend nestled in the lap of luxury, at any of our luxury properties. Choose from the Summer Family Package, the Honeymoon Package in Goa, or the Honeymoon Package in Kumarakom.
                            </p>
                        </Col>
                        <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start align-items-center p-0 pe-2 pb-2'>
                            <Link
                                href="/offers/ayurveda-package"
                                className='bg-black text-decoration-none btn-circle'>
                                <p
                                    className='m-0 lh-sm text-white font11px  text-center'
                                >
                                    VIEW
                                    <br />
                                    OFFER
                                </p>
                            </Link>
                        </Col>
                    </Col>

                    <Col className='border border-1 shadow-sm p-0'>
                        <Image
                            src="/home/wellness_package.jpg"
                            alt='Wellness Packages'
                            width={400}
                            height={340}
                            className='w-100'
                            sizes="100vw"
                            quality={85}
                        />
                        <Col className='p-2 pb-0'>
                            <h6 className='text-black'>
                                WELLNESS
                                <br />
                                PACKAGES
                            </h6>
                            <p>
                                Discover a new you, when you partake of our wellness packages here at the Zuri.
                            </p>
                        </Col>
                        <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2 pb-2'>
                            <Link
                                href="/offers/ayurveda-package/"
                                className='bg-black text-decoration-none btn-circle'>
                                <p
                                    className='m-0 lh-sm text-white font11px  text-center'
                                >
                                    VIEW
                                    <br />
                                    OFFER
                                </p>
                            </Link>
                        </Col>
                    </Col>

                    <Col className='border border-1 shadow-sm p-0'>
                        <Image
                            src="/stay_offers/advance_booking_tumbnail.jpg"
                            alt='Dining Offers'
                            width={400}
                            height={340}
                            className='w-100'
                            sizes="100vw"
                            quality={85}
                        />
                        <Col className='p-2 pb-0'>
                            <h6 className='text-black'> ADVANCE BOOKING
                                <br />
                                OFFERS</h6>
                            <p>
                            Book 21 days in advance and avail 25% discount on room with breakfast bookings
                            </p>
                        </Col>
                        <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2 pb-2'>
                            <Link href="/lake-resorts-in-kumarakom/offers/advance-booking-offer"
                                className='bg-black text-decoration-none btn-circle'>
                                <p
                                    className='m-0 lh-sm text-white font11px  text-center'
                                >
                                    VIEW
                                    <br />
                                    OFFER
                                </p>
                            </Link>
                        </Col>
                    </Col>

                    <Col className='border border-1 shadow-sm p-0'>
                        <Image
                            src="/home/stay_offers.jpg"
                            alt='Stay Offers'
                            width={400}
                            height={340}
                            className='w-100'
                            sizes="100vw"
                            quality={85}
                        />
                        <Col className='p-2 pb-0'>
                            <h6 className='text-black'>STAY
                                <br />
                                OFFERS</h6>
                            <p>
                                Revel in luxury, with our STAY OFFERS at the Zuri property of your choice!
                            </p>
                        </Col>
                        <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2 pb-2'>
                            <Link href="/offers/stay-offers/"
                                className='bg-black text-decoration-none btn-circle'>
                                <p
                                    className='m-0 lh-sm text-white font11px  text-center'
                                >
                                    VIEW
                                    <br />
                                    OFFER
                                </p>
                            </Link>
                        </Col>
                    </Col>

                    <Col className='border border-1 shadow-sm p-0'>
                        <Image
                            src="/home/honeymoon_package.jpg"
                            alt='Honeymoon Packages'
                            width={400}
                            height={340}
                            className='w-100'
                            sizes="100vw"
                            quality={85}
                        />
                        <Col className='p-2 pb-0'>
                            <h6 className='text-black'>HONEYMOON
                                <br />
                                PACKAGES
                            </h6>
                            <p>
                                The Zuri strives to make sure you have an unforgettable experience while you stay here.
                            </p>
                        </Col>
                        <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2 pb-2'>
                            <Link
                                href="/lake-resorts-in-kumarakom/offers/honeymoon-package/"
                                className='bg-black text-center text-decoration-none text-center btn-circle d-flex flex-column justify-content-center align-items-center'
                            >
                                <p className=' mb-0 font11px lh-sm text-center text-white'>
                                    VIEW
                                    <br />
                                    OFFER</p>
                            </Link>
                        </Col>
                    </Col>
                </Carousel>
            </Container >


        </>
    )
}

export default HomeOffers