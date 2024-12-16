import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap';

const BannerAllPage = ({ backgroundImageUrl }) => {

    const [isMobile, setIsMobile] = useState(false);

    const bannerStyle = {
        backgroundImage: `url('${backgroundImageUrl}')`,
        height: isMobile ? '75vh' : '466px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    };

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

    return (
        <>
            <Col style={bannerStyle} >
            </Col>
        </>
    )
}

export default BannerAllPage