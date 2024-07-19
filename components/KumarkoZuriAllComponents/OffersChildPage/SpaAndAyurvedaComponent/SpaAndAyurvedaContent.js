import Link from 'next/link'
import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'

const SpaAndAyurvedaContent = () => {
    return (
        <>
            <Container className='pt-md-5 p-2'>

                <Col className='text-center'>
                    <h6 className='text-decoration-underline fw-bold text-black'>Western Spa & Ayurveda Packages for Non-Resident Guests</h6>
                </Col>

                <Col className=" ">
              <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <div className="bg-white p-lg-5 p-3 position-relative">

                  <div className="align-items-start">
                    <div className="mb-4">
                      <p className="mb-2 fw-bold fs-6 text-black ">
                        Maya Spa – Ayurveda Package
                      </p>
                      <div className="mb-0 ps-3 fs-4">
                        <p className="fs-6">
                          Purchase 10 hours and receive 1 hour free, priced at
                          Rs 28,999 (validity: 3 months).
                        </p>
                        <p className="fs-6">
                          Purchase 20 hours and receive 3 hours free, priced at
                          Rs 53,999 (validity: 6 months).
                        </p>
                        <p className="fs-6">
                          Purchase 30 hours and receive 6 hours free, priced at
                          Rs 74,999 (validity: 1 year).
                        </p>
                      </div>
                    </div>

                    <div className="my-5">
                      <p className="mb-2 fw-bold fs-6 text-black">
                        Maya Spa – Western Package
                      </p>
                      <div className="mb-0 ps-3">
                        <p className="fs-6">
                          Purchase 10 hours and receive 1 hour free, priced at
                          Rs 38,999 (validity: 3 months).
                        </p>
                        <p className="fs-6">
                          Purchase 20 hours and receive 3 hours free, priced at
                          Rs 73,999 (validity: 6 months).
                        </p>
                        <p className="fs-6">
                          Purchase 30 hours and receive 6 hours free, priced at
                          Rs 105,000 (validity: 1 year).
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="fw-bold fs-6 text-black">Membership Benefits:</p>
                      <div className="mb-0 ps-3">
                        <p className="fs-6">
                          Complimentary Wellness consultation.
                        </p>
                        <p className="fs-6">
                          Access to the swimming pool and wet area when
                          redeeming spa package hours.
                        </p>
                        <p className="fs-6">
                          Therapies of different durations can be combined, but
                          please note that only Ayurveda therapies are included
                          in the Ayurveda Package, while only spa therapies are
                          included in the Western packages.
                        </p>
                      </div>
                    </div>

                    <div className="my-5">
                      <p className="mb-2 fw-bold fs-6 text-black">
                        Package Terms & Conditions:
                      </p>
                      <div className="mb-0 ps-3">
                        <p className="fs-6">
                          Advance booking required at least one day prior to
                          secure time slots.
                        </p>
                        <p className="fs-6">
                          The code of conduct is crucial at the resort. Failure
                          to adhere to this may result in the termination of the
                          package without a refund.
                        </p>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </Col>

            </Container>
        </>
    )
}




export default SpaAndAyurvedaContent