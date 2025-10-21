import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'

const WinterGetAwayMapPackagesBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/goa/offers/monsoon_mania_ap_banner.jpg')`,
        height: 460,
        backgroundSize: 'cover'
    }

    return (
        <Container className='custom-kumarkom-menu-container' style={{}}>

            <Col className='text-center pb-3'>
                <h3 className='text-custom-grey'>
                    WINTER PACKAGE ON MAP
                </h3>
            </Col>

            <Col className='p-0'
                // style={{ backgroundImage: "url(/kumarkom/room_suites_kumarkom_banner.jpg)", height: '460px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                style={BannerImg}
            >
            </Col>

            <Col className='d-flex flex-row flex-wrap p-0 align-items-center' >

                <Link href="/"
                    className='text-decoration-none text-black m-0'>
                    <h6 className='mb-0 font12px'>Home</h6>
                </Link>
                /
                <Link href="/beach-resorts-in-goa"
                    className='text-decoration-none mb-0'>
                    <h6 className='font12px mb-0 text-black'>Beach Resorts In Goa</h6>
                </Link>
                /
                <Link href="/beach-resorts-in-goa/offers/"
                    className='text-decoration-none mb-0'>
                    <h6 className='text-custom-megenta font12px mb-0'>offers</h6>
                </Link>
            </Col>
        </Container>
    )
}

export default WinterGetAwayMapPackagesBanner
