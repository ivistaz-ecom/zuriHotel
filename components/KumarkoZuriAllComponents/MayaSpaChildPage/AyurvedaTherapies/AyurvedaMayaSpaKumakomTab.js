'use client'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AyurvedaMayaSpaKumakomTab = () => {

    const bgLightBlue = {
        background: '#eaf2f5',
    }

    // State to track the selected value
    const [selectedValue, setSelectedValue] = useState('option1');

    // Function to handle the change in select value
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <>
            <Container>
                <Tabs>
                    <TabList>
                        <Tab>MASSAGES</Tab>
                        <Tab>THERAPIES</Tab>
                        <Tab>SKIN CARE</Tab>
                    </TabList>

                    {/* Massages Content */}
                    <TabPanel className="mt-4">
                        <Row className='d-flex flex-md-row flex-column flex-wrap'>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3}>
                                <h6 className='text-custom-megenta'>
                                    REJUVENATION MASSAGE
                                </h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                {/* <p className='text-black'>
                                    <b>1800 INR</b>
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Full-body massage using warm medicated oils improves circulation, relieves fatigue and related body aches and nourishes the skin.
                                </p>
                                <p>
                                    Oil: Yes; Pressure: Light to medium
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    ABHYANGAM
                                </h6>
                                <p>
                                    Duration: 75 minutes
                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    3500 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    A full-body therapeutic Ayurvedic massage using warm dosha-specific oils that revitalise body tissues by flushing out toxins.
                                </p>
                                <p>
                                    Oil: Yes; Pressure: Light to medium
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3}>
                                <h6 className='text-custom-megenta'>
                                    SWASTHA MASSAGE
                                </h6>
                                <p>
                                    Duration: 45 minutes
                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    2000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    A traditional oil massage that helps the body to deal with physical stress and fatigue, giving a feeling of overall well-being.
                                </p>
                                <p>
                                    Oil: Yes; Pressure: Light to medium
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    INDIAN HEAD MASSAGE
                                </h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    2000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    A deeply relaxing head massage that releases stress accumulated in the scalp, neck and shoulders leaving behind a feeling of revitalisation.
                                </p>
                                <p>
                                    Oil: Yes; Pressure: Light to medium
                                </p>
                            </Col>

                            <Col className='text-center p-3 custom-mayaspa-box' md={3} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    NECK AND SHOULDER CARE MASSAGE
                                </h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    2000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    A stimulating warm oil massage for the neck and shoulders to ease muscular pain and tension caused by stress and incorrect sitting posture.
                                </p>
                                <p>
                                    Oil: Yes; Pressure: Light to medium
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3}>
                                <h6 className='text-custom-megenta'>
                                    MARMA MASSAGE
                                </h6>
                                <p>
                                    Duration: 60 or 90 minutes
                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    3000 / 4000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    A traditional Kerala Ayurvedic full-body massage that stimulates the vital energy points of the body, refreshing it by releasing the blockages in the energy flow.
                                </p>
                                <p>
                                    Oil: Yes; Pressure: Light to medium
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    SYNCHRONIZED ABHYANGAM
                                </h6>
                                <p>
                                    Duration: 60 minutes
                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    4500 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    This traditional Abhyangam harmonises the vital energy flow to the body, reinforces flexibility of the joints and enhances circulation.
                                </p>
                                <p>
                                    Oil: Yes; Pressure: Light to medium
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3}>
                                <h6 className='text-custom-megenta'>
                                    AYURVEDA BACK MASSAGE
                                </h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    2000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    A therapeutic massage that uses selected oils and enhances blood circulation, eases muscular pain and relaxes the muscles of the neck, back and shoulders.
                                </p>
                                <p>
                                    Oil: Yes; Pressure: Light to medium
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3}>
                                <h6 className='text-custom-megenta'>
                                    FACIAL MASSAGE
                                </h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    1500 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Refreshing face massage using oils or creams that suit your facial skin type. It stimulates blood circulation to your face making it relaxed and toned up.
                                </p>
                                <p>
                                    Oil: Yes; Pressure: Light to medium
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    FOOT CARE MASSAGE
                                </h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    2000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Addresses fatigue, improper circulation and dryness in the soles, feet and legs with its refreshing foot soak, warm oil massage and warm towel wipes.
                                </p>
                                <p>
                                    Oil: Yes; Pressure: Light to medium
                                </p>
                            </Col>



                        </Row>
                    </TabPanel>

                    {/* Therapies Content */}
                    <TabPanel>
                        <Row className='d-flex flex-md-row flex-column flex-wrap'>
                            <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                <h6 className='text-custom-megenta'>
                                    SHIRODHARA
                                </h6>
                                <p>
                                    Duration: 60 or 30 minutes
                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    4500 / 2500 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Shirodhara is a relaxation and de-stressing therapy which involves pouring of warm, medicated oil over the forehead after an oil massage for the head and oil application for the body.
                                </p>
                                <p>
                                    Oil: Yes; Pressure: Light to medium
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    BACK AND SPINE CARE TREATMENT
                                </h6>
                                <p>
                                    Duration: 75 minutes
                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    3000 / 2000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    An Ayurveda therapy using selected oils and medicinal herbs to ease muscular pain and stiffness of the spine, back, neck and shoulders.
                                </p>
                                <p>
                                    Oil: Yes; Pressure: Light to medium
                                </p>
                            </Col>

                            <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                <h6 className='text-custom-megenta'>
                                    PIZHICHIL – MEDICINAL OIL BATH
                                </h6>
                                <p>
                                    Duration: 60 minutes

                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    6000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Involves a soft body massage while subjecting the body to streams of lukewarm medicated oil. It helps in preventing neurological and rheumatic complaints and relieves muscular spasms
                                </p>
                                <p>
                                    Oil: Yes; Pressure: Light to medium
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    NASYAM
                                </h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    1500 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Herbal extracts or oils introduced into the nostrils and a massage around the sinus areas helps flush out sinuses and relieve sinus-related congestion and headaches.
                                </p>
                            </Col>

                            <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                <h6 className='text-custom-megenta'>
                                    CHOORNA SWEDANAM / PATRA PODALA SWEDANAM
                                </h6>
                                <p>
                                    Duration: 60 minutes
                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    3000 (1 therapist) /4500 (2 therapists) INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    A healing fomenting therapy for orthopaedic ailments and pain, it provides relief through the liberal application of medicated oils in small linen pouches all over the body. (Advisable as a course of treatments (3, 5 or 7 days) for considerable relief of symptoms.) The therapy is done in seven different body positions according to your comfort level. Option with 1 or 2 therapists.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    NASYAM
                                </h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    1500 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Herbal extracts or oils introduced into the nostrils and a massage around the sinus areas helps flush out sinuses and relieve sinus-related congestion and headaches.
                                </p>
                            </Col>

                            <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                <h6 className='text-custom-megenta'>
                                    UDWARTHANAM
                                </h6>
                                <p>
                                    Duration: 45 minutes
                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    3000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    A therapy to fight obesity where warmed dry herbal powders are scrubbed vigorously on the skin to melt away sub-cutaneous fat. Also invigorates the skin through exfoliation.
                                </p>
                                <p>
                                    Oil: Yes; Pressure: Light to medium
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    KATEEVASTI
                                </h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                {/* <p className='text-black fw-bolder'>
                                    2000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Warm medicated oil kept within a herbal paste boundary around the lumbo-sacral spine relieves lumbo-sacral pain by easing out related muscular spasms and inflammation.
                                </p>
                            </Col>
                        </Row>
                    </TabPanel>

                    {/* Skin Care Content */}
                    <TabPanel>
                        <Col className='text-center mb-5'>
                            <select
                                value={selectedValue}
                                onChange={handleSelectChange}
                                className="py-2 pe-5" // Apply a class for styling
                            >
                                <option value="option1">BODY WRAPS</option>
                                <option value="option2">BODY POLISHES & UBTANS</option>
                                <option value="option3">FACIALS</option>
                                <option value="option4">MAYA SIGNATURE PACKAGES</option>
                            </select>
                        </Col>

                        {/* Conditional rendering based on the selected value */}
                        {selectedValue === 'option1' && (
                            <Row className='d-flex flex-md-row flex-column flex-wrap'>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        TROPICAL FRUIT WRAP
                                    </h6>
                                    <p>
                                        Duration: 60 minutes
                                    </p>
                                    {/* <p className='text-black fw-bolder'>
                                        3500 INR
                                    </p> */}
                                    <p className='d-none d-md-block'>
                                        A gentle exfoliation and an exotic body pack of farm fresh, anti-oxidant rich, tropical fruits like papaya, banana and oranges mixed with Ayurvedic herbs ensures your skin stays soft and supple. Suitable for all skin types.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        HIMALAYAN SALT SCRUB AND CHANDAN PACK
                                    </h6>
                                    <p>
                                        Duration: 90 minutes
                                    </p>
                                    {/* <p className='text-black fw-bolder'>
                                        5500 INR
                                    </p> */}
                                    <p className='d-none d-md-block'>
                                        A body scrub using organic Himalayan salts followed by an aromatic sandalwood pack giving your skin a youthful glow and toned look. Suitable for all skin types.
                                    </p>
                                    <p>
                                        Oil: Yes; Pressure: Light to medium
                                    </p>
                                </Col>
                            </Row>
                        )}

                        {selectedValue === 'option2' && (
                            <Row className='d-flex flex-md-row flex-column flex-wrap'>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        REVIVING SALT BODY POLISH
                                    </h6>
                                    <p>
                                        Duration: 45 minutes
                                    </p>
                                    {/* <p className='text-black fw-bolder'>
                                        2500 INR
                                    </p> */}
                                    <p className='d-none d-md-block'>
                                        Cold pressed oils and natural sea salts are blended with essential oils and herbs for gentle exfoliation that leaves the skin smooth and radiant. Suitable for all skin types.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        CLEANSING BODY UBTAN
                                    </h6>
                                    <p>
                                        Duration: 45 minutes
                                    </p>
                                    {/* <p className='text-black fw-bolder'>
                                        2500 INR
                                    </p> */}
                                    <p className='d-none d-md-block'>
                                        Ubtans are non-abrasive scrubs made from finely ground pulses, nuts and herbs, which help deep cleanse pores, exfoliate and stimulate blood circulation for a natural glow. Suitable for all skin types.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        BALANCING SUGAR BODY POLISH
                                    </h6>
                                    <p>
                                        Duration: 45 minutes
                                    </p>
                                    {/* <p className='text-black fw-bolder'>
                                        2500 INR
                                    </p> */}
                                    <p className='d-none d-md-block'>
                                        Cane sugar, coconut, cold pressed and essential oils gently exfoliate, nourish and revitalise dry skin.
                                    </p>
                                </Col>
                            </Row>
                        )}
                        {selectedValue === 'option3' && (
                            <Row className='d-flex flex-md-row flex-column flex-wrap'>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        VETIVER FACIAL
                                    </h6>
                                    <p>
                                        Duration: 60 minutes
                                    </p>
                                    {/* <p className='text-black fw-bolder'>
                                        3000 INR
                                    </p> */}
                                    <p className='d-none d-md-block'>
                                        Blended with the goodness of wheatgerm oil, it provides facial skin with the essential nutrients for rejuvenation and toning. Suitable for all skin types.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        SANDALWOOD FACIAL
                                    </h6>
                                    <p>
                                        Duration: 60 minutes
                                    </p>
                                    {/* <p className='text-black fw-bolder'>
                                        3000 INR
                                    </p> */}
                                    <p className='d-none d-md-block'>
                                        Sandalwood in combination with honey helps in moisture balance, micro circulation and deep cleansing leaving the skin healthy and radiant. Suitable for dry to normal skin.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        NEEM FACIAL
                                    </h6>
                                    <p>
                                        Duration: 60 minutes
                                    </p>
                                    {/* <p className='text-black fw-bolder'>
                                        3000 INR
                                    </p> */}
                                    <p className='d-none d-md-block'>
                                        Neem, combined with the wonderful benefits of green tea gives a nourished matte tone to the skin. Suitable for normal to oily skin.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        PAPAYA FACIAL
                                    </h6>
                                    <p>
                                        Duration: 60 minutes
                                    </p>
                                    {/* <p className='text-black fw-bolder'>
                                        3000 INR
                                    </p> */}
                                    <p className='d-none d-md-block'>
                                        Rich in antioxidants, fresh papaya refreshes and hydrates skin leaving it with a nourished, radiant look. Suitable for all skin types.
                                    </p>
                                </Col>
                            </Row>
                        )}

                        {selectedValue === 'option4' && (
                            <Row className='d-flex flex-md-row flex-column flex-wrap'>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        NIRVANA
                                    </h6>
                                    <p>
                                        Duration: 90 minutes
                                    </p>
                                    {/* <p className='text-black fw-bolder'>
                                        5500 INR
                                    </p> */}
                                    <p className='d-none d-md-block'>
                                        A full-body Ayurveda massage followed by a Shirodhara is the perfect de-stressing remedy for your body, mind and the senses.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        MAYA SPA ESSENTIALS
                                    </h6>
                                    <p>
                                        Duration: 120 minutes
                                    </p>
                                    {/* <p className='text-black fw-bolder'>
                                        6000 INR
                                    </p> */}
                                    <p className='d-none d-md-block'>
                                        It combines a gentle exfoliation for your body, footbath and a refreshing body polish, depending on your skin type. And a soothing foot massage.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        MAYA HAIR AND SCALP CARE
                                    </h6>
                                    <p>
                                        Duration: 60 minutes
                                    </p>
                                    {/* <p className='text-black fw-bolder'>
                                        3000 INR
                                    </p> */}
                                    <p className='d-none d-md-block'>
                                        A preventive care spa therapy for hair and scalp which includes an oil massage for the head followed by a soothing Ayurvedic herbal pack.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        FLORAL INDULGENCE – AYURVEDA
                                    </h6>
                                    <p>
                                        Duration: 60 minutes
                                    </p>
                                    {/* <p className='text-black fw-bolder'>
                                        4000 / 7500 INR
                                    </p> */}
                                    <p className='d-none d-md-block'>
                                        A full-body massage using Ayurveda herbal oils and a floral bath in a private Jacuzzi along with the aroma of roses. Also available for Couples.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        MAYA HAND AND FOOT AFFAIR
                                    </h6>
                                    <p>
                                        Duration: 60 minutes
                                    </p>
                                    {/* <p className='text-black fw-bolder'>
                                        3000 INR
                                    </p> */}
                                    <p className='d-none d-md-block'>
                                        This affair includes massages for the hands and feet with emollient creams, an invigorating foot soak and foot scrub leaving your feet soft, toned and revitalised.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        MAYA SEDUCTION (COUPLES)
                                    </h6>
                                    <p>
                                        Duration: 180 minutes
                                    </p>
                                    {/* <p className='text-black fw-bolder'>
                                        16000 / 8500 (Single) INR
                                    </p> */}
                                    <p className='d-none d-md-block'>
                                        A couple’s delight, it includes an exfoliating foot bath, a refreshing body polish and a full-body massage complete with a romantic floral bath. Also an herbal facial depending on your skin type! Also available individually.
                                    </p>
                                </Col>
                            </Row>
                        )}
                    </TabPanel>
                </Tabs>
            </Container>
        </>
    )
}

export default AyurvedaMayaSpaKumakomTab