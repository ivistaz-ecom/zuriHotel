'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { Col, Container } from 'react-bootstrap'
import Link from 'next/link';

const Gallery = () => {


    const [width, setWidth] = useState('80%');
    const [width1, setWidth1] = useState('10%');
    const [width2, setWidth2] = useState('10%');

    const [isHovered, setIsHovered] = useState(true);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    const handleMouseOver = () => {
        setWidth('80%')
        setWidth1('10%')
        setWidth2('10%')
        setIsHovered(true)
        setIsHovered1(false)
        setIsHovered2(false)
    }

    const handleMouseOver1 = () => {
        setWidth1('80%')
        setWidth('10%')
        setWidth2('10%')
        setIsHovered(false)
        setIsHovered1(true)
        setIsHovered2(false)
    }

    const handleMouseOver2 = () => {
        setWidth2('80%')
        setWidth1('10%')
        setWidth('10%')
        setIsHovered(false)
        setIsHovered1(false)
        setIsHovered2(true)

    }

    const galleryBox = {
        height: '430px'
    }

    const hoverTextStyleBlr = {
        transform: isHovered ? 'rotate(0deg)' : 'rotate(90deg)',
        position: isHovered ? 'relative' : 'absolute',
        height: isHovered ? 'auto' : '25px',
        width: isHovered ? 'auto' : '421px',
        left: isHovered ? '0px' : '-160px',
        bottom: isHovered ? '0px' : '150px',
        color: 'white',
        textShadow: '0px 1px 3px #000',
        fontSize: isHovered ? '25px' : '16px',

    }

    const hoverTextStyleBlr1 = {
        transform: isHovered1 ? 'rotate(0deg)' : 'rotate(90deg)',
        position: isHovered1 ? 'relative' : 'absolute',
        height: isHovered1 ? 'auto' : '25px',
        width: isHovered1 ? 'auto' : '421px',
        left: isHovered1 ? '0px' : '-160px',
        bottom: isHovered1 ? '0px' : '150px',
        color: 'white',
        fontSize: isHovered1 ? '25px' : '16px',
    }

    const hoverTextStyleBlr2 = {
        transform: isHovered2 ? 'rotate(0deg)' : 'rotate(90deg)',
        position: isHovered2 ? 'relative' : 'absolute',
        height: isHovered2 ? 'auto' : '25px',
        width: isHovered2 ? 'auto' : '279px',
        left: isHovered2 ? '0px' : '-91px',
        bottom: isHovered2 ? '0px' : '182px',
        color: 'white',
        fontSize: isHovered2 ? '25px' : '16px'
    }

    const hoverBtn = {
        display: isHovered ? 'flex' : 'none',
        height: '55px',
        width: '55px',
        background: 'white'
    }
    const hoverBtn2 = {
        display: isHovered1 ? 'flex' : 'none',
        height: '55px',
        width: '55px',
        background: 'white'
    }

    const hoverBtn3 = {
        display: isHovered2 ? 'flex' : 'none',
        height: '55px',
        width: '55px',
        background: 'white',
    }


    const bgImgKerala = {

    }
    return (
        <>

            {/* Desktop View */}
            <Container className='p-0 py-5 d-md-flex flex-column d-none' >
                <Col className='d-flex flex-column align-items-center'>
                    <Image src='/cl.png' alt='' width={50} height={50} />
                    <h6 className='py-2'>GALLERY</h6>
                </Col>

                {/* Desktop view */}
                <div className="d-flex flex-lg-row " style={galleryBox}>
                    <div onMouseOver={handleMouseOver}
                        className='p-3 position-relative'

                        style={{
                            width: width,
                            backgroundImage: `url('/home/gallery_section/hover_img_1.jpg')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            transition: 'width .4s'
                        }}
                    >
                        <span className='bg-opacity-25 bg-black position-absolute start-0 end-0 top-0 bottom-0'></span>
                        <div className='h-100 position-relative d-flex flex-row justify-content-between align-items-end' >
                            <h6
                                style={hoverTextStyleBlr}
                            >
                                THE ZURI KUMARAKOM, KERALA RESORT & SPA
                            </h6>

                            <Link href="/lake-resorts-in-kumarakom/gallery/"
                                style={hoverBtn}
                                className='text-decoration-none rounded-circle flex-column justify-content-center'
                            >
                                <h6
                                    className='mb-0 lh-sm text-center text-black font11px text-black'
                                >
                                    VIEW <br />
                                    MORE
                                </h6>
                            </Link>
                        </div>
                    </div>
                    <div
                        onMouseOver={handleMouseOver1}
                        className='p-3 border-white border border-top-0 border-bottom-0 position-relative'
                        style={{
                            width: width1,
                            backgroundImage: `url('/home/gallery_section/hover_img_2.jpg')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            transition: 'width .4s'
                        }}
                    >
                        <span className='bg-opacity-25 bg-black position-absolute start-0 end-0 top-0 bottom-0'></span>
                        <div className='h-100 position-relative d-flex flex-row justify-content-between align-items-end' >
                            <h6
                                style={hoverTextStyleBlr1}
                            >
                                THE ZURI WHITE SANDS, GOA RESORT & CASINO
                            </h6>

                            <Link href="/beach-resorts-in-goa/gallery/"
                                style={hoverBtn2}
                                className='text-decoration-none rounded-circle flex-column justify-content-center'
                            >
                                <p
                                    className='mb-0 lh-sm text-center text-black font11px text-black'
                                >
                                    VIEW <br />
                                    MORE
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div
                        onMouseOver={handleMouseOver2}
                        style={{
                            width: width2,
                            backgroundImage: `url('/home/gallery_section/hover_img_3.jpg')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            transition: 'width .4s'
                        }}
                        className='p-3 position-relative'
                    >
                        <span className='bg-opacity-25 bg-black position-absolute start-0 end-0 top-0 bottom-0'></span>
                        <div className='h-100 position-relative d-flex flex-row justify-content-between align-items-end' >
                            <h6
                                className='custom-home-gallery'
                                style={hoverTextStyleBlr2}
                            >
                                THE ZURI WHITEFIELD, BENGALURU
                            </h6>
                            <Link
                                href="/hotels-in-bengaluru/gallery/"
                                style={hoverBtn3}
                                className='text-decoration-none rounded-circle flex-column justify-content-center'
                            >
                                <h6
                                    className='mb-0 lh-sm text-center text-black font11px text-black'
                                >
                                    VIEW <br />
                                    MORE
                                </h6>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>


            {/* Mobile View */}
            <Container className='p-0 py-5 d-md-none flex-column d-flex' >
                <Col className='d-flex flex-column align-items-center'>
                    <Image src='/cl.png' alt='' width={50} height={50} />
                    <h6 className='py-2'>GALLERY</h6>
                </Col>

                <div className="d-flex flex-lg-row flex-column" >
                    <div
                        className=' position-relative '
                        style={{
                            height: '200px',
                            backgroundImage: `url('/home/gallery_section/hover_img_1.jpg')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            transition: 'width .4s'
                        }}
                    >
                        {/* <span className='bg-opacity-25 bg-black position-absolute start-0 end-0 top-0 bottom-0'></span> */}
                        <div className='h-100 position-relative d-flex flex-row justify-content-between align-items-end bg-opacity-25 bg-black p-3' >
                            <h6
                                className='text-white'
                            >
                                THE ZURI KUMARAKOM, KERALA RESORT & SPA
                            </h6>

                            <Link href="/lake-resorts-in-kumarakom/gallery/"
                                className='text-decoration-none flex-column justify-content-center'
                            >
                                <h6
                                    className='mb-0 lh-sm text-center text-black font11px text-black btn-circle-mob-white'
                                >
                                    VIEW <br />
                                    MORE
                                </h6>
                            </Link>
                        </div>
                    </div>
                    <div
                        className=''
                        style={{
                            height: '200px',
                            backgroundImage: `url('/home/gallery_section/hover_img_2.jpg')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            transition: 'width .4s'
                        }}
                    >
                        {/* <span className='bg-opacity-25 bg-black position-absolute start-0 end-0 top-0 bottom-0'></span> */}
                        <div
                            className='h-100 position-relative d-flex flex-row justify-content-between align-items-end bg-opacity-25 bg-black p-3 border border-1 border-start-0 border-end-0  border-white'
                        >
                            <h6
                                className='text-white'
                            >
                                THE ZURI WHITE SANDS, GOA RESORT & CASINO
                            </h6>

                            <Link href="/beach-resorts-in-goa/gallery/"
                                className='text-decoration-none flex-column justify-content-center'
                            >
                                <p
                                    className='mb-0 lh-sm text-center text-black font11px text-black btn-circle-mob-white'
                                >
                                    VIEW <br />
                                    MORE
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div
                        style={{
                            height: '200px',
                            backgroundImage: `url('/home/gallery_section/hover_img_3.jpg')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            transition: 'width .4s'
                        }}
                        className='position-relative'
                    >
                        {/* <span className='bg-opacity-25 bg-black position-absolute start-0 end-0 top-0 bottom-0'></span> */}
                        <div className='h-100 position-relative d-flex flex-row justify-content-between align-items-end bg-opacity-25 bg-black p-3' >
                            <h6
                                className='custom-home-gallery text-white'
                            >
                                THE ZURI WHITEFIELD, BENGALURU
                            </h6>
                            <Link
                                href="/hotels-in-bengaluru/gallery/"
                                className='text-decoration-none flex-column justify-content-center'
                            >
                                <h6
                                    className='mb-0 lh-sm text-center text-black font11px text-black btn-circle-mob-white'
                                >
                                    VIEW <br />
                                    MORE
                                </h6>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    )
}

export default Gallery