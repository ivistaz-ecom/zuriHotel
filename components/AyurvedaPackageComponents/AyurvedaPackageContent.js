import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import Link from 'next/link'

const AyurvedaPackageContent = () => {
    return (
        <>
            <Container className='p-0 py-3 text-center d-md-block d-none'>
                <Col>
                    <Col className='dimond-package'>
                    </Col>
                    <Image src='/cl.png' alt='' fluid />
                    <h4 className='py-2 pt-4 text-center text-black'>BENEFIT FROM OUR AYURVEDA PACKAGE</h4>
                    <Col className='position-relative'>
                        <div className='underline'>
                            <span className='down-arrow'></span>
                        </div>
                    </Col>
                </Col>

                {/* Desktop View */}
                <Col className='d-md-flex flex-column d-none mt-5'>
                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>REJUVENATION PACKAGE</h6>
                            </Col>
                            <p>
                                Rejuvenation – The term itself means “reversing the aging process”
                                <br />
                                and  this program aims at making one feel younger.


                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/lake-resorts-in-kumarakom/offers/rejuvenation-package-programme/"
                                    className='bg-black text-center rounded-circle text-decoration-none '>
                                    <p
                                        className='m-0 lh-sm text-white btn-circle'
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/kumarkom/offers/rejuvenation_programmer_2025.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>


                    <Col className='d-flex flex-row mt-5'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/kumarkom/offers/ayurvedha_panchakarma.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>PANCHAKARMA PACKAGE</h6>
                            </Col>
                            <p>
                                Panchakarma – These are the body purificatory procedures which are
                                <br />
                                mentioned in Ayurveda to purify our body.
                            </p>
                            <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                <Link href="/lake-resorts-in-kumarakom/offers/panchakarma-programme/"
                                    className='bg-black text-center rounded-circle text-decoration-none '>
                                    <p
                                        className='m-0 lh-sm text-white btn-circle'
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                    </Col>

                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>SKIN CARE AND BEAUTY CARE PROGRAMME</h6>
                            </Col>
                            <p>
                                Beauty is not just about skin color or tone.
                                <br />
                                According to Ayurveda, our skin health reflects our physical, mental, and spiritual well-being

                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/lake-resorts-in-kumarakom/offers/skin-care-and-beauty-care-programme/"
                                    className='bg-black text-center rounded-circle text-decoration-none '>
                                    <p
                                        className='m-0 lh-sm text-white btn-circle'
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/kumarkom/offers/skincare_package.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row mt-5'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/kumarkom/offers/weight_management.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>WEIGHT MANAGEMENT PACKAGE</h6>
                            </Col>
                            <p>
                                From the perspective of Ayurveda, losing weight is not about
                                <br />
                                starving or suppressing the appetite. It is about balancing your fat metabolism.

                            </p>
                            <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                <Link href="/lake-resorts-in-kumarakom/offers/weight-management-programme/"
                                    className='bg-black text-center rounded-circle text-decoration-none '>
                                    <p
                                        className='m-0 lh-sm text-white btn-circle'
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                    </Col>

                    <Col className='d-flex flex-md-row pt-4'>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>MENTAL WELLNESS PACKAGE</h6>
                            </Col>
                            <p>
                                Indulge in our Mental Wellness Package, designed to enhance your emotional,
                                <br />
                                psychological, and social wellbeing with the gentle practices of Ayurveda.
                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/lake-resorts-in-kumarakom/offers/mental-wellness-package/"
                                    className='bg-black text-center rounded-circle text-decoration-none '>
                                    <p
                                        className='m-0 lh-sm text-white btn-circle'
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/kumarkom/offers/mental_wellness_2025.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row mt-5'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/kumarkom/offers/antiaging_package_thumb_6.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>ANTIAGING PACKAGE</h6>
                            </Col>
                            <p>
                                The Anti-Aging Package nourishes your body and mind with a combination
                                <br />
                                of wholesome activities, nourishing diet, and gentle herbs.
                            </p>
                            <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                <Link href="/lake-resorts-in-kumarakom/offers/antiaging-package/"
                                    className='bg-black text-center rounded-circle text-decoration-none '>
                                    <p
                                        className='m-0 lh-sm text-white btn-circle'
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                    </Col>

                    <Col className='d-flex flex-md-row pt-4'>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>KARKIDAKAM AYURVEDA TREATMENT</h6>
                            </Col>
                            <p>
                                Embrace the healing power of Ayurveda with our Karkidaka Treatment,
                                <br />
                                also known as Monsoon treatment in Malayalam.
                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/lake-resorts-in-kumarakom/offers/karkidakam-ayurveda-treatment/"
                                    className='bg-black text-center rounded-circle text-decoration-none '>
                                    <p
                                        className='m-0 lh-sm text-white btn-circle'
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/kumarkom/offers/karkidakam_package_thumb_7.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>

                </Col>
            </Container>



            {/* Mobile View */}
            <Container className='p-0 d-flex flex-column d-md-none '>
                <Col className='p-2'>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>REJUVENATION PACKAGE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/offers/rejuvenation_programmer_2025.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Rejuvenation – The term itself means “reversing the aging process”
                            <br />
                            and this program aims at making one feel younger.

                        </p>
                        <Link href="/lake-resorts-in-kumarakom/offers/rejuvenation-package-programme/"
                            className='bg-black text-center rounded-circle text-decoration-none btn-circle'>
                            <p
                                className='m-0 lh-sm text-white '
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>PANCHAKARMA PACKAGE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/offers/ayurvedha_panchakarma.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Panchakarma – These are the body purificatory procedures which are
                            <br />
                            mentioned in Ayurveda to purify our body.
                        </p>
                        <Link href="/lake-resorts-in-kumarakom/offers/panchakarma-programme/"
                            className='bg-black text-center rounded-circle text-decoration-none btn-circle'>
                            <p
                                className='m-0 lh-sm text-white '
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>DETOXIFICATION PACKAGE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/offers/skincare_package.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Beauty is not just about skin color or tone.
                            <br />
                            According to Ayurveda, our skin health reflects our physical, mental, and spiritual well-being

                        </p>
                        <Link href="/lake-resorts-in-kumarakom/offers/skin-care-and-beauty-care-programme/"
                            className='bg-black text-center rounded-circle text-decoration-none btn-circle'>
                            <p
                                className='m-0 lh-sm text-white '
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>WEIGHT MANAGEMENT PACKAGE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/offers/weight_management.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>

                            From the perspective of Ayurveda, losing weight is not about
                            <br />
                            starving or suppressing the appetite. It is about balancing your fat metabolism.

                        </p>
                        <Link href="/lake-resorts-in-kumarakom/offers/weight-management-programme/"
                            className='bg-black text-center rounded-circle text-decoration-none btn-circle'>
                            <p
                                className='m-0 lh-sm text-white '
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>MENTAL WELLNESS PACKAGE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/offers/mental_wellness_2025.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Indulge in our Mental Wellness Package, designed to enhance your emotional,
                            <br />
                            psychological, and social wellbeing with the gentle practices of Ayurveda..
                        </p>
                        <Link href="/lake-resorts-in-kumarakom/offers/mental-wellness-package/"
                            className='bg-black text-center rounded-circle text-decoration-none btn-circle'>
                            <p
                                className='m-0 lh-sm text-white '
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>ANTIAGING PACKAGE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/offers/antiaging_package_thumb_6.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            The Anti-Aging Package nourishes your body and mind with a combination
                            <br />
                            of wholesome activities, nourishing diet, and gentle herbs.
                        </p>
                        <Link href="/lake-resorts-in-kumarakom/offers/antiaging-package/"
                            className='bg-black text-center rounded-circle text-decoration-none btn-circle'>
                            <p
                                className='m-0 lh-sm text-white '
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>KARKIDAKAM AYURVEDA TREATMENT</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/offers/karkidakam_package_thumb_7.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Embrace the healing power of Ayurveda with our Karkidaka Treatment,
                            <br />
                            also known as Monsoon treatment in Malayalam.
                        </p>
                        <Link href="/lake-resorts-in-kumarakom/offers/karkidakam-ayurveda-treatment/"
                            className='bg-black text-center rounded-circle text-decoration-none btn-circle'>
                            <p
                                className='m-0 lh-sm text-white '
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>
                </Col>
            </Container>
        </>
    )
}

export default AyurvedaPackageContent