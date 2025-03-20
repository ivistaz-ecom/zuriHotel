import Link from 'next/link';
import React from 'react';
import { Container, Col } from 'react-bootstrap';

const SpiritualRetreatBanner = () => {
    const BannerImgDesktop = {
        backgroundImage: `url('/stay_offers/spiritual_retreat_banner.png')`,
        height: 466,
        backgroundSize: 'cover'
    };

    const BannerImgMobile = {
        backgroundImage: `url('/stay_offers/spiritual_retreat_mobile_banner.png')`,
        height: 400, // Adjust height for mobile view
        backgroundSize: 'cover'
    };

    return (
        <Container className='custom-kumarkom-menu-container'>
            <Col className='pb-3'>
                <h3 className='text-center py-md-4 text-custom-grey'>SPIRITUAL RETREAT IN KERALA</h3>
            </Col>

            {/* Desktop Banner */}
            <Col className='p-0 d-none d-md-block' style={BannerImgDesktop}></Col>

            {/* Mobile Banner */}
            <Col className='p-0 d-block d-md-none' style={BannerImgMobile}></Col>

            <Col className='d-flex flex-row flex-wrap p-0 align-items-center'>
                <Link href="/" className='text-decoration-none text-black m-0'>
                    <h6 className='mb-0 font12px'>Home</h6>
                </Link>
                /
                <Link href="/hotels-in-bengaluru" className='text-decoration-none mb-0'>
                    <h6 className='font12px m-0 text-black'>Bengaluru</h6>
                </Link>
                /
                <Link href="/hotels-in-bengaluru/offers/" className='text-decoration-none mb-0'>
                    <h6 className='text-custom-megenta font12px m-0'>Offers</h6>
                </Link>
            </Col>
        </Container>
    );
};

export default SpiritualRetreatBanner;
