import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const AyurvedaGoaContent = () => {
    const bgLightBlue = {
        background: '#eaf2f5',
    }

    return (
        <Container className='p-md-0 p-2 py-4 '>

            <Col className='text-center pb-5 px-lg-5'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 text-center'>AYURVEDA</h6>
            </Col>

            <Row className='d-flex flex-md-row flex-column text-center pt-3 gap-md-0 gap-1'>
                {/* Row 1 */}
                <Col className='p-3 text-center square-box' md={3}>
                    <h6 className='text-custom-megenta'>ABHYANGAM</h6>
                    <p>
                        Duration: 60 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            4289 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        Traditional whole body massage done with Ayurvedic medicinal oils .
                    </p>
                </Col>

                <Col className='p-3 square-box' style={bgLightBlue} md={3}>
                    <h6 className='text-custom-megenta'>
                        REJUVENATION MASSAGE
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
                        A full body nurturing massage which helps in the toning up of the muscles, removes the muscle stiffness and improves better blood circulation.
                    </p>
                </Col>

                <Col className='p-3 square-box' md={3}>
                    <h6 className='text-custom-megenta'>
                        MARMA MASSAGE
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
                        A full body deep tissue massage with medicated oil, concentrating more on the vital points of the body which helps to improve blood circulation and stimulate the nervous system.
                    </p>

                </Col>

                <Col className='p-3 square-box' style={bgLightBlue} md={3}>
                    <h6 className='text-custom-megenta'>
                        CHOORNASWEDAM
                    </h6>
                    <p>
                        Duration: 45 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            3500 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        A whole body treatment with a bundle of herbal powder which is dipped in warm medicated oil. Highly recommended for muscular pain, body aches, joint pains and especially in back ache.
                    </p>
                </Col>

                {/* Row 2 */}

                <Col className='p-3 square-box' style={bgLightBlue} md={3}>
                    <h6 className='text-custom-megenta'>
                        SHIRODHARA
                    </h6>
                    <p>
                        Duration: 30 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            4000 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        A stream of warm medicated oil poured over the forehead, which take you to a different level of mental peace. This treatment is recommended for sleeplessness, mental stress and for hair care
                    </p>
                </Col>

                <Col className='p-3 square-box' md={3}>
                    <h6 className='text-custom-megenta'>
                        PIZHICHIL
                    </h6>
                    <p>
                        Duration: 60 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            9000 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        A gentle flow of warm medicated oil all over the body with a gentle massage aimed to keep the body fit and healthy & prevent premature ageing, which provides a fresh surge of energy and leave your entire body relaxed and refreshed. Highly recommended in arthritic & neurological conditions.
                    </p>
                </Col>

                <Col className='p-3 square-box' style={bgLightBlue} md={3}>
                    <h6 className='text-custom-megenta'>
                        UDWARTHANAM
                    </h6>
                    <p>
                        Duration: 45 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            3500 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        A traditional dry massage using herbal powder, which helps to remove dead cells, deplete fat, strengthen the muscles.
                    </p>
                </Col>

                <Col className='p-3 square-box' >
                    <h6 className='text-custom-megenta'>
                        NASYAM
                    </h6>
                    <p>
                        Duration: 30 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            1800 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        A natural detoxification process of the head where nasal insufflations with herbal medicated oil dropped into the nose to expel all the toxins. This treatment is recommended in sinusitis, migraine, ear, nose and eye related problems.
                    </p>
                </Col>

                {/* Row 3 */}

                <Col className='p-3 text-center square-box' md={3}>
                    <h6 className='text-custom-megenta'>
                        TANLEPA (AYURVEDIC BODY PACK)
                    </h6>
                    <p>
                        Duration: 45 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            3000 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        A full body clay mask with spices & herbal powder which helps to remove dead skin & rejuvenate.
                    </p>
                </Col>

                <Col className='p-3 square-box' style={bgLightBlue} md={3}>
                    <h6 className='text-custom-megenta'>
                        MUKHALEPAM(AYURVEDIC FACIAL)
                    </h6>
                    <p>
                        Duration: 45 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            3000 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        A traditional Ayurvedic herbal facial that cleanse, hydrate, refreshes and relaxes you. It will nourish the skin to impart a radiant look.
                    </p>
                </Col>

                <Col className='p-3 square-box' md={3}>
                    <h6 className='text-custom-megenta'>
                        INDIAN HEAD MASSAGE
                    </h6>
                    <p>
                        Duration: 30 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            1770 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        A medium pressure massage on the head, neck and shoulder by using medicated oil to release the knots and stress in the muscles.
                    </p>

                </Col>

                <Col className='p-3 square-box' style={bgLightBlue} md={3}>
                    <h6 className='text-custom-megenta'>
                        UZHICHIL
                    </h6>
                    <p>
                        Duration: 45 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            3000 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        It’s a body massage below the neck with medicated Ayurvedic oil ,which works on stiff and sore muscles ,relaxes and rejuvenates the body. Ending with a Session of steam bath.
                    </p>
                </Col>

                <Col className='p-3 square-box' style={bgLightBlue} md={3}>
                    <h6 className='text-custom-megenta'>
                        FOOT MASSAGE ( BELOW KNEES )
                    </h6>
                    <p>
                        Duration: 20 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            1500 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        Foot massage with medicated herbal oils with locus on reflexology points on soles of the feet and covering area from Below knee to ankle.
                    </p>
                </Col>

            </Row>

        </Container>
    )
}

export default AyurvedaGoaContent