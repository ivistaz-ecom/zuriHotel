
import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'
const MayaSpaBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/maya_spa_booking_banner.jpg')`,
        height: 460,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return (
        <>
            <Container className='custom-kumarkom-menu-container' style={{}}>

                <Col className='center p-0'
                    style={BannerImg}
                >
                </Col>

                <Col className='d-flex flex-row flex-wrap p-0 align-items-center' >

                    <Link href="/"
                        className='text-decoration-none text-black m-0'>
                        <h6 className='mb-0 font12px'>Home</h6>
                    </Link>
                </Col>
            </Container>
        </>
    )
}

export default MayaSpaBanner
