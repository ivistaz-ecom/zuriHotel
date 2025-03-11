import Link from 'next/link';
import React from 'react';
import { Col, Container } from 'react-bootstrap';

const AdvanceBookingBanner = () => {
    // Background Image Styling
    const BannerImg = {
        backgroundImage: `url('/advance_booking_banner.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px', // Adjust as needed
        width: '100%'
    };

    return (
        <Container className='custom-kumarkom-menu-container'>

            {/* Title */}
            <h3 className='text-center py-md-4 text-custom-grey'>ADVANCE BOOKING OFFER</h3>

            {/* Banner Image */}
            <Col className='p-0' style={BannerImg}></Col>

            {/* Breadcrumbs */}
            <Col className='d-flex flex-row flex-wrap p-0 align-items-center pt-1 ps-lg-0 ps-1'>

                <Link href="/" className='text-decoration-none text-black m-0'>
                    <h6 className='mb-0 font12px'>Home</h6>
                </Link>

                <Link href="/lake-resorts-in-kumarakom"
                    className='text-decoration-none mb-0'>
                    <h6 className='font12px mb-0 text-black breadcrumbs'>Lake Resorts In Kumarakom</h6>
                </Link>

                <Link href="/lake-resorts-in-kumarakom/offers/"
                    className='text-decoration-none mb-0'>
                    <h6 className='text-custom-megenta font12px mb-0 breadcrumbs'>Offers</h6>
                </Link>
            </Col>

        </Container>
    );
};

export default AdvanceBookingBanner;
