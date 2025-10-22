import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'


const HolisticContent = () => {
    const bgLightBlue = {
        background: '#eaf2f5',
    }
    return (
        <Container className='p-md-0 p-2 py-4 '>

            <Col className='text-center pb-5 px-lg-5'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 text-center'>RELAXING SPA TREATMENTS AND THERAPIES</h6>
            </Col>

            <Row className='d-flex flex-md-row flex-column text-center pt-3 gap-md-0 gap-1'>
                <Col className='p-3 text-center square-box' md={3}>
                    <h6 className='text-custom-megenta'>
                        AROMATHERAPY
                    </h6>
                    <p>
                        Duration: 60 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            4289 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        Aromatherapy is the ancient science of healing, relaxing and energizing through Nervous System by the use of plants and their parts. The massage is with a blend of essential oils and carrier oil which penetrate the bloodstream and soothe the central nervous system. The massage activates the body’s nerve endings and stimulates its blood flow.
                    </p>
                </Col>

                <Col className='p-3 square-box' style={bgLightBlue} md={3}>
                    <h6 className='text-custom-megenta'>
                        SWEDISH MASSAGE
                    </h6>
                    <p>
                        Duration: 60 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            4289 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        Traditional Classical European massage with medium pressure which relieves the muscular tension to stimulate soft tissues resulting in improving the lymphatic flow, relieves stress.
                    </p>
                </Col>

                <Col className='p-3 square-box' md={3}>
                    <h6 className='text-custom-megenta'>
                        BALINESE MASSAGE
                    </h6>
                    <p>
                        Duration: 60 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            4730 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        A deep tissue massage using a combination of gentle stretches, acupressure to stimulate the flow of blood, oxygen and chi’ (energy) around your body and bring relaxation and wellness.
                    </p>

                </Col>

                <Col className='p-3 square-box' style={bgLightBlue} md={3}>
                    <h6 className='text-custom-megenta'>
                        ANTICELLULITE MASSAGE
                    </h6>
                    <p>
                        Duration: 60 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            5000 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        A deep tissue pressure massage done with specific anticellulite oils which help to loosen and break the cellulite along with relaxation and improving the blood circulation.
                    </p>
                </Col>

                <Col className='p-3 square-box' style={bgLightBlue} md={3}>
                    <h6 className='text-custom-megenta'>
                        SANDALWOOD/ALOEVERA BODY CREAM MASSAGE
                    </h6>
                    <p>
                        Duration: 60 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            4289 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        This is the medium pressure massage in which the cream is used instead of oils.It helps to exfoliate the skin,helps in lymph drainage and makes the skin supple and beautiful.
                    </p>
                </Col>

                <Col className='p-3 square-box' md={3}>
                    <h6 className='text-custom-megenta'>
                        ZURI HEALING TOUCH
                    </h6>
                    <p>
                        Duration: 30 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            2500 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        A relaxing back, neck and shoulder massage with medicated oils to release the knots and stress in the muscles.
                    </p>
                </Col>

                <Col className='p-3 square-box' style={bgLightBlue} md={3}>
                    <h6 className='text-custom-megenta'>
                        REFLEXOLOGY
                    </h6>
                    <p>
                        Duration: 30 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            2500 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        A massage on the reflex areas of the foot which helps to flash out toxins and inflammations through lymph drainage and give the whole body a total relaxing state.
                    </p>
                </Col>
            </Row>

        </Container>
    )
}

export default HolisticContent