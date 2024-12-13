'use client'
import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import BannerAllPage from '../../BannerAllPage'

const ChristmasBanner = () => {

    const backgroundImageUrl = '/christmas-banner.png';

    // const BannerImg = {
    //     backgroundImage: `url('/contact_us_banner.jpg')`,
    //     height: 466,
    //     backgroundSize: 'cover'
    // }

    return (
        <>
            <Container fluid className='p-0'>
                <Container className='custom-kumarkom-menu-container px-0'>
                    <h3 className='text-center py-md-4 text-custom-grey'>Season’s Greetings from Zuri</h3>

                    {/* <Col style={BannerImg}>
                    </Col> */}
                    <BannerAllPage backgroundImageUrl={backgroundImageUrl} />
                    <Col className='d-flex flex-row flex-wrap p-0 align-items-center' >
                        <Link href="/"
                            className='text-decoration-none text-black m-0'>
                            <h6 className='mb-0 font12px'>Home</h6>
                        </Link>
                    </Col>

                    <Col className='mt-5'>
                        <p className=' text-center'>
                            Curious about how Zuri Hotels can brighten your Christmas and New Year’s celebrations? Contact us and we’ll <br className='d-lg-block d-none' /> provide you with a plan guaranteed to make your holidays unforgettable.
                        </p>
                    </Col>
                </Container>
            </Container>
        </>
    )
}

export default ChristmasBanner