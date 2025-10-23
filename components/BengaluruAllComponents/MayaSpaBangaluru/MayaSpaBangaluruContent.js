'use client'
import React from 'react'

import { Col, Container, Image, Row } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const MayaSpaBangaluruContent = () => {

    const bgLightBlue = {
        background: '#eaf2f5',
    }

    return (
        <>
            <Container className='p-md-0 p-2 px-lg-5 mt-5'>
                <Col className='d-flex flex-column align-items-center '>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-4 text-center'>RESTAURANTS AT THE ZURI WHITEFIELD</h6>
                    <p>
                        In need of some pampering for complete refreshment of mind, body and soul? Head to Maya, Zuri’s very own line of luxury spas. Discover an entire range of treatments, from massages, wraps and an assortment of other therapies for the body, to scrubs and facials for the skin, and rejuvenating treatments for the hair. The Zuri Whitefield is one of the few luxury spa hotels in Bengaluru that helps you de-stress.
                    </p>

                    <p>
                        The icing on the cake? Personalise your therapies, and even get treatment of your choice done in the comfort of your room.
                    </p>
                </Col>

                <Col className='text-center pt-5'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-4 text-center'>SPA TREATMENT</h6>
                </Col>

                <Row className='d-flex flex-md-row flex-column align-items-center justify-content-center'>
                    <Col md={6}>
                        <ul>
                            <li>Full body rejuvenation massage</li>
                            <li>Full body pack</li>
                            <li>Swedish massage</li>
                            <li>Full body aromatherapy massage</li>
                            <li>Head, neck and shoulder massage</li>
                            <li>Scalp, face and leg massage</li>
                            <li>Back massage</li>
                        </ul>
                    </Col>

                    <Col md={4}>
                        <ul>
                            <li>Foot massage</li>
                            <li>Reflexology</li>
                            <li>Body scrubs</li>
                            <li>Body wraps</li>
                            <li>Facial clubbed with a massage</li>
                            <li>Honey and cucumber facial</li>
                        </ul>
                    </Col>
                </Row>
            </Container>


            <Container className='p-md-0 py-4 p-2'>
                <Tabs>
                    <TabList>
                        <Tab>Express Treatments</Tab>
                        <Tab>Body Massages</Tab>
                    </TabList>

                    <TabPanel>
                        <Row className='d-flex flex-md-row flex-column text-center pt-3'>
                            <Col className='p-3 text-center square-box' >
                                <h6 className='text-custom-megenta'>ENERGY BOOST FOR BACK</h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                {/* <p className='text-black'>
                                    <b>1800 INR</b>
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Feel refreshingly renewed with a neck & back massage.
                                </p>
                            </Col>

                            <Col className='p-3' style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>RELAXING SCALP TREATMENT</h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                {/* <p className='text-black'>
                                    <b>1320 INR</b>
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Discover a deeper sense of clarity when you take a moment to simply let go.
                                </p>
                            </Col>

                            <Col className='p-3'>
                                <h6 className='text-custom-megenta'>ACHING FEET</h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                {/* <p className='text-black'>
                                    <b>1200 INR</b>
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Respect these hard-working extremities with a refreshing & restorative massage that revives tired feet.
                                </p>

                            </Col>

                            <Col className='p-3' style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>EXPRESS FACIAL</h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                {/* <p className='text-black'>
                                    <b>1500 INR</b>
                                </p> */}
                                <p className='d-none d-md-block'>
                                    A deep exfoliating & cleansing facial to refine skin, unclog pores & brighten complexion.
                                    <br />
                                    Express facial will leave your skin looking Clean, Clear & Fresh – Ideal for any occasion where your Skin needs an instant boost.
                                </p>
                            </Col>
                        </Row>
                    </TabPanel>


                    <TabPanel>
                        <Row className='d-flex flex-md-row flex-column text-center pt-3'>
                            <Col className='p-3 text-center square-box' >
                                <h6 className='text-custom-megenta'>RELAXING AROMATHERAPY</h6>
                                <p>
                                    Duration: 60 minutes
                                </p>
                                {/* <p className='text-black'>
                                    <b>3200 INR</b>
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Achieve an elevated sense of balance with this curative aromatherapy massage that restores the body for a deeper feeling of relaxation & enhanced Sleep.
                                </p>
                            </Col>

                            <Col className='p-3' style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>DEEP TISSUE TREATMENT</h6>
                                <p>
                                    Duration: 60 minutes
                                </p>
                                {/* <p className='text-black'>
                                    <b>3500 INR</b>
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Enjoy a welcome sense of sense of renewal for sore muscles from this intensely satisfying, powerful massage that reaches the deeper structures of the body.
                                </p>
                            </Col>

                            <Col className='p-3'>
                                <h6 className='text-custom-megenta'>STRESS RELEASE TREATMENT</h6>
                                <p>
                                    Duration: 60 minutes
                                </p>
                                {/* <p className='text-black'>
                                    <b>3200 INR</b>
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Experience the subtle difference between being relaxed & being restored with this profoundly heating massage designed to dissolve stress & tension.
                                </p>
                            </Col>
                        </Row>
                    </TabPanel>
                </Tabs>
            </Container>



            <Container className='p-md-0 px-md-5 p-2 mt-5'>
                <Col className='d-flex flex-column align-items-center text-center py-5'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-4 text-center'>KICK-START</h6>
                    <p>
                        Take your game to the next level, and push your limits to discover another side of yourself. Kick-Start your day, literally, and be fit during your business trip or vacation. Our hotel is one of the few 5-star hotels in Whitefield with a qualified professional Gym Instructor, who will be there between 6 am to 10 pm in order to put you through the paces. If missing a workout is out of the question, drop by our gym.
                    </p>
                </Col>
            </Container>

        </>
    )
}

export default MayaSpaBangaluruContent