import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import Link from 'next/link'

const AdvanceBookingContent = () => {
  return (

    <>
      <Container className='pt-md-1 p-2'>
        <Col className='d-flex flex-column flex-wrap gap-md-2 gap-3'>
          <Col className='pt-md-5 pt-3'>
            <h6 className='text-black'>Inclusions:</h6>
            <ul>
              <li>25% discount on room with breakfast bookings</li>
              <li>15% discount on Food, Soft Beverages & Spa Treatments</li>
              <li>Wi-Fi</li>
            </ul>
          </Col>
          <Col>
            <h6 className='text-black'>Cancellation Policy:</h6>
            <p>One night penalty charges for the cancellations within 48hrs from the arrival date and for the early departures as well.</p>
            <p>All reservations must be guaranteed with a credit card.</p>
          </Col>
          <Col>
            <h6 className='text-black'>Conditions:</h6>
            <p>All offers are subject to availability at the time of booking. </p>
            <p>This offer cannot be combined with any other promotions and are not applicable for group reservations. </p>
          </Col>
          <Col>
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

export default AdvanceBookingContent