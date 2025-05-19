import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import Link from 'next/link'

const AdvanceBookingContent = () => {

  const today = new Date();
  const availableFrom = new Date(today);
  availableFrom.setDate(today.getDate() + 21); // Start from 21 days later
  const formattedAvailableFrom = availableFrom.toISOString().split("T")[0];

  const synxisURL = `https://be.synxis.com/?adult=1&arrive=${formattedAvailableFrom}&chain=17869&child=0&currency=INR&hotel=64786&level=hotel&locale=en-US&productcurrency=INR`;

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
          {/* <hr className='p-0 m-0' /> */}
          {/* <Col>
            <h6 className='text-black pt-4'>Guarantee Policy</h6>
            <p>Prepayment: The total price of the reservation may be charged at any time after booking.</p>
            <p>Payment Options: RuPay and BHIM UPI payment options are available at the hotel.</p>
          </Col> */}
          <hr className='p-0 m-0' />
          <Col>
            <h6 className='text-black pt-4'>Cancellation Policy:</h6>
            <p>If a cancellation is received within 7 days of the arrival date or if the room is not utilized, 100% of the total package cost shall be charged as retention.</p>
          </Col>
          <hr className='p-0 m-0' />
          <Col>
            <h6 className='text-black pt-4'>Conditions:</h6>
            <p>Only bookings made 21 days or more in advance for stays are eligible for this offer.</p>
            <p>All offers are subject to availability at the time of booking. </p>
            <p>This offer cannot be combined with any other promotions and are not applicable for group reservations. </p>
          </Col>
          <hr className='p-0 m-0' />
          <Col className='text-center my-4'>
            <Link href={synxisURL} target="_blank" className="text-decoration-none">
              <p className='bg-purple d-inline-block text-white px-4 py-2'>Book Now</p>
            </Link>
          </Col>
        </Col>
      </Container>
    </>
  )
}

export default AdvanceBookingContent
