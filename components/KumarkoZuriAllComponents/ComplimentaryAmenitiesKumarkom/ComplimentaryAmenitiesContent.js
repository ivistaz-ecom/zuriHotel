'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import '../../../app/globals.css'

const ComplimentaryAmenitiesContent = () => {

    const [isHover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    }

    const handleMouseLeave = () => {
        setHover(false);
    }

    const pdfLinkHoveer = {
        color: isHover ? 'purple' : 'black'
    }

    return (
        <>
            <Container className='p-0'>
                <ul className=''>
                    <li>Traditional non-alcoholic welcome drink on arrival</li>
                    <li>International Buffet – breakfast at our all day dining restaurant “Lime Tree”</li>
                    <li>Fruit basket in room once during the stay</li>
                    <li>Hi-tea at Lime Tree in the evening</li>
                    <li>Evening local Kerala cultural program including live musical entertainment at Natya – our exclusive amphitheater by the Lime Tree Restaurant Deck</li>
                    <li>Cycling in the resort between 09:00 am – 06:00pm</li>
                    <li>Fishing in the lagoon between 09:00 am – 06:00pm</li>
                    <li>Wireless internet access to one device/Laptop across the resort and in your guest room as well</li>
                    <li>Gym (07:00 am – 08:00 pm)</li>
                    <li>Iron board and iron box (On request)</li>
                    <li>Bath Amenities such as soaps, shampoo, conditioner, moisturizer along with a dental and shaving kit</li>
                    <li>Bath, Hand and Face Towels. Pool Towels for use at the pool</li>
                    <li>Electronic safe</li>
                    <li>Left luggage room facility</li>
                    <li>Complimentary tea/coffee makers. Tea bags, coffee and sugar sachets are replenished once a day</li>
                    <li>Two bottles packaged drinking water</li>
                    <li>Assorted Indian Newspapers</li>
                    <li>Shoe shine kit & room slippers</li>
                    <li>Housekeeping service twice daily – morning cleaning and evening turn down service</li>
                </ul>

                <Link
                    href="/kumarkom/pdf/HRACC_Guidelines_for_Hotels.pdf"
                    target='_blank'
                    className='text-decoration-none pt-4'
                >
                    <p
                        style={pdfLinkHoveer}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className='d-inline'
                    >
                        HRACC Guidelines for Hotels
                    </p>
                </Link>

                <p className='text-center py-4'>
                    For further requirements and queries, please do not hesitate to contact us.
                </p>
            </Container>
        </>
    )
}

export default ComplimentaryAmenitiesContent