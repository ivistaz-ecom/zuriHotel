'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useRouter } from 'next/navigation';

import '../../../app/globals.css'

const MobileHeader = () => {

    const [isFormShow, setIsFormShow] = useState(false);
    const router = useRouter();


    const [isShow, setIsShow] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleOnClickShow = () => {
        setIsShow(!isShow);
        setIsFormShow(false); // Ensure isFormShow is hidden when isShow is clicked
        setActiveSubMenu(null);
    };

    const handleMakeReservation = () => {
        setIsFormShow(!isFormShow);
        setIsShow(false); // Ensure isShow is hidden when isFormShow is clicked
        setActiveSubMenu(null); // Close any active sub-menu
    }

    const handleSubMenuClick = (submenu) => {
        if (activeSubMenu === submenu) {
            // If the same sub-menu is clicked again, close it
            setActiveSubMenu(null);
        } else {
            setActiveSubMenu(submenu);
        }
    };

    const hotels = [
        { id: 1, name: 'The Zuri Kumarakom, Kerala Resort & Spa', value: '64786' },
        { id: 2, name: 'The Zuri White Sands, Goa Resort & Casino', value: '64787' },
        { id: 3, name: 'The Zuri Whitefield, Bengaluru', value: '27305' },
    ];

    const HotelReservationForm = () => {
        // const defaultSelectedHotel = '64786'; // Set the default selected hotel value
        const [selectedHotel, setSelectedHotel] = useState('');
        const [selectedCheckInDate, setSelectedCheckInDate] = useState(getTodayDateString());
        const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(getTodayDateString());
        const [selectedRooms, setSelectedRooms] = useState(1);
        const [selectedAdults, setSelectedAdults] = useState(1);
        const [selectedChildren, setSelectedChildren] = useState(0);
        const [selectedChain, setSelectedChain] = useState('');

        useEffect(() => {
            // Reset the form when the pathname changes
            setSelectedHotel('');
            setSelectedCheckInDate(getTodayDateString());
            setSelectedCheckOutDate(getTodayDateString());
            setSelectedRooms(1);
            setSelectedAdults(1);
            setSelectedChildren(0);
            setSelectedChain('');
            setHotelValidationError(false);
        }, [router.pathname]);

        const [hotelValidationError, setHotelValidationError] = useState(false); // Track validation error

        const handleFormSubmit = (e) => {
            e.preventDefault();

            if (!selectedHotel) {
                setHotelValidationError(true);
                return;
            }
            if (selectedHotel === '64786') {
                setSelectedChain('17869')
            }
            if (selectedHotel === '64787') {
                setSelectedChain('17869')
            }
            if (selectedHotel === '27305') {
                setSelectedChain('10237')
            }

            // Construct the URL based on form data
            const reservationURL = `https://be.synxis.com/?adult=${selectedAdults}&arrive=${selectedCheckInDate}&chain=${selectedChain}&child=${selectedChildren}&currency=INR&depart=${selectedCheckOutDate}&hotel=${selectedHotel}&level=hotel&locale=en-US&rooms=${selectedRooms}`;
            // console.log(reservationURL)
            // Navigate to the reservation URL
            router.push(reservationURL);
            setHotelValidationError(false);

            // Reset form data
            setSelectedHotel('');
            setSelectedCheckInDate(getTodayDateString());
            setSelectedCheckOutDate(getTodayDateString());
            setSelectedRooms(1);
            setSelectedAdults(1);
            setSelectedChildren(0);
            setSelectedChain('');
            setHotelValidationError(false);
        };

        function getTodayDateString() {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }

        return (
            <>
                <Container fluid className='d-flex d-md-none position-sticky sticky-top flex-column bg-white z-3 shadow-sm p-0'>
                    <Container fluid className='w-100 z-3 p-2 d-flex flex-column justify-content-center align-items-center bg-purple'
                    // style={{
                    //     backgroundImage: 'url(/christmas-banner.png)',
                    //     backgroundSize: 'cover',
                    //     backgroundPosition: 'top center' // Centering the background image
                    // }}
                    >
                        <p className='mb-0 text-white'>
                            Make your Christmas and New Year's unforgettable. <br /> <Link href='/christmas-new-year-offers' className='text-white'>Click here to know more</Link>.
                        </p>
                    </Container>
                    <Row className='d-flex flex-row flex-wrap justify-content-center align-items-center m-0'>
                        <Col xs={1}>
                            <i
                                className="bi bi-list"
                                style={{ fontSize: '30px' }}
                                onClick={handleOnClickShow}
                            >
                            </i>
                        </Col>

                        <Col xs={4}>
                            <Link
                                href="/"
                                className='text-decoration-none'>
                                <Image src='/zuri_logo.png' alt='' fluid />
                            </Link>
                        </Col>

                        <Col className='d-flex flex-column justify-content-end align-items-end' xs={6}>
                            <Col className='d-inline-block'>
                                <p className='font11px mb-2'>
                                    <Image src='/header/phone_final.svg' alt='' />
                                    +91 806 665 7272
                                </p>
                            </Col>
                            <Col
                                className='cusrom-make-reservation-btn'
                            >
                                <Col
                                    className='dimond-shap-purple'
                                >
                                </Col>
                                <h6
                                    className='mb-0 font11px text-center'
                                    onClick={handleMakeReservation}
                                >
                                    MAKE A RESERVATION
                                </h6>
                            </Col>
                        </Col>
                    </Row>

                    {isShow && (
                        <Col className='d-flex flex-column justify-content-center align-items-center p-1'>
                            <Col className='text-center p-0 w-100 mt-3'>
                                <p
                                    className='font11px text-black'
                                    onClick={() => handleSubMenuClick('hotel')}
                                >
                                    Hotel
                                </p>
                                <hr />

                                {activeSubMenu === 'hotel' && (
                                    <Col className='d-flex gap-3 flex-column'>
                                        <Link
                                            href="/lake-resorts-in-kumarakom/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6
                                                className='font11px'
                                            >
                                                The Zuri Kumarakom, Kerala Resort & Spa
                                            </h6>
                                        </Link>

                                        <Link
                                            href="/beach-resorts-in-goa/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>The Zuri White Sands, Goa Resort & Casino</h6>
                                        </Link>

                                        <Link
                                            href="/hotels-in-bengaluru/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>The Zuri Whitefield, Bengaluru</h6>
                                        </Link>
                                    </Col>
                                )}
                            </Col>

                            <Col className='text-center p-0 w-100 mt-3'>
                                <p
                                    className='font11px text-black'
                                    onClick={() => handleSubMenuClick('events')}
                                >
                                    Events
                                </p>

                                <hr />

                                {activeSubMenu === 'events' && (
                                    <Col className='d-flex gap-3 flex-column'>
                                        <Link
                                            href="/lake-resorts-in-kumarakom/events/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>The Zuri Kumarakom, Kerala Resort & Spa</h6>
                                        </Link>

                                        <Link
                                            href="/beach-resorts-in-goa/events/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>The Zuri White Sands, Goa Resort & Casino</h6>
                                        </Link>

                                        <Link
                                            href="/hotels-in-bengaluru/events/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>The Zuri Whitefield, Bengaluru</h6>
                                        </Link>
                                    </Col>
                                )}
                            </Col>


                            <Col className='text-center p-0 w-100 mt-3'>
                                <p
                                    className='font11px text-black'
                                    onClick={() => handleSubMenuClick('maya-spa')}
                                >
                                    Maya Spa
                                </p>

                                <hr />
                                {activeSubMenu === 'maya-spa' && (
                                    <Col className='d-flex gap-3 flex-column'>
                                        <Link
                                            href="/lake-resorts-in-kumarakom/maya-spa/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>The Zuri Kumarakom, Kerala Resort & Spa</h6>
                                        </Link>

                                        <Link
                                            href="/beach-resorts-in-goa/maya-spa/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>The Zuri White Sands, Goa Resort & Casino</h6>
                                        </Link>

                                        <Link
                                            href="/hotels-in-bengaluru/maya-spa/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>The Zuri Whitefield, Bengaluru</h6>
                                        </Link>
                                    </Col>
                                )}
                            </Col>
                            <Col className='text-center p-0 w-100 mt-3'>
                                <p
                                    className='font11px text-black'
                                    onClick={() => handleSubMenuClick('offers')}
                                >
                                    Offers
                                </p>

                                <hr />
                                {activeSubMenu === 'offers' && (
                                    <Col className='d-flex gap-3 flex-column'>
                                        <Link
                                            href="/offers/stay-offers"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>Stay Offers</h6>
                                        </Link>

                                        <Link
                                            href="/offers/dining-offers"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>Dining Offers</h6>
                                        </Link>

                                        <Link
                                            href="/offers/ayurveda-package"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>Ayurveda Packages</h6>
                                        </Link>

                                        <Link
                                            href="/offers/membership"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>Membership</h6>
                                        </Link>
                                    </Col>
                                )}
                            </Col>

                            <Col className='text-center p-0 w-100 mt-3'>
                                <Link
                                    href="/contact-us"
                                    className='text-decoration-none text-black'
                                >
                                    <h6 className='mb-0 font11px'>
                                        Contact Us
                                    </h6>
                                </Link>
                                <hr />
                            </Col>

                            <Col className='text-center p-0 w-100 mt-3'>
                                <Link
                                    href="/blog"
                                    target='_blank'
                                    className='text-decoration-none text-black'
                                >
                                    <h6 className='mb-0 font11px'>
                                        Blog
                                    </h6>
                                </Link>
                            </Col>
                        </Col>
                    )}

                    {/* Booking Form */}
                    {isFormShow && (
                        <Container className='d-flex flex-column d-md-none bg-white shadow-sm mt-3 z-3'>
                            <form onSubmit={handleFormSubmit}>
                                <div className='d-flex flex-column gap-4'>
                                    <div className='d-flex flex-column gap-2'>
                                        <div>
                                            <label
                                                htmlFor="hotel"
                                                className='text-black-50'
                                            >
                                                Hotels, City:
                                            </label>
                                        </div>
                                        <div>
                                            <select
                                                id="hotel"
                                                className='bg-white'
                                                value={selectedHotel}
                                                onChange={(e) => setSelectedHotel(e.target.value)}
                                                required
                                                style={{ borderColor: hotelValidationError ? 'red' : '' }}

                                            >
                                                <option value="">Select a hotel</option>
                                                {hotels.map((hotel) => (
                                                    <option key={hotel.id} value={hotel.value}>
                                                        <div className='bg-white'>
                                                            <p className='p-4'>
                                                                {hotel.name}
                                                            </p>
                                                        </div>
                                                    </option>
                                                ))}
                                            </select>
                                            {!selectedHotel && hotelValidationError && (
                                                <p style={{ color: 'red', fontSize: '12px' }}>Please select a hotel</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className='d-flex flex-column gap-2'>
                                        <div>
                                            <label
                                                htmlFor="checkIn"
                                                className='text-black-50'
                                            >
                                                Check-In:
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                id="checkIn"
                                                type="date"
                                                value={selectedCheckInDate}
                                                onChange={(e) => setSelectedCheckInDate(e.target.value)}
                                                min={getTodayDateString()}
                                            />
                                        </div>
                                    </div>

                                    <div className='d-flex flex-column gap-2'>
                                        <div>
                                            <label
                                                htmlFor="checkOut"
                                                className='text-black-50'
                                            >
                                                Check-Out:
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                id="checkOut"
                                                type="date"
                                                value={selectedCheckOutDate}
                                                onChange={(e) => setSelectedCheckOutDate(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className='d-flex flex-row gap-4'>
                                        <div className='d-flex flex-column gap-2'>
                                            <div>
                                                <label
                                                    htmlFor="rooms"
                                                    className='text-black-50'
                                                >
                                                    Rooms:
                                                </label>
                                            </div>
                                            <div>
                                                <select
                                                    id="rooms"
                                                    value={selectedRooms}
                                                    onChange={(e) => setSelectedRooms(parseInt(e.target.value, 10))}
                                                >
                                                    {[1, 2, 3].map((count) => (
                                                        <option key={count} value={count}>
                                                            {count}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className='d-flex flex-column gap-2'>
                                            <div>
                                                <label
                                                    htmlFor="adults"
                                                    className='text-black-50'
                                                >
                                                    Adults:
                                                </label>
                                            </div>
                                            <div>
                                                <select
                                                    id="adults"
                                                    value={selectedAdults}
                                                    onChange={(e) => setSelectedAdults(parseInt(e.target.value, 10))}
                                                >
                                                    {[1, 2, 3, 4].map((count) => (
                                                        <option key={count} value={count}>
                                                            {count}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className='d-flex flex-column gap-2'>
                                            <div>
                                                <label
                                                    htmlFor="children"
                                                    className='text-black-50'
                                                >
                                                    Children:
                                                </label>
                                            </div>
                                            <div>
                                                <select
                                                    id="children"
                                                    value={selectedChildren}
                                                    onChange={(e) => setSelectedChildren(parseInt(e.target.value, 10))}
                                                >
                                                    {[0, 1, 2, 3].map((count) => (
                                                        <option key={count} value={count}>
                                                            {count}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='d-flex flex-column gap-4'>
                                        <div className='text-center d-flex flex-column gap-2'>
                                            <Button onClick={handleFormSubmit}
                                                className='text-decoration-none text-white px-2 py-2 d-inline-block'
                                                style={{ background: 'purple' }}
                                            >
                                                BOOK NOW
                                            </Button>

                                            <Link
                                                href="https://be.synxis.com/?_ga=2.164956023.936920120.1702967799-2038087003.1664255723&adult=1&arrive=2023-12-20&chain=17869&child=0&currency=INR&depart=2023-12-21&hotel=64786&level=hotel&locale=en-US&rooms=1&shell=GCF&start=searchres&template=GCF"
                                                className="text-deocoration-black"
                                                target='_blank'
                                            >
                                                <p
                                                    className='text-black font12px'
                                                >
                                                    Modify / Cancel Reservation
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <Col
                                className='text-center d-flex flex-column justify-content-center align-items-center'
                                onClick={handleMakeReservation}
                            >
                                <p className='mb-0'>
                                    close
                                </p>
                                <Col className='text-center'>
                                    <Col
                                        className='dimond-shap-close'
                                    >
                                    </Col>
                                </Col>
                            </Col>
                        </Container>
                    )}
                </Container>
            </>
        )
    }
    return <HotelReservationForm />;
};

export default MobileHeader