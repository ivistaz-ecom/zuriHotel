'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container } from 'react-bootstrap';

const HomeSliderBanner = () => {
    const [isMobile, setIsMobile] = useState(false);
    const section2Ref = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            caption: "GOD'S OWN COUNTRY",
            subCaption: "The Zuri Kumarakom, Kerala Resort & Spa"
        },
        {
            desktop: '/home/zuri_slider_banner_03.jpg',
            mobile: '/home/mobile_zuri_slider_banner_3.jpg',
            caption: "PREFERRED BUSINESS DESTINATION",
            subCaption: "The Zuri Whitefield, Bengaluru"
        },
    ];

    return (
        <>
            <Container fluid className='p-0 text-center position-relative' style={{ height: isMobile ? '60vh' : '100vh' }}>
                <Col className='position-absolute bottom-0 end-0 start-0 z-1 mb-5 d-lg-flex d-none'>
                    <Col className='w-100 text-center'>
                        <Image
                            src='/mouse.png'
                            alt='Scroll Down'
                            width={40}
                            height={40}
                            style={{ cursor: 'pointer' }}
                            onClick={() => window.location.reload()}
                            priority={false}
                        />
                    </Col>
                </Col>

                <Carousel interval={2500} fade={true}>
                    {BannerImages.map((image, index) => {
                        const imageSrc = isMobile ? image.mobile : image.desktop;

                        return (
                            <Carousel.Item key={index}>
                                <div style={{ position: 'relative', width: '100%', height: isMobile ? '60vh' : '100vh' }}>
                                    <Image
                                        src={imageSrc}
                                        alt={image.caption}
                                        fill
                                        priority={index === 0}
                                        sizes="100vw"
                                        quality={85}
                                        placeholder="blur"
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                        style={{
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>

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
                        );
                    })}
                </Carousel>
            </Container>

            <div ref={section2Ref} />
        </>
    );
};

export default HomeSliderBanner;
