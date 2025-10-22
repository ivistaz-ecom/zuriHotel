import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const MayaRitualsGoaContent = () => {

    const bgLightBlue = {
        background: '#eaf2f5',
    }

    return (
        <Container className='p-md-0 p-2 py-4 '>

            <Col className='text-center pb-5 px-lg-5'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 text-center'>MAYA RITUALS</h6>
            </Col>

            <Row className='d-flex flex-md-row flex-column text-center pt-3 gap-md-0 gap-1'>
                <Col className='p-3 text-center square-box' md={3}>
                    <h6 className='text-custom-megenta'>ROYAL PRINCESS MAKE OVER</h6>
                    <p>
                        Duration: 210 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            9889 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        To bring out the princess in you with a transformation from head to toe with Body Scrub, Body Pack, Body Massage,facial,Manicure,Pedicure and a Royal Bath. Walk out into the world with confidence, glowing with your new found beauty. We firmly believe that princesses are made not born.
                    </p>
                </Col>

                <Col className='p-3 square-box' style={bgLightBlue} md={3}>
                    <h6 className='text-custom-megenta'>
                        MAYA CURE
                    </h6>
                    <p>
                        Duration: 75 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            5444 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        A special combination of massage treatment unique to our spa’s massage like no other, performed in controlled stimulating strokes that relax and tone muscles. This rids the body of toxins and a positive energy flow while using hot bundles and relives tense muscles, sore joints and stressed emotion.
                    </p>
                </Col>

                <Col className='p-3 square-box' md={3}>
                    <h6 className='text-custom-megenta'>
                        MAYA PURE INDULGENCE MASSAGE
                    </h6>
                    <p>
                        Duration: 75 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            5444 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        A harmonious massage for body and mind, combination of shirodhara and massage which has a positive effect on the emotional well-being.One floats out of this treatment.
                    </p>

                </Col>

                <Col className='p-3 square-box' style={bgLightBlue} md={3}>
                    <h6 className='text-custom-megenta'>DAS SCHONE</h6>
                    <p>
                        Duration: 90 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            6500 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        A total beauty treatment of the body from head to toe, where you can experience a body massage with aroma oil, body scrub, body pack and face pack
                    </p>
                </Col>

                <Col className='p-3 square-box' style={bgLightBlue} md={3}>
                    <h6 className='text-custom-megenta'>SANJEEVANI EXPERIENCE</h6>
                    <p>
                        Duration: 130 minutes
                    </p>
                    {/* <p className='text-black'>
                        <b>
                            8000 INR
                        </b>
                    </p> */}
                    <p className='d-none d-md-block'>
                        It’s a complete rejuvenation experience through a body massage, Shirodhara & hot fomentation with medicated poultice.
                    </p>
                </Col>
            </Row>

        </Container>
    )
}

export default MayaRitualsGoaContent