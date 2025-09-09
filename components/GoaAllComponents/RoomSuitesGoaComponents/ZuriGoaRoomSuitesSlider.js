'use client'
import React, { useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';

import Link from 'next/link';


const ZuriGoaRoomSuitesSlider = () => {
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

    const [isHover, setIsHover] = useState(false);

    const [isHover1, setIsHover1] = useState(false);

    const [isHover2, setIsHover2] = useState(false);

    const [isHover3, setIsHover3] = useState(false);

    const [isHover4, setIsHover4] = useState(false);



    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };


    const handleMouseEnter1 = () => {
        setIsHover1(true);
    };

    const handleMouseLeave1 = () => {
        setIsHover1(false);
    };

    const handleMouseEnter2 = () => {
        setIsHover2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHover2(false);
    };

    const handleMouseEnter3 = () => {
        setIsHover3(true);
    };

    const handleMouseLeave3 = () => {
        setIsHover3(false);
    };

    const handleMouseEnter4 = () => {
        setIsHover4(true);
    };

    const handleMouseLeave4 = () => {
        setIsHover4(false);
    };




    const buttonHover = {
        backgroundColor: isHover ? 'black' : 'white',
        color: isHover ? 'white' : 'black',
        border: isHover ? '1px solid black' : '1px solid silver',
        transition: '.5s ease-in',
        fontSize: '13px',
    }

    const buttonHover1 = {
        backgroundColor: isHover1 ? 'black' : 'white',
        color: isHover1 ? 'white' : 'black',
        border: isHover1 ? '1px solid black' : '1px solid silver',
        transition: '.5s ease-in',
        fontSize: '13px',
    }

    const buttonHover2 = {
        backgroundColor: isHover2 ? 'black' : 'white',
        color: isHover2 ? 'white' : 'black',
        border: isHover2 ? '1px solid black' : '1px solid silver',
        transition: '.5s ease-in',
        fontSize: '13px',
    }

    const buttonHover3 = {
        backgroundColor: isHover3 ? 'black' : 'white',
        color: isHover3 ? 'white' : 'black',
        border: isHover3 ? '1px solid black' : '1px solid silver',
        transition: '.5s ease-in',
        fontSize: '13px',
    }

    const buttonHover4 = {
        backgroundColor: isHover4 ? 'black' : 'white',
        color: isHover4 ? 'white' : 'black',
        border: isHover4 ? '1px solid black' : '1px solid silver',
        transition: '.5s ease-in',
        fontSize: '13px',
    }


    return (

        <>
            {/* Desktop View */}
            <Container className='p-0 px-md-5 d-sm-flex flex-column d-lg-none' style={{}}>
                <Carousel className=''
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "desktop"]}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                >
                    <Col className='text-center d-flex flex-column align-items-center gap-4 ps-lg-5 ms-lg-5' >
                        <Image src='/goa/room-suites/goa-superior-room-circle-1.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />

                        <Link
                            href="/beach-resorts-in-goa/rooms-suites/garden-view-room/"
                            style={buttonHover}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className='px-5 py-2  text-decoration-none'
                        >
                            Superior Room
                        </Link>
                    </Col>
                    <Col className='text-center d-flex flex-column align-items-center gap-4' >
                        <Image src='/goa/room-suites/goa-premium-room-circle-2.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />
                        <Link
                            href="/beach-resorts-in-goa/rooms-suites/premium-room/"
                            style={buttonHover1}
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                            className='px-5 py-2 text-decoration-none'
                        >
                            Premium Room
                        </Link>
                    </Col>
                    <Col className='text-center d-flex flex-column align-items-center gap-4 pe-lg-5 me-lg-5'>
                        <Image src='/goa/room-suites/delux-room-thumnail-3.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />

                        <Link
                            href="/beach-resorts-in-goa/rooms-suites/deluxe-room/"
                            style={buttonHover2}
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                            className='px-5 py-2 text-decoration-none'
                        >
                            Deluxe Room
                        </Link>
                    </Col>
                    <Col className='text-center pt-md-5 d-flex flex-column align-items-center gap-4 ps-lg-5 ms-lg-5'>
                        <Image src='/goa/room-suites/executive_suite_thumb.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />

                        <Link
                            href="/beach-resorts-in-goa/rooms-suites/executive-suite/"
                            style={buttonHover3}
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}
                            className='px-5 py-2 mb-5 mb-md-0 text-decoration-none'
                        >
                            Executive Suite
                        </Link>
                    </Col>

                    <Col className='text-center pt-md-5 d-flex flex-column align-items-center gap-4 pe-lg-5 me-lg-5'>
                        <Image src='/goa/room-suites/goa-executive-suite-5.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />

                        <Link
                            href="/beach-resorts-in-goa/rooms-suites/zuri-suite/"
                            style={buttonHover4}
                            onMouseEnter={handleMouseEnter4}
                            onMouseLeave={handleMouseLeave4}
                            className='px-5 py-2 mb-5 mb-md-0 text-decoration-none'
                        >
                            Zuri Suite
                        </Link>
                    </Col>
                </Carousel>
            </Container>


            {/* Mobile View */}
            <Container>
                <Row className='d-lg-flex flex-row d-none justify-content-center gap-0'>
                    <Col className='text-center d-flex flex-column align-items-center gap-4' lg={4}>
                        <Image src='/goa/room-suites/goa-superior-room-circle-1.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />

                        <Link
                            href="/beach-resorts-in-goa/rooms-suites/garden-view-room/"
                            style={buttonHover}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className='px-5 py-2  text-decoration-none'
                        >
                            Superior Room
                        </Link>
                    </Col>
                    <Col className='text-center d-flex flex-column align-items-center gap-4' lg={4}>
                        <Image src='/goa/room-suites/goa-premium-room-circle-2.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />
                        <Link
                            href="/beach-resorts-in-goa/rooms-suites/premium-room/"
                            style={buttonHover1}
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                            className='px-5 py-2 text-decoration-none'
                        >
                            Premium Room
                        </Link>
                    </Col>
                    <Col className='text-center d-flex flex-column align-items-center gap-4' lg={4}>
                        <Image src='/goa/room-suites/delux-room-thumnail-3.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />

                        <Link
                            href="/beach-resorts-in-goa/rooms-suites/deluxe-room/"
                            style={buttonHover2}
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                            className='px-5 py-2 text-decoration-none'
                        >
                            Deluxe Room
                        </Link>
                    </Col>
                    <Col className='text-center pt-md-5 d-flex flex-column align-items-center gap-4 ps-lg-5 ms-lg-5'>
                        <Image src='/goa/room-suites/executive_suite_thumb.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />

                        <Link
                            href="/beach-resorts-in-goa/rooms-suites/executive-suite/"
                            style={buttonHover3}
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}
                            className='px-5 py-2 mb-5 mb-md-0 text-decoration-none'
                        >
                            Executive Suite
                        </Link>
                    </Col>

                    <Col className='text-center pt-md-5 d-flex flex-column align-items-center gap-4 pe-lg-5 me-lg-5'>
                        <Image src='/goa/room-suites/goa-executive-suite-5.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />

                        <Link
                            href="/beach-resorts-in-goa/rooms-suites/zuri-suite/"
                            style={buttonHover4}
                            onMouseEnter={handleMouseEnter4}
                            onMouseLeave={handleMouseLeave4}
                            className='px-5 py-2 mb-5 mb-md-0 text-decoration-none'
                        >
                            Zuri Suite
                        </Link>
                    </Col>
                </Row>
            </Container>

            {/* Stay Offers */}
            {/* <Container className='p-0 pt-5'>
                <Col className='d-flex flex-column align-items-center '>
                    <h6 className='py-2 text-center border border-2 border-top-0 border-end-0 border-start-0'>STAY OFFERS</h6>
                </Col>

                <Col className='d-md-flex flex-column d-none mt-5'>
                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>THE WELL-IN-ADVANCE DEAL</h6>
                            </Col>
                            <p>
                                Book your stay at the Zuri White Sands, Goa 21 Days (or more) in advance and get an exciting 30% off on Best Available Rates.
                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/beach-resorts-in-goa/offers/well-in-advance-deal/"
                                    className='bg-black text-center text-decoration-none btn-circle'
                                >
                                    <p className=' mb-0 font11px lh-sm text-white'>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/goa/room-suites/goa-the-well-in-advance-deal-6.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row mt-5'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/goa/room-suites/goa-the-last-minute-deal-7.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>

                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                                <h6 className='text-center'>THE LAST MINUTE DEAL</h6>
                            </Col>
                            <p>
                                Book your stay at the Zuri White Sands, Goa 0-7 days in advance and enjoy a 15% off your room.
                            </p>
                            <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                <Link href="/beach-resorts-in-goa/offers/the-last-minute-deal"
                                    className='bg-black text-center text-decoration-none btn-circle'
                                >
                                    <p className=' mb-0 font11px lh-sm text-white'>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                    </Col>
                </Col>
            </Container> */}


            {/* Mobile View */}
            <Container className='p-0 d-flex flex-column d-md-none'>
                {/* <Col className='d-flex flex-column align-items-center '>
                    <h6 className='py-2 text-center border border-2 border-top-0 border-end-0 border-start-0'>STAY OFFERS</h6>
                </Col> */}
                <Col className='p-2'>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>THE WELL-IN-ADVANCE DEAL</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/kumarkom-home/kumarakom_rooms_suites_new.jpg' alt='' fluid className='rounded-circle kumarkom-image-overlay' />
                        </Col>
                        <p>
                            Book your stay at the Zuri White Sands, Goa 21 Days (or more) in advance and get an exciting 30% off on Best Available Rates.
                        </p>
                        <Link href="/beach-resorts-in-goa/offers/well-in-advance-deal/"
                            className='bg-black text-center rounded-circle text-decoration-none btn-circle'>
                            <p
                                className='m-0 lh-sm text-white font11px'
                            >
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>THE LAST MINUTE DEAL</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/kumarkom-home/kumarakom_compliments_Amenties.jpg' alt='' fluid className='rounded-circle kumarkom-image-overlay' />
                        </Col>
                        <p>
                            Book your stay at the Zuri White Sands, Goa 0-7 days in advance and enjoy a 15% off your room.
                        </p>
                        <Link href="/beach-resorts-in-goa/offers/the-last-minute-deal/"
                            className='bg-black text-center rounded-circle text-decoration-none btn-circle'>
                            <p
                                className='m-0 lh-sm text-white font11px'
                            >
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>
                </Col>
            </Container>
        </>

    )
}

export default ZuriGoaRoomSuitesSlider