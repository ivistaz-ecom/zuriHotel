'use client'
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Modal, Row } from 'react-bootstrap';
import DomainUrl from '../../config';

const GalleryFooter = () => {
    const [mediaData, setMediaData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const siteUrl = DomainUrl.wpApiUrl;

    const AllImages = [1682, 1673, 1678, 1676, 1681, 1680, 1684, 1683, 1677, 1674, 1702, 1704, 1699, 1700, 1703, 1706, 1683, 1705, 1707, 1701, 1747, 1744, 1751, 1750, 1749, 1748, 1746, 1745, 1752, 1743, 1733, 1730, 1732, 1731, 1728, 1727, 1726, 1725, 1724, 1729, 3582, 3581, 3578, 3580, 3577, 3579, 3576, 3583, 3575, 3588, 3589, 3599, 3598, 3591, 3592, 3593, 3597, 3596, 3594, 3595, 3600, 3601, 3602, 3603, 3604, 3608, 3609, 3610, 3611, 3612, 3613, 3614, 3615, 3616, 3617, 3618, 3619, 3620, 3621, 3622, 3624, 3625, 3626, 3627, 3634, 3635, 3637, 3639, 3640, 3648, 3641, 3647, 3642, 3646, 3643, 3645, 3644, 3671, 3716, 3741, 3746, 3751, 3764, 3730, 3734, 3735, 3736, 3737, 4185, 4186];

    const nextImage = () => {
        setCurrentIndex(prevIndex => (prevIndex === AllImages.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? AllImages.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const fetchMediaData = async () => {
            try {
                const mediaPromises = AllImages.map(async (id) => {
                    const response = await fetch(`${siteUrl}/media/${id}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch media with ID ${id}`);
                    }
                    return response.json();
                });
                const mediaDetails = await Promise.all(mediaPromises);
                setMediaData(mediaDetails);
                c
            } catch (error) {
                console.error('Error fetching media data:', error);
            }
        };
        fetchMediaData();
    }, [siteUrl, AllImages]);


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
    }, [showModal]);


    return (
        <>
            <Container className='custom-kumarkom-menu-container'>
                <h3 className='text-center py-md-4 text-custom-grey'>GALLERY</h3>
            </Container>
            <Container>
                <Row className='d-flex flex-lg-row flex-column align-items-stretch'>
                    {mediaData.map((media, index) => (
                        <div key={media.id} className='p-1 col-lg-3'>
                            <div className='card p-0' style={{ width: '100%', height: '200px' }}>
                                <Image
                                    src={media.source_url}
                                    alt={`Image ${media.id}`}
                                    className='img-fluid cursor-pointer'
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        setShowModal(true);
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </Row>
            </Container>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered className='bg-black bg-opacity-75'>
                <Modal.Body className='bg-black border-0 p-0'>
                    <Image
                        src={mediaData[currentIndex]?.source_url}
                        alt={`Image ${mediaData[currentIndex]?.id}`}
                        className='img-fluid'
                    />
                </Modal.Body>
                <Modal.Footer className='border-0 position-absolute w-100 top-50 p-0'>
                    <Col className='d-flex justify-content-between'>
                        <Button className='bg-black border-0' onClick={prevImage}><i className="bi bi-arrow-left-square"></i></Button>
                        <Button className='bg-black border-0' onClick={nextImage}><i className="bi bi-arrow-right-square"></i></Button>
                    </Col>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default GalleryFooter;
