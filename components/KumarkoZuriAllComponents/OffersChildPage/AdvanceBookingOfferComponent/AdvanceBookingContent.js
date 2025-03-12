import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import Link from 'next/link'

const AdvanceBookingContent = () => {
  return (
    <>
      <Container className='d-flex flex-column'>
        <Col className='d-flex flex-column flex-wrap gap-md-2 gap-3'>
          <Col className='pt-md-5 pt-3'>
            <h6 className='text-black'>Inclusions:</h6>
            <ul className='list-unstyled'>
              <li>25% discount on room with breakfast bookings</li>
              <li>15% discount on Food, Soft Beverages & Spa Treatments</li>
              <li>Wi-Fi</li>
            </ul>
          </Col>
          <hr className='p-0 m-0' />
          <Col>
            <h6 className='text-black pt-4'>Guarantee Policy</h6>
            <p>Prepayment: The total price of the reservation may be charged at any time after booking.</p>
            <p>Payment Options: RuPay and BHIM UPI payment options are available at the hotel.</p>
          </Col>
          <hr className='p-0 m-0' />
          <Col>
            <h6 className='text-black pt-4'>Cancellation Policy:</h6>
            <p>Advance Purchase: A cancellation policy applies for bookings made at least 7 days in advance.</p>
            <p>No-Show: In case of a No-Show, the total price of the reservation will be charged.</p>
          </Col>
          <hr className='p-0 m-0' />
          <Col>
            <h6 className='text-black pt-4'>Conditions:</h6>
            <p>If a cancellation is received within 7 days of the arrival date or if the room is not utilized, 100% of the total package cost shall be charged as retention.</p>
            
          </Col>
          <hr className='p-0 m-0' />
          <Col className='text-center my-4'>
            <Link
              href='https://be.synxis.com/?_ga=2.21871420.62180047.1693482265-2038087003.1664255723&_gac=1.251856763.1690453396.CjwKCAjwq4imBhBQEiwA9Nx1Bi6aiGcfgk-uDDRypiK5UqXgtik--oBXV3gga2OF4WXNJFxRCRxuCRoCl0wQAvD_BwE&adult=1&arrive=2023-09-06&chain=17869&child=0&currency=INR&depart=2023-09-07&hotel=64786&level=hotel&locale=en-US&rate=PROHMP&rooms=1'
              target='_blank'
              className='text-decoration-none'
            >
              <p className='bg-purple d-inline-block text-white px-4 py-2'>Book Now</p>
            </Link>
          </Col>
        </Col>
      </Container>
    </>
  )
}

export default AdvanceBookingContent
