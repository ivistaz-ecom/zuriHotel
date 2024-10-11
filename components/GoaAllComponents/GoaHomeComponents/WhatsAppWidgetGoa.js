'use client'
import React, { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import Link from 'next/link'

import { Col } from 'react-bootstrap'

const ChatWidget = () => {


    const phone = '+919158998417'
    const text = 'Hello%20I%20have%20an%20enquiry.'

    const [isShow, setIsShow] = useState(true)

    const handleOnclick = () => {
        setIsShow(!isShow);
    }

    return (
        <>

            <Col className='position-fixed end-0 bottom-0 p-lg-5 p-3 z-3'>

                <button type="button" className="btn btn-success d-flex flex-row  justify-content-center align-items-center rounded-4" >
                    {/* <div className='whatsapp-hover-show'>
                        Chat with us
                    </div> */}
                    <div>
                        <FaWhatsapp size="45" onClick={handleOnclick} />
                    </div>
                </button>
            </Col>

            {isShow && (
                <Col className='position-fixed bottom-0 end-0 pb-5 p-3 custom-whatsapp-chat '>
                    <Col className=' text-white shadow-lg rounded-4 bg-white'>
                        <Col className='bg-purple p-2 px-4 d-flex flex-row rounded-top-4'>
                            <Col className='' sm={11}>
                                <p className='text-white mb-0'>
                                    The Zuri White Sands, Goa <br /> Mon - Sat (10am - 6pm)
                                </p>
                            </Col>
                            <Col className='d-flex flex-column align-items-end cursor-pointer' onClick={handleOnclick}>
                                X
                            </Col>
                        </Col>
                        <Col className=''>
                            <p className='p-4'>
                                Hi there! <br />
                                How can I help you?
                            </p>
                            <Link
                                href={`https://wa.me/${phone}?text=${text}`}
                                target='_blank'
                                className='text-decoration-none text-white cursor-pointer d-flex p-2 px-4 rounded-bottom-4 '
                                style={{ background: '#198754' }}>
                                <p className='w-100 text-white mb-0 fs-6'>
                                    Chat with us
                                </p>
                            </Link>
                        </Col>
                    </Col>
                </Col>
            )}
        </>
    )
};

export default ChatWidget;