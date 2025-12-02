import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const CottageContent = () => {
    const AmitiesBg = {
        background: '#cab17b'
    }

    const bookNow = {
        background: 'purple'
    }

    return (
        <>
            <Container className='p-0 py-4 text-center'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 text-center'>ZURI LAGOON VIEW COTTAGE</h6>

                <Col className='px-5'>
                    <p>
                        Recreating the charm of Kerala, the quaint Zuri cottages offer a world of modern luxury and natural beauty. Beautiful interiors complement the stunning views of the blue lagoon that stretches across the horizon. Choose to stay in the Zuri Cottage and be transported to an ethereal world of beauty and luxury.
                    </p>

                    <p>
                        Note: The guests can Check-in at 3:00PM and Check-out at 11:00AM based on the duration of their stay.
                    </p>
                </Col>

                <Col className='my-5 py-5' style={AmitiesBg}>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>AMENITIES</h6>

                    <p className='text-black'>
                        International Direct Dialling | 24-hour Room Service | 32″ LCD Television | Complimentary Breakfast | Mini Bar
                        <br />
                        | Wi-Fi Access | Air Conditioning | Tea and Coffee Maker | Hair Dryer | Bathtub | Iron and Ironing Board
                        <br />
                        | In-Room Safe | Daily Newspaper


                    </p>
                    <Link
                        href="https://be.synxis.com/?_ga=2.56530732.62180047.1693482265-2038087003.1664255723&_gac=1.161572430.1690453396.CjwKCAjwq4imBhBQEiwA9Nx1Bi6aiGcfgk-uDDRypiK5UqXgtik--oBXV3gga2OF4WXNJFxRCRxuCRoCl0wQAvD_BwE&adult=1&arrive=2023-09-02&chain=17869&child=0&currency=INR&depart=2023-09-03&hotel=64786&level=hotel&locale=en-US&rooms=1"
                        target='_blank'
                        className='text-decoration-none'
                    >
                        <p className='text-white d-inline-block px-3 py-2' style={bookNow}>
                            Book Now
                        </p>

                    </Link>
                </Col>
                <Col>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>ROOM TYPES</h6>

                </Col>
            </Container>
        </>
    )
}

export default CottageContent 