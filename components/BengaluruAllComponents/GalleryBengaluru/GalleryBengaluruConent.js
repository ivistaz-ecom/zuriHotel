import React from 'react'

import Link from 'next/link'
import { Container, Col, Row, Image } from 'react-bootstrap'
import WeWork from '@/components/Shared/WeWork'

const GalleryBengaluruConent = () => {
    return (
        <Container className='custom-kumarkom-menu-container position-relative'>

            <Col className='text-center'>
                <h3 className='text-center text-custom-grey'>THE ZURI WHITEFIELD, BENGALURU</h3>
                <Image src="/bengaluru/room-suites/life_logo.png" alt='' className='py-2' />
                <WeWork />
            </Col>


            <Col className='d-flex flex-row justify-content-center align-items-center py-3 d-md-flex d-none'>
                <Link href="/hotels-in-bengaluru"
                    className='text-decoration-none text-black'>
                    <h6 className='m-0'>Zuri Bengaluru</h6>
                </Link> &nbsp; / &nbsp;

                <Link href="/hotels-in-bengaluru/rooms-suites/"
                    className='text-decoration-none text-black'>
                    <h6 className='m-0'>Room & Suites</h6>
                </Link>
                &nbsp; / &nbsp;

                <Link href="/hotels-in-bengaluru/complimentary-amenities/"
                    className='text-decoration-none text-black'>
                    <h6 className='m-0'>Complimentary Amenities</h6>
                </Link>
                &nbsp; / &nbsp;

                <Link href="/hotels-in-bengaluru/restaurants/"
                    className='text-decoration-none text-black'>
                    <h6 className='m-0'>Dining</h6>
                </Link>
                &nbsp; / &nbsp;

                <Link href="/hotels-in-bengaluru/maya-spa/"
                    className='text-decoration-none text-black'>
                    <h6 className='m-0'>Maya Spa</h6>
                </Link>
                &nbsp; / &nbsp;

                <Link href="/hotels-in-bengaluru/events/"
                    className='text-decoration-none text-black'>
                    <h6 className='m-0'>Events</h6>
                </Link>
                &nbsp; / &nbsp;

                <Link href="/hotels-in-bengaluru/gallery/"
                    className='text-decoration-none text-black kumarkom-active-menu'>
                    <h6 className='m-0'>Gallery</h6>
                </Link>
                &nbsp; / &nbsp;

                <Link href="/hotels-in-bengaluru/offers"
                    className='text-decoration-none text-black'>
                    <h6 className='m-0'>Offers</h6>
                </Link>
                &nbsp; / &nbsp;

                <Link href="/hotels-in-bengaluru/destination"
                    className='text-decoration-none text-black'>
                    <h6 className='m-0'>About Bengaluru</h6>
                </Link>
            </Col>

            {/* Mobile Menu */}

            <Col className='d-md-none d-block'>
                <Row className='p-2s text-center d-flex flex-row'>
                    <Col xs={6}>
                        <Link href="/hotels-in-bengaluru"
                            className='text-decoration-none text-black '>
                            <h6 className='m-0 menu-font'>Zuri Bengaluru</h6>
                        </Link>
                    </Col>

                    <Col xs={6}>
                        <Link href="/hotels-in-bengaluru/rooms-suites/"
                            className='text-decoration-none text-black'>
                            <h6 className='m-0 menu-font'>Room & Suites</h6>
                        </Link>
                    </Col>

                    <Col xs={6}>
                        <Link href="/hotels-in-bengaluru/complimentary-amenities/"
                            className='text-decoration-none text-black'>
                            <h6 className='m-0 menu-font '>Complimentary Amenities</h6>
                        </Link>
                    </Col>

                    <Col xs={6}>
                        <Link href="/hotels-in-bengaluru/restaurants/"
                            className='text-decoration-none text-black'>
                            <h6 className='m-0 menu-font '>Dining</h6>
                        </Link>
                    </Col>

                    <Col xs={6}>
                        <Link href="/hotels-in-bengaluru/maya-spa/"
                            className='text-decoration-none text-black'>
                            <h6 className='m-0 menu-font'>Maya Spa</h6>
                        </Link>
                    </Col>

                    <Col xs={6}>
                        <Link href="/hotels-in-bengaluru/events/"
                            className='text-decoration-none text-black'>
                            <h6 className='m-0 menu-font'>Events</h6>
                        </Link>
                    </Col>

                    <Col xs={6}>
                        <Link href="/hotels-in-bengaluru/gallery/"
                            className='text-decoration-none text-black  kumarkom-active-menu'>
                            <h6 className='m-0 menu-font'>Gallery</h6>
                        </Link>
                    </Col>

                    <Col xs={6}>
                        <Link href="/hotels-in-bengaluru/offers/"
                            className='text-decoration-none text-black'>
                            <h6 className='m-0 menu-font'>Offers</h6>
                        </Link>
                    </Col>

                    <Col xs={6}>
                        <Link href="/hotels-in-bengaluru/destination"
                            className='text-decoration-none text-black'>
                            <h6 className='m-0 menu-font'>About Bengaluru</h6>
                        </Link>
                    </Col>
                </Row>
            </Col>

            <Col className='d-flex flex-row flex-wrap p-0 align-items-center mt-3 mt-lg-0' >
                <Link href="/"
                    className='text-decoration-none text-black m-0'>
                    <h6 className='mb-0 font12px'>Home</h6>
                </Link>

                /

                <Link href="/hotels-in-bengaluru"
                    className='text-decoration-none mb-0'>
                    <h6 className=' font12px m-0 text-black'>Bengaluru</h6>
                </Link>
                /
                <Link href=""
                    className='text-decoration-none mb-0'>
                    <h6 className='text-custom-megenta font12px m-0'>Gallery</h6>
                </Link>
            </Col>
        </Container>
    )
}

export default GalleryBengaluruConent