import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const LastMinuteBengaluruContent = () => {
    return (
        <>
            <Container className='p-md-0 p-2  text-center'>

                <Col className='py-4'>
                    <h6 className='text-black'>LAST MINUTE STEAL</h6>
                    <p>
                        Book your stay at the Whitefield, Bengaluru 0-7 days in advance and enjoy a 15% off your room.
                    </p>
                    <h6 className='text-custom-grey'>
                        BOOK A ZURI ROOM FOR THE BELOW INCLUSIONS:
                    </h6>
                    <p>
                        Complimentary Breakfast
                    </p>
                    <p>
                        Complimentary WI-FI for 3 devices
                    </p>
                    <p>
                        10% Discount on Food & Soft Beverages & Laundry. Package Includes Buffet Breakfast & Wi-Fi.
                    </p>
                    <h6 className='text-custom-grey'>
                        BOOK A CLUB ROOM FOR BELOW ADDITIONAL INCLUSIONS:
                    </h6>
                    <p>
                        One Way Airport Transfer
                    </p>
                    <p>
                        Cocktail Hours (60Min/Unlimited/IMFL)
                    </p>
                    <p>
                        2 piece laundry per day
                    </p>
                    <p>
                        Fruit Platter
                    </p>
                    <p>
                        15% Discount on Food, Soft Beverages & Laundry. Package Includes Buffet Breakfast, Wi-Fi, Cocktail Hours, ONE Way Airport transfers, 2 Pieces of Laundry per day & CUT Fruit Platter.
                    </p>


                </Col>

                <Col>
                    <Link
                        href="https://be.synxis.com/?_ga=2.56530732.62180047.1693482265-2038087003.1664255723&_gac=1.161572430.1690453396.CjwKCAjwq4imBhBQEiwA9Nx1Bi6aiGcfgk-uDDRypiK5UqXgtik--oBXV3gga2OF4WXNJFxRCRxuCRoCl0wQAvD_BwE&adult=1&arrive=2023-09-02&chain=17869&child=0&currency=INR&depart=2023-09-03&hotel=64786&level=hotel&locale=en-US&rooms=1"
                        target='_blank'
                        className='text-decoration-none'
                    >
                        <p className='text-white d-inline-block px-3 py-2 text-purple'>
                            Book Now
                        </p>
                    </Link>
                </Col>

            </Container>
        </>
    )
}

export default LastMinuteBengaluruContent