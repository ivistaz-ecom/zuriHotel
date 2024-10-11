'use client'
import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Image, Modal, Row } from 'react-bootstrap';

const BengaluruGallery = () => {
    const galleryItems = [
        {
            src: '/bengaluru/bengaluru_gallery/img_1.jpg',
        },
        {
            src: '/bengaluru/bengaluru_gallery/img_2.jpg',
        },
        {
            src: '/bengaluru/bengaluru_gallery/img_3.jpg',
        },
        {
            src: '/bengaluru/bengaluru_gallery/img_4.jpg',
        },
        {
            src: '/bengaluru/bengaluru_gallery/img_5.jpg',
        },
        {
            src: '/bengaluru/bengaluru_gallery/img_6.jpg',
        },
        {
            src: '/bengaluru/bengaluru_gallery/img_7.jpg',
        },
        {
            src: '/bengaluru/bengaluru_gallery/img_8.jpg',
        },
        {
            src: '/bengaluru/bengaluru_gallery/img_9.jpg',
        },
        {
            src: '/bengaluru/bengaluru_gallery/img_10.jpg',
        },
        {
            src: '/bengaluru/bengaluru_gallery/img_11.jpg',
        },
    ]

    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [isMobile, setIsMobile] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
            setIsMobile(window.innerWidth <= 768);
        };

        // Check if window is available before adding event listener
        if (typeof window !== 'undefined') {
            handleResize(); // Call it initially to set the initial state
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const openModal = (index) => {
        setCurrentIndex(index);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (showModal) {
                if (event.key === 'ArrowLeft') {
                    goToPrevious();
                } else if (event.key === 'ArrowRight') {
                    goToNext();
                }
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [showModal]);

    return (
        <>
            <Container className='p-0 pt-5'>
                <Col className='d-flex flex-column align-items-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-4'>GALLERY</h6>
                </Col>

                <Row className='d-flex flex-lg-row flex-column align-items-stretch px-lg-0 px-4'>
                    {galleryItems.map((item, index) => (
                        <div key={index} onClick={() => openModal(index)} className='p-1 col-lg-3'>
                            <div className='card p-0 overflow-hidden' style={{ width: '100%', height: isMobile ? 'auto' : '200px' }}>
                                <Image src={item.src} alt='' className='cursor-pointer ' />
                            </div>
                        </div>
                    ))}
                </Row>

                <Modal show={showModal} onHide={closeModal} centered className='bg-transparent border-0'>
                    <Modal.Header closeButton className='position-absolute z-3 text-white bg-white border-0 end-0 bg-transparent'>
                        {/* <Button variant="secondary" onClick={closeModal}>Close</Button> */}
                    </Modal.Header>
                    <Modal.Body className='text-center bg-black border-0 p-0'>
                        <Image src={galleryItems[currentIndex].src} alt='' fluid />
                    </Modal.Body>
                    <Modal.Footer className='border-0 position-absolute w-100 top-50 p-0'>
                        <Col className='d-flex justify-content-between'>
                            <Button className="bg-black border-0" onClick={goToPrevious}><i className="bi bi-arrow-left-square"></i></Button>
                            <Button className="bg-black border-0" onClick={goToNext}><i className="bi bi-a
                            rrow-right-square"></i></Button>
                        </Col>
                    </Modal.Footer>
                </Modal>
            </Container>

            <Container className='pt-5 text-center'>
                <Image src='/bengaluru/bangaluru-home/traveller_choice_img.jpg' alt='' />
            </Container>
        </>
    )
}

export default BengaluruGallery