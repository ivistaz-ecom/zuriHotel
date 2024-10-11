import Link from 'next/link'
import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'

const HoneyMoonContent = () => {
    return (
        <>
            <Container className='pt-md-5 p-2'>

                <Col className='text-center'>
                    <h6 className='text-decoration-underline text-black'>HONEYMOON PACKAGE</h6>

                    <p>
                        Package Valid from 01st April 2024 to 30th September 2024
                    </p>
                    <p>
                        02 Nights Package
                    </p>

                </Col>

                <Col>
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <p className='text-custom-grey mb-0' >ZURI LAGOON VIEW ROOM	</p>
                                </th>
                                <th scope="col">
                                    <p className='text-custom-grey mb-0' >ZURI DELUXE LAGOON VIEW ROOM</p>
                                </th>
                                <th scope="col">
                                    <p className='text-custom-grey mb-0' >ZURI LAGOON VIEW COTTAGE</p>
                                </th>
                                <th scope="col">
                                    <p className='text-custom-grey mb-0' >PRESIDENTIAL POOL VILLA</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <p className='text-custom-grey mb-0' > INR 45,000.00/- </p>
                                </th>
                                <td>
                                    <p className='text-custom-grey mb-0' >INR 50,000.00/- </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0' >INR 55,000.00/- </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0' >INR 1,10,000.00/- </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Col>

                <Col className='d-flex flex-column flex-wrap gap-md-5 gap-3'>
                    <Col className='pt-md-5 pt-3'>
                        <h6 className='text-black'>INCLUSIONS FOR ALL THE ABOVE PACKAGES :</h6>
                        <ul>
                            <li>Accommodation in well-appointed room for a couple</li>
                            <li>Refreshing welcome drink on arrival & Fruit basket in the room on the day of arrival</li>
                            <li>Delicious cake in the room on arrival</li>
                            <li>Chocolate platter every day during your stay</li>
                            <li>Evening Tea/Coffee with cookies</li>
                            <li>High Speed Wireless Internet</li>
                            <li>Romantic Floral bath & floral bed décor in room once during the stay</li>
                            <li>In room breakfast on fixed menu</li>
                            <li>Rejuvenation massage for the couple once during their stay</li>
                            <li>Candle light dinner – set 4 course menu designed by our expert chefs once during the stay</li>
                            <li>15% discounts on Ayurvedic spa treatments</li>
                            <li>Cycling in the resort between 09:00am to 06:00pm.</li>
                            <li>Fishing in the lagoon between 09:00am to 06:00pm.</li>
                            <li>Complimentary use of Swimming Pool, Jacuzzi, Gymnasium Sauna & Steam
                                <br />
                                (Prior appointments required) – (Conditions apply – Once its operational)
                            </li>
                        </ul>
                    </Col>

                    <Col>
                        <h6 className='text-black'>TERMS & CONDITIONS :</h6>
                        <ul>
                            <li>Rates mentioned are for 02 nights stay only. Additional nights required can be offered on a pro – rata basis.</li>
                            <li>The rates are inclusive of currently applicable taxes (Subject to change).</li>
                            <li>Confirmation of rooms is subject to receipt of guarantee in form of an advance payment, credit card guarantee, 100% deposit is required 07 days prior to arrival post which booking will be released.</li>
                            <li>Bookings for more than two rooms at a given rate will be confirmed at the sole discretion of the hotel.</li>
                            <li>This is a limited room and period offer – only limited number of rooms are available under this offer, rates are subject to increase on holidays and extended weekends.</li>
                            <li>This offer cannot be used in conjunctions with any other offer or discount on privilege cards.</li>
                            <li>Check in 1500 Hrs. and Check out 1100 Hrs.</li>
                            <li>Hotel terms and conditions apply.</li>
                            <li>Above package shall be applicable only for newly wedded couples.</li>
                        </ul>
                    </Col>

                    <Col>
                        <h6 className='text-black'>CANCELLATION POLICY :</h6>
                        <ul>
                            <li>No charges, if cancelled before 07 days.</li>
                            <li>50% of total room value will be charged, if cancelled within 07 days or in event of a No Show/Late Cancellation.</li>
                            <li>100% of total room value will be charged, if cancelled within 03 days or in event of a No Show/Late Cancellation.</li>
                            <li>The hotel reserves the right to levy room charge as early departure fee should the guest/s wish to checkout earlier than the date confirmed.</li>
                        </ul>
                    </Col>

                    <Col>
                        <h6 className='text-black'>GUARANTEE POLICY :</h6>
                        <ul>
                            <li>All reservations must be guaranteed with 100% advance payments or by a Visa, Master or American Express Credit card. The hotel reserves the right to charge credit cards 07 days prior to arrival date.
                            </li>
                        </ul>
                    </Col>

                    <Col>
                        <p>
                            <b>
                                Airport transfer (Cochin airport) can be arranged by a sedan car at INR 4,480/- per way or by a Toyota Innova car at INR 5,600/- or by a Toyota Crysta car at INR 6,160/- per way.
                            </b>
                        </p>

                        <p className='text-custom-grey'>
                            <b>
                                NOTE: CONSIDERING SAFETY & HEALTH OF OUR VALUABLE GUEST, WE STRICTLY FOLLOW GOVERNMENT GUIDELINES FOR COVID – 19
                            </b>
                        </p>

                        <Col className='text-center my-4'>
                            <Link
                                href='https://be.synxis.com/?_ga=2.21871420.62180047.1693482265-2038087003.1664255723&_gac=1.251856763.1690453396.CjwKCAjwq4imBhBQEiwA9Nx1Bi6aiGcfgk-uDDRypiK5UqXgtik--oBXV3gga2OF4WXNJFxRCRxuCRoCl0wQAvD_BwE&adult=1&arrive=2023-09-06&chain=17869&child=0&currency=INR&depart=2023-09-07&hotel=64786&level=hotel&locale=en-US&rate=PROHMP&rooms=1'
                                target='_blank'
                                className='text-decoration-none '
                            >
                                <p className='bg-purple d-inline-block text-white px-4 py-2'> Book Now</p>
                            </Link>
                        </Col>
                    </Col>
                </Col>

            </Container>
        </>
    )
}

export default HoneyMoonContent