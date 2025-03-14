import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

import Link from 'next/link'

const ZuriRoomContent = () => {

    const AmitiesBg = {
        background: '#cab17b'
    }

    const bookNow = {
        background: 'purple'
    }

    return (
        <>
            <Container className='p-0 py-4 text-center '>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 text-center'>ZURI ROOM</h6>

                <Col className='px-5'>
                    <p>
                        Enjoy a cup of fragrant tea while looking out at a golden sunrise across the calm waters of the lagoon from the beautiful private verandah that comes with this room. The Zuri rooms are ideal for both—a holiday as well as a short business stay, and will leave you wishing to return to This oasis of peace and luxury.
                    </p>

                    <p>
                        Note: The guests can Check-in at 3:00PM and Check-out at 11:00AM based on the duration of their stay.
                    </p>
                </Col>

                <Col className='my-5 py-5' style={AmitiesBg}>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>AMENITIES</h6>

                    <p className='text-black'>
                        24-hour Room Service | 32″ LCD Television | Mini Bar | Wi-Fi Access | Air Conditioning | Tea and Coffee Maker |
                        <br />
                        Hair Dryer | Bathtub | In-Room Safe | Complimentary Breakfast
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

export default ZuriRoomContent