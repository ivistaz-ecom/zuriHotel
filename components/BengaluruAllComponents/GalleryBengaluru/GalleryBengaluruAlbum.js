'use client'
import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Button, Modal } from 'react-bootstrap';

import DomainUrl from '../../../config'

const GalleryBengaluruAlbum = () => {
    const [mediaData, setMediaData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const siteUrl = DomainUrl.wpApiUrl;

    useEffect(() => {
        const fetchMediaData = async () => {
            try {
                const categoryMediaIds = getCategoryMediaIds(selectedCategory);
                const mediaPromises = categoryMediaIds.map(async (id) => {
                    const response = await fetch(`${siteUrl}/media/${id}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch media with ID ${id}`);
                    }
                    return response.json();
                });
                const categoryMediaDetails = await Promise.all(mediaPromises);
                const flattenedMediaDetails = categoryMediaDetails.flat();
                setMediaData(flattenedMediaDetails);
            } catch (error) {
                console.error('Error fetching media data:', error);
            }
        };
        fetchMediaData();
    }, [siteUrl, selectedCategory]);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (showModal) {
                if (event.key === 'ArrowRight') {
                    nextImage();
                } else if (event.key === 'ArrowLeft') {
                    prevImage();
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [currentIndex, showModal]);


    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setShowModal(true);
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === mediaData.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? mediaData.length - 1 : prevIndex - 1));
    };

    const getCategoryMediaIds = (category) => {
        switch (category) {
            case 'All':
                return [7436, 5155, 5154, 5153, 5152, 5151, 5150, 5149, 5148, 5147, 5146, 5145, 5144, 5143, 5142, 5141, 5140, 5139, 5138, 5137, 5136, 5135, 5134, 5133, 5132, 5131, 5130, 5129, 5128, 5127];
            case 'Room & Suites':
                return [5152, 5151, 5150, 5149, 5148, 5147, 5146, 5145];
            case 'Dining':
                return [5144, 5143, 5142, 5141, 5140, 5139, 5138, 5137, 5136, 5135];
            case 'Maya spa':
                return [5134, 5133, 5130];
            case 'Lifestyle':
                return [5131, 5130, 5129, 5128, 5127];
            // Add more cases for additional categories
            default:
                return [];
        }
    };

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col lg={2}>
                        <Row className='d-flex flex-column gap-2'>
                            {['All', 'Room & Suites', 'Dining', 'Maya spa', 'Lifestyle'].map((category) => (
                                <Button
                                    key={category}
                                    onClick={() => handleCategoryClick(category)}
                                    variant=""
                                    className='text-start'
                                    style={{
                                        color: selectedCategory === category ? '#80027f' : '#6c6e71'
                                    }}
                                >
                                    <h6>
                                        {category}
                                    </h6>
                                </Button>
                            ))}
                        </Row>
                    </Col>
                    <Col>
                        <Row className='d-flex flex-lg-row flex-column align-items-stretch'>
                            {/* Display fetched media data */}
                            {mediaData.map((media, index) => (
                                <div key={media.id} className='p-1 col-lg-4'>
                                    <div className='card p-0 overflow-hidden' style={{ width: '100%', height: '200px' }}>
                                        <Image
                                            src={media.source_url}
                                            alt={`Image ${media.id}`}
                                            className='img-fluid'
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => handleImageClick(index)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </Row>
                    </Col>
                </Row>

                {/* Modal for displaying full-size image */}
                <Modal show={showModal} onHide={() => setShowModal(false)} centered className='bg-black bg-opacity-75'>
                    <Modal.Body className='bg-black border-0 p-0'>
                        <Image
                            src={mediaData[currentIndex]?.source_url}
                            alt={`Image ${mediaData[currentIndex]?.id}`}
                            className='img-fluid img-container'
                        />
                    </Modal.Body>
                    <Modal.Footer className='border-0 position-absolute w-100 top-50 p-0'>
                        <Col className='d-flex justify-content-between'>
                            <Button className='bg-black border-0' onClick={prevImage}><i className="bi bi-arrow-left-square"></i></Button>
                            <Button className='bg-black border-0' onClick={nextImage}><i className="bi bi-arrow-right-square"></i></Button>
                        </Col>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    )
}

export default GalleryBengaluruAlbum