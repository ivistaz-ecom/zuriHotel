import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Link from 'next/link'

const OffersGoaHeader = () => {
    return (
        <>
            <Container className='custom-kumarkom-menu-container'>

                <h3 className='text-center py-md-4 text-custom-grey'>MONSOON GETAWAY PACKAGE</h3>

                <Col className='d-flex flex-row justify-content-center align-items-center py-3 d-md-flex d-none'>
                    <Link href="/beach-resorts-in-goa"
                        className='text-decoration-none text-black'>
                        <h6 className='m-0'>Zuri Goa</h6>
                    </Link> &nbsp; / &nbsp;

                    <Link href="/beach-resorts-in-goa/rooms-suites/"
                        className='text-decoration-none text-black'>
                        <h6 className='m-0'>Room & Suites</h6>
                    </Link>
                    &nbsp; / &nbsp;

                    <Link href="/beach-resorts-in-goa/complimentary-amenities/"
                        className='text-decoration-none text-black '>
                        <h6 className='m-0'>Complimentary Amenities</h6>
                    </Link>
                    &nbsp; / &nbsp;

                    <Link href="/beach-resorts-in-goa/restaurants/"
                        className='text-decoration-none text-black'>
                        <h6 className='m-0'>Dining</h6>
                    </Link>
                    &nbsp; / &nbsp;

                    <Link href="/beach-resorts-in-goa/casino/"
                        className='text-decoration-none text-black'>
                        <h6 className='m-0'>Casino</h6>
                    </Link>
                    &nbsp; / &nbsp;

                    <Link href="/beach-resorts-in-goa/maya-spa/"
                        className='text-decoration-none text-black'>
                        <h6 className='m-0'>Maya Spa</h6>
                    </Link>
                    &nbsp; / &nbsp;

                    <Link href="/beach-resorts-in-goa/events/"
                        className='text-decoration-none text-black'>
                        <h6 className='m-0'>Events</h6>
                    </Link>
                    &nbsp; / &nbsp;

                    <Link href="/beach-resorts-in-goa/gallery/"
                        className='text-decoration-none text-black'>
                        <h6 className='m-0'>Gallery</h6>
                    </Link>
                    &nbsp; / &nbsp;

                    <Link href="/beach-resorts-in-goa/offers"
                        className='text-decoration-none text-black kumarkom-active-menu'>
                        <h6 className='m-0'>Offers</h6>
                    </Link>
                    &nbsp; / &nbsp;

                    <Link href="/beach-resorts-in-goa/destination"
                        className='text-decoration-none text-black'>
                        <h6 className='m-0'>About Goa</h6>
                    </Link>
                </Col>

                {/* Mobile Menu */}

                <Col className='d-md-none d-block'>
                    <Row className='p-2s text-center d-flex flex-row'>
                        <Col xs={6}>
                            <Link href="/beach-resorts-in-goa"
                                className='text-decoration-none text-black'>
                                <h6 className='m-0 menu-font'>Zuri Goa</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/beach-resorts-in-goa/rooms-suites/"
                                className='text-decoration-none text-black '>
                                <h6 className='m-0 menu-font'>Room & Suites</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/beach-resorts-in-goa/complimentary-amenities/"
                                className='text-decoration-none text-black '>
                                <h6 className='m-0 menu-font '>Complimentary Amenities</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/beach-resorts-in-goa/restaurants/"
                                className='text-decoration-none text-black'>
                                <h6 className='m-0 menu-font '>Dining</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/beach-resorts-in-goa/casino/"
                                className='text-decoration-none text-black'>
                                <h6 className='m-0 menu-font '>Casino</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/beach-resorts-in-goa/maya-spa/"
                                className='text-decoration-none text-black'>
                                <h6 className='m-0 menu-font'>Maya Spa</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/beach-resorts-in-goa/events/"
                                className='text-decoration-none text-black'>
                                <h6 className='m-0 menu-font'>Events</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/beach-resorts-in-goa/gallery/"
                                className='text-decoration-none text-black'>
                                <h6 className='m-0 menu-font'>Gallery</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/beach-resorts-in-goa/offers/"
                                className='text-decoration-none text-black kumarkom-active-menu'>
                                <h6 className='m-0 menu-font'>Offers</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/beach-resorts-in-goa/destination"
                                className='text-decoration-none text-black'>
                                <h6 className='m-0 menu-font'>About Goa</h6>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </>
    )
}

export default OffersGoaHeader