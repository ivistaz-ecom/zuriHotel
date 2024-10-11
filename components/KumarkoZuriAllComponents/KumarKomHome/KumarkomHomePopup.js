'use client'
import React, { useEffect, useState } from 'react'
import { Col, Image, Modal } from 'react-bootstrap';

const KumarkomHomePopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    // Close the component on page load
    React.useEffect(() => {
        setIsOpen(true);
    }, []);

    return (
        <>

            {isOpen && (
                <Col
                    className='position-fixed start-0 top-0 end-0 bottom-0 d-flex flex-column z-3'
                >
                    <Col
                        className='position-relative'
                    >
                        <span
                            className='position-absolute top-0 bottom-0 start-0 end-0 bg-black bg-opacity-50'
                            onClick={handleClick}
                        >
                        </span>
                        <Col
                            className='position-absolute translate-middle start-50 top-50 d-lg-block d-none'
                        >
                            <Image
                                src="/popup/kumarkom-popup/zuri_kumarkom_appreciation_letter.jpeg"
                                style={{ width: '100%', height: "90vh" }}
                                alt=""
                            />
                            <span className='position-absolute end-0 top-0'>
                                <i className="bi bi-x fs-4 cursor-pointer" onClick={handleClick}></i>
                            </span>
                        </Col>
                        <Col
                            className='d-lg-none d-block position-absolute top-50 start-50 w-100 p-4 translate-middle'
                        >
                            <Col className='position-relative'>
                                <span className='position-absolute end-0 top-0 z-3 bg-purple'>
                                    <i className="bi bi-x fs-4 cursor-pointer text-white" onClick={handleClick}></i>
                                </span>
                                <Image
                                    src="/popup/kumarkom-popup/zuri_kumarkom_appreciation_letter.jpeg"
                                    style={{ width: '100%', height: "auto" }}
                                    alt=""
                                />
                            </Col>
                        </Col>


                    </Col>
                </Col>
            )}


            {/* <Modal
                show={showPopup}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <Image src="/popup/kumarkom-popup/zuri_kumarkom_appreciation_letter.jpeg" alt="Popup Image" style={{ width: '100%' }} />

                    <p>
                        Our Banquet hall & Kick-start Gym will be closed for maintenance from 10th January to 20th January 2024. Thank you for your understanding.
                    </p>
                </Modal.Body>
                <Col className='position-absolute end-0'>
                    <button
                        onClick={handleClose}
                        className='bg-transparent border-0'
                    >
                        <i
                            className="bi bi-x-square rounded-circle text-purple"
                        >
                        </i>
                    </button>
                </Col>
            </Modal> */}
        </>
    )
}

export default KumarkomHomePopup