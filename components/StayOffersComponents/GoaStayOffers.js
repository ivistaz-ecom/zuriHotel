import Link from "next/link";
import React from "react";
import { Col, Container, Image } from "react-bootstrap";

const GoaStayOffers = () => {
    return (
        <>
            <Container className="mt-5">
                <h3 className="text-center pt-5 text-black ">GOA</h3>
                <Col className="underline-center-all"></Col>

                {/* <Col className="text-center mt-5">
          <Image src="/cl.png" alt="" fluid />
          <h6 className="py-2 pt-4 text-center">
            BENEFIT FROM OUR SPECIAL OFFERS IN GOA
          </h6>
          <h6 className="mt-4 d-inline-block border border-3 border-top-0 border-end-0 border-start-0 pb-2 ">
            STAY OFFERS
          </h6>
        </Col> */}
            </Container>

            <Container className="d-md-flex flex-column d-none mt-3">
                <Col>

                    <Col className='d-lg-flex flex-column d-none mt-5'>
                        <Col className='d-flex flex-md-row pt-5'>
                            <Col md={7} className='text-md-end text-center pe-md-4'>
                                <Col className='d-inline-block'>
                                    <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                    <h6 className='text-center'>Monsoon Indulgence MAP package </h6>
                                </Col>
                                <p> Valid from 1st July’25 till 30th Sept’25</p>
                                <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                    <Link href="/beach-resorts-in-goa/offers/monsoon-indulgence-map-package"
                                        className='bg-black text-center text-decoration-none btn-circle'
                                    >
                                        <p
                                            className=' mb-0 font11px lh-sm text-white'
                                        >
                                            KNOW<br /> MORE
                                        </p>
                                    </Link>
                                </Col>
                            </Col>
                            <Col className='d-flex flex-wrap align-content-center '>
                                <Image src='/goa/offers/monsoon_indulgence_map_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                    className='rounded-circle kumarkom-image-overlay'
                                />
                            </Col>
                        </Col>

                        <Col className='d-flex flex-row mt-5'>
                            <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                                <Image src='/goa/offers/monsoon_mania_ap_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                    className='rounded-circle kumarkom-image-overlay'
                                />
                            </Col>
                            <Col md={7} className='text-md-start text-center pe-md-4'>
                                <Col className='d-inline-block'>
                                    <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                    <h6 className='text-center'>
                                        Monsoon Mania AP package
                                    </h6>
                                </Col>
                                <p>
                                    Valid from 1st July’25 till 30th Sept’25
                                </p>
                                <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                    <Link href="/beach-resorts-in-goa/offers/monsoon-mania-ap-package"
                                        className='bg-black text-center text-decoration-none btn-circle'
                                    >
                                        <p className=' mb-0 font11px lh-sm text-white'
                                        >
                                            KNOW<br /> MORE
                                        </p>
                                    </Link>
                                </Col>
                            </Col>
                        </Col>
                        {/* <Col className='d-flex flex-md-row '>
                            <Col md={7} className='text-md-end text-center pe-md-4'>
                                <Col className='d-inline-block'>
                                    <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                    <h6 className='text-center'>Summer Getaway Package on MAP</h6>
                                </Col>
                                <p>
                                    Summer MAP package rates are valid from 1st April till 30th June’2025
                                </p>
                                <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                    <Link href="/beach-resorts-in-goa/offers/summer-getaway-package-on-map/"
                                        className='bg-black text-center text-decoration-none btn-circle'
                                    >
                                        <p className=' mb-0 font11px lh-sm text-white'
                                        >
                                            KNOW<br /> MORE
                                        </p>
                                    </Link>
                                </Col>
                            </Col>
                            <Col className='d-flex flex-wrap align-content-center '>
                                <Image src='/goa/offers/Beach-Bon-Fire-3.jpg' alt='' roundedCircle width={180} height={180}
                                    className='rounded-circle kumarkom-image-overlay'
                                />
                            </Col>
                        </Col>


                        <Col className='d-flex flex-row mt-5'>
                            <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                                <Image src='/goa/offers/Beach-Bon-Fire-4.jpg' alt='' roundedCircle width={180} height={180}
                                    className='rounded-circle kumarkom-image-overlay'
                                />
                            </Col>
                            <Col md={7} className='text-md-start text-center pe-md-4'>
                                <Col className='d-inline-block'>
                                    <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                    <h6 className='text-center'>
                                        Summer Getaway Package on AP
                                    </h6>
                                </Col>
                                <p>
                                    Summer AP package rates are valid from 1st April till 30th June’2025
                                </p>
                                <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                    <Link href="/beach-resorts-in-goa/offers/summer-getaway-package-on-ap/"
                                        className='bg-black text-center text-decoration-none btn-circle'
                                    >
                                        <p className=' mb-0 font11px lh-sm text-white'
                                        >
                                            KNOW<br /> MORE
                                        </p>
                                    </Link>
                                </Col>
                            </Col>
                        </Col> */}
                    </Col>
                    {/* <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>
                                    WINTER GETAWAY PACKAGE ON AP
                                </h6>
                            </Col>
                            <p>
                                Package Valid from 1st Oct 2023 to 31 March 2024
                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/beach-resorts-in-goa/offers/winter-getaway-package-on-ap/"
                                    className='bg-black text-center rounded-circle text-decoration-none p-1 '>
                                    <p
                                        className='m-0 lh-sm text-white btn-circle'
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/all_package_img/winter_package_icon.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col> */}

                    {/* <Col className='d-flex flex-row mt-5'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/all_package_img/winter_package_map_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>
                                    SUMMER GETAWAY PACKAGE ON AP
                                </h6>
                            </Col>
                            <p>
                                Package Valid from 1st April till 30th June’24
                            </p>
                            <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                <Link href="/beach-resorts-in-goa/offers/summer-getaway-package-on-ap/"
                                    className='bg-black text-center text-decoration-none btn-circle'
                                >
                                    <p className=' mb-0 font11px lh-sm text-white'
                                    >
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                    </Col>

                    <Col className='d-flex flex-md-row pt-5'>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>SUMMER GETAWAY PACKAGE ON MAP</h6>
                            </Col>
                            <p>from 1st April till 30th June’24</p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/beach-resorts-in-goa/offers/summer-getaway-package-on-map/"
                                    className='bg-black text-center text-decoration-none btn-circle'
                                >
                                    <p
                                        className=' mb-0 font11px lh-sm text-white'
                                    >
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/all_package_img/winter_package_map_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col> */}

                    {/* Monsoon Mania AP Package */}

                    {/* <Col className='d-flex flex-row mt-5'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/all_package_img/monson_ap_thumb.png' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>
                                    Monsoon Mania AP Package
                                </h6>
                            </Col>
                            <p>
                                Package Valid from 1st July 2024 till 30th Sept 2024
                            </p>
                            <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                <Link href="/beach-resorts-in-goa/offers/monsoon-mania-ap-package/"
                                    className='bg-black text-center text-decoration-none btn-circle'
                                >
                                    <p className=' mb-0 font11px lh-sm text-white'
                                    >
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                    </Col> */}

                    {/* Monsoon Mania MAP Package */}
                    {/* <Col className='d-flex flex-md-row pt-5'>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>
                                    Monsoon Mania MAP Package
                                </h6>
                            </Col>
                            <p>Package Valid from 1st July 2024 till 30th Sept 2024</p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/beach-resorts-in-goa/offers/monsoon-mania-map-package/"
                                    className='bg-black text-center text-decoration-none btn-circle'
                                >
                                    <p
                                        className=' mb-0 font11px lh-sm text-white'
                                    >
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/all_package_img/monson_maniya_map.png' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col> */}
                </Col>
            </Container>

            {/* Mobile View */}
            <Container className="p-0 d-flex flex-column d-md-none ">
                <Col className="p-2">
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>
                                Monsoon Indulgence MAP package
                            </h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/goa/offers/monsoon_indulgence_map_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>valid from 1st July’25 till 30th Sept’25</p>
                        <Link href="/beach-resorts-in-goa/offers/monsoon-indulgence-map-package/"
                            className='bg-black text-center rounded-circle text-decoration-none p-1'>
                            <p
                                className='m-0 lh-sm text-white btn-circle'
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>
                                Monsoon Mania AP package
                            </h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/goa/offers/monsoon_mania_ap_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>Valid from 1st July’25 till 30th Sept’25</p>
                        <Link href="/beach-resorts-in-goa/offers/monsoon-mania-ap-package"
                            className='bg-black text-center rounded-circle text-decoration-none p-1'>
                            <p
                                className='m-0 lh-sm text-white btn-circle'
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>
                    {/* <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>Summer Getaway Package on MAP</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/goa/offers/Beach-Bon-Fire-3.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>  Summer MAP package rates are valid from 1st April till 30th June’2025</p>
                        <Link href="/beach-resorts-in-goa/offers/summer-getaway-package-on-map/"
                            className='bg-black text-center rounded-circle text-decoration-none p-1'>
                            <p
                                className='m-0 lh-sm text-white btn-circle'
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'> Summer Getaway Package on AP</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/goa/offers/Beach-Bon-Fire-4.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>  Summer AP package rates are valid from 1st April till 30th June’2025 </p>
                        <Link href="/beach-resorts-in-goa/offers/summer-getaway-package-on-ap/"
                            className='bg-black text-center rounded-circle text-decoration-none p-1'>
                            <p
                                className='m-0 lh-sm text-white btn-circle'
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col> */}
                    {/* <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>SUMMER GETAWAY PACKAGE ON AP</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/all_package_img/winter_package_map_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>Package Valid from 1st April till 30th June’24</p>
                        <Link href="/beach-resorts-in-goa/offers/summer-getaway-package-on-ap/"
                            className='bg-black text-center rounded-circle text-decoration-none p-1'>
                            <p
                                className='m-0 lh-sm text-white btn-circle'
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>SUMMER GETAWAY PACKAGE ON MAP</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/all_package_img/winter_package_map_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>Package Valid from 1st April till 30th June’24</p>
                        <Link href="/beach-resorts-in-goa/offers/summer-getaway-package-on-map/"
                            className='bg-black text-center rounded-circle text-decoration-none p-1'>
                            <p
                                className='m-0 lh-sm text-white btn-circle'
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col> */}

                    {/* <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>
                                Monsoon Mania AP Package
                            </h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/all_package_img/monson_ap_thumb.png' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>Package Valid from 1st July 2024 till 30th Sept 2024</p>
                        <Link href="/beach-resorts-in-goa/offers/monsoon-mania-ap-package/"
                            className='bg-black text-center rounded-circle text-decoration-none p-1'>
                            <p
                                className='m-0 lh-sm text-white btn-circle'
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>
                                Monsoon Mania MAP Package
                            </h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/all_package_img/monson_maniya_map.png' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>Package Valid from 1st July 2024 till 30th Sept 2024</p>
                        <Link href="/beach-resorts-in-goa/offers/monsoon-mania-map-package/"
                            className='bg-black text-center rounded-circle text-decoration-none p-1'>
                            <p
                                className='m-0 lh-sm text-white btn-circle'
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col> */}
                </Col>
            </Container>
        </>
    );
};

export default GoaStayOffers;
