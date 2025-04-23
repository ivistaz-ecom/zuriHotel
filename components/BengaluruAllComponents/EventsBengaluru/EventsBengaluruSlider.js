'use client'
import React, { useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';

import Link from 'next/link';

const EventsBengaluruSlider = () => {

    const AmitiesBg = {
        background: '#cab17b'
    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
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



    return (

        <>
        {/* <style>
            {
                `
                ul.react-multi-carousel-track {
    margin-bottom: 40px;
}`
            }
        </style> */}
            <Container className='p-md-0 px-md-5 p-2 mt-5' style={{}}>

                <Col className='d-flex flex-column align-items-center text-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-4 text-center'>BEST EVENT VENUE IN BANGALORE</h6>
                    <p>
                        Located close to the IT hub of Bangalore, the Zuri Whitefield is the ideal venue to host events and weddings. With stunning and luxurious interiors, gourmet catering services, expansive ballrooms and a fully equipped business centre, the Zuri Whitefield is one of the best wedding and business hotels in Bangalore. Let our trained staff take care of every minute detail to make your event a grand success.
                    </p>
                </Col>

                <Col className='d-md-none d-block'>
                    <Carousel className='py-5'
                        responsive={responsive}
                        removeArrowOnDeviceType={["tablet", "desktop"]}
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                    >
                        <Col className='text-center d-flex flex-column align-items-center gap-4' >
                            <Image src='/bengaluru/events/whitefield_wedding_thumb_1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />

                            <Link
                                href="/hotels-in-bengaluru/events/weddings/"
                                style={buttonHover}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className='px-5 py-2  text-decoration-none'
                            >
                                Weddings
                            </Link>
                        </Col>
                        <Col className='text-center d-flex flex-column align-items-center gap-4' >
                            <Image src='/bengaluru/events/whitefield_meeting_thumb_2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                            <Link
                                href="/hotels-in-bengaluru/events/meetings/"
                                style={buttonHover1}
                                onMouseEnter={handleMouseEnter1}
                                onMouseLeave={handleMouseLeave1}
                                className='px-5 py-2 text-decoration-none'
                            >
                                Meetings and Events
                            </Link>
                        </Col>
                    </Carousel>
                </Col>

                {/* Desktop  */}
                <Row className='d-md-flex flex-row align-items-center justify-content-center d-none pt-5'>
                    <Col className='text-center d-flex flex-column align-items-center gap-4 ps-md-5 ms-md-5' md={4}>
                        <Image src='/bengaluru/events/whitefield_wedding_thumb_1.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />

                        <Link
                            href="/hotels-in-bengaluru/events/weddings/"
                            style={buttonHover}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className='px-5 py-2  text-decoration-none'
                        >
                            Weddings
                        </Link>
                    </Col>
                    <Col className='text-center d-flex flex-column align-items-center gap-4 pe-md-5 ms-md-5' md={4}>
                        <Image src='/bengaluru/events/whitefield_meeting_thumb_2.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />
                        <Link
                            href="/hotels-in-bengaluru/events/meetings/"
                            style={buttonHover1}
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                            className='px-5 py-2 text-decoration-none'
                        >
                            Meetings and Events
                        </Link>
                    </Col>
                </Row>

            </Container>

            <Container fluid className='p-0 pt-2 text-center'>
                <Col className='my-5 py-5' style={AmitiesBg}>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='pt-3 text-center'>BUSINESS FACILITIES</h6>

                    <p className='text-black'>
                        Internet cafe | Wifi | Fax | Photocopier | Scanner | Secretarial service | Laser printer | Binding facility | LCD Projector with drop-down screen
                    </p>
                </Col>
            </Container>
        </>
    )
}

export default EventsBengaluruSlider