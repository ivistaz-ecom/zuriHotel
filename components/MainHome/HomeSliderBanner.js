'use client'

import React, { useRef, useEffect, useState } from 'react';
import { Col, Container, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const HomeSliderBanner = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768); // Adjust the width threshold as needed
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Images for mobile and desktop views
    const BannerImages = [
        {
            desktop: '/home/zuri_slider_banner_01.jpg',
            mobile: '/home/mobile_zuri_slider_banner_1.jpg',
            caption: "TROPICAL DESTINATION",
            subCaption: "The Zuri White Sands, Goa Resort & Casino"
        },
        {
            desktop: '/home/zuri_slider_banner_02.jpg',
            mobile: '/home/mobile_zuri_slider_banner_2.jpg',
            caption: "GOD’S OWN COUNTRY",
            subCaption: "The Zuri Kumarakom, Kerala Resort & Spa"
        },
        {
            desktop: '/home/zuri_slider_banner_03.jpg',
            mobile: '/home/mobile_zuri_slider_banner_3.jpg',
            caption: "PREFERRED BUSINESS DESTINATION",
            subCaption: "The Zuri Whitefield, Bengaluru"
        },
    ];

    
    const getBackgroundStyle = (desktopImage, mobileImage) => ({
        backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,
        height: isMobile ? '60vh' : '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    });

    const section2Ref = useRef(null);

    return (
        <>
     
            <Container fluid className='p-0 text-center z-0 position-relative' style={{ height: isMobile ? '60vh' : '100vh' }}>
                <Col
                    className='position-absolute bottom-0 end-0 start-0 z-1 mb-5 d-lg-flex d-none'
                >
                    <Col className='w-100 text-center'>
                        <Image
                            src='/mouse.png'
                            alt=''
                            fluid
                            onClick={() => window.location.reload()}
                        />
                    </Col>
                </Col>

                <Carousel interval={2500} fade={true}>

                    {BannerImages.map((image, index) => (
                        <Carousel.Item
                            key={index}
                            className='bg-black'
                            style={getBackgroundStyle(image.desktop, image.mobile)}
                        >
                            <Carousel.Caption className='p-0 position-absolute start-0 bottom-0 top-0 end-0'>
                                <Col className='text-center position-relative d-flex' style={{ height: isMobile ? '60vh' : '100vh' }}>
                                    <Col className='d-flex flex-column flex-wrap align-items-center justify-content-center align-content-center'>
                                        <h1 className='text-white custom-home-slider-text p-3'>
                                            {image.caption}
                                        </h1>
                                    </Col>
                                    <Col className='position-absolute bg-black bg-opacity-75 pb-0 bottom-0 end-0'>
                                        <h6 className='mb-0 p-2'>
                                            {image.subCaption}
                                        </h6>
                                    </Col>
                                </Col>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>

            <div ref={section2Ref} />
        </>
    );
}

export default HomeSliderBanner;
