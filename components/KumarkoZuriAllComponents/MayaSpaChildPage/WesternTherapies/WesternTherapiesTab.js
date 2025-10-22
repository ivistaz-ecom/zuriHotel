'use client'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const WesternTherapiesTab = () => {

    const bgLightBlue = {
        background: '#eaf2f5',
    }

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
                        <Tab>FACIALS</Tab>
                        <Tab>SKIN CARE</Tab>
                    </TabList>

                    <TabPanel>
                        <Row className='d-flex flex-md-row flex-column flex-wrap mt-5'>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3}>
                                <h6 className='text-custom-megenta'>
                                    SWEDISH MASSAGE
                                </h6>
                                <p>
                                    Duration: 60 or 90 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    4000 / 6000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    A firm, yet gentle European massage which improves circulation, eases muscle aches and tension. Oils: yes; Pressure: medium.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    DEEP TISSUE MASSAGE
                                </h6>
                                <p>
                                    Duration: 60 or 90 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    4000 / 6000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    The massage releases chronic muscle tension from the deeper layers of the muscle tissue greatly enhancing blood circulation. Oils: Yes; Pressure: Medium to deep.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3}>
                                <h6 className='text-custom-megenta'>
                                    MAYA FUSION MASSAGE
                                </h6>
                                <p>
                                    Duration: 45 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    2500 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    This soothing body massage uses a combination of popular western techniques designed to drain away the stress and strain of everyday life. Oils: Yes; Pressure: Medium to firm.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    SCALP MASSAGE
                                </h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    2000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    A deep scalp massage using the pressure point technique. Boosts the strength of the hair roots while the oil conditions hair, providing lustre and shine. Oils: Yes; Pressure: Medium to deep.
                                </p>
                            </Col>

                            <Col className='text-center p-3 custom-mayaspa-box' md={3} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    SCALP MASSAGE
                                </h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    2000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    A deep scalp massage using the pressure point technique. Boosts the strength of the hair roots while the oil conditions hair, providing lustre and shine. Oils: Yes; Pressure: Medium to deep.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3}>
                                <h6 className='text-custom-megenta'>
                                    SABAI STONE MASSAGE
                                </h6>
                                <p>
                                    Duration: 90 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    6000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Warmed granite stones that fit the shape of the body, in combination with Neroli, lavender and rosemary essential oils relieve muscular and mental stress. Oils: Yes; Pressure: Medium.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    BALINESE MASSAGE
                                </h6>
                                <p>
                                    Duration: 60 or 90 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    4000 / 6000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    With a unique blend of acupressure, reflexology and aromatic essential oils, the massage uses a variety of holistic massage techniques in calming nerves and healing the body. Oils: Yes; Pressure: Medium to firm.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3}>
                                <h6 className='text-custom-megenta'>
                                    AROMA THERAPY MASSAGE
                                </h6>
                                <p>
                                    Duration: 60 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    4000  INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    This is a unique therapy that combines plant-derived aromatic essential oils with a soft relaxing massage for a calming and energising effect. Oils: yes; Pressure: Light & gentle.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3}>
                                <h6 className='text-custom-megenta'>
                                    BACK MASSAGE
                                </h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    2000
                                </p> */}
                                <p className='d-none d-md-block'>
                                    A variety of massage techniques are used to release the knotted muscles across the spine and back thus providing relief from aches and tension. Oils: Yes; Pressure: Medium to deep.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    FOOT REFLEXOLOGY
                                </h6>
                                <p>
                                    Duration: 30 or 60 minutes

                                </p>
                                {/* <p className='text-black fw-bold'>
                                    2500 / 4000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Reflexology involves massaging the pressure points on your feet which correspond to a part of the body. Specific manipulation and pressure on these points eliminates blockages in the corresponding organs, glands and other parts of the body. Oils: Yes; Pressure: Medium to deep.
                                </p>
                            </Col>

                            <Col className='text-center p-3 custom-mayaspa-box' md={3}>
                                <h6 className='text-custom-megenta'>
                                    FOOT REFLEXOLOGY
                                </h6>
                                <p>
                                    Duration: 30 or 60 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    2500 / 4000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Reflexology involves massaging the pressure points on your feet which correspond to a part of the body. Specific manipulation and pressure on these points eliminates blockages in the corresponding organs, glands and other parts of the body. Oils: Yes; Pressure: Medium to deep.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={3} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    THAI YOGA MASSAGE
                                </h6>
                                <p>
                                    Duration: 60 or 90 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    4000 / 6000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Increases flexibility, relieves muscle and joint tension and balances the body’s energy systems by using passive, rhythmic stretching, bodily movements and gentle pressure along the body’s energy lines. Oils: no; Pressure: Medium to deep.
                                </p>
                            </Col>
                        </Row>
                    </TabPanel>

                    {/* Facials */}
                    <TabPanel>
                        <Row className='d-flex flex-md-row flex-column flex-wrap mt-5'>
                            <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                <h6 className='text-custom-megenta'>
                                    FACIAL FOR DRY OR DEHYDRATED SKIN
                                </h6>
                                <p>
                                    Duration: 60 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    4000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Replenishes the vitality of dry skin by maintaining the moisture level. Nourishes and tones, leaving the skin soft, supple and well-hydrated.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    FACIAL FOR OILY SKIN
                                </h6>
                                <p>
                                    Duration: 60 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    4000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    Carefully selected natural extracts in light, textured, non-greasy formulations ensure a matte, shine-free, refined complexion with unclogged pores.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                <h6 className='text-custom-megenta'>
                                    SKIN FIT MASK TREATMENT (MEN)
                                </h6>
                                <p>
                                    Duration: 90 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    6000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    This specifically-formulated-for-men skin mask counteracts the ageing process with its rejuvenating Caviar and repairing freeze-dried Esculox. We recommend that men shave a few hours prior to their facial appointment.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    PLANTOMER MASK
                                </h6>
                                <p>
                                    Duration: 75 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    4500 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    This refreshing lift-off mask combines the hydrating benefits of Seaweed with Propolis, a natural healing and desensitising substance to soothe, nourish and augment your skin’s texture.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={4} >
                                <h6 className='text-custom-megenta'>
                                    FACIAL FOR NORMAL TO COMBINATION SKIN
                                </h6>
                                <p>
                                    Duration: 60 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    4000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    A facial for combination skin that normalises that oily T-Zone while combating dehydration.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    MYOXY CAVIAR’ & PEARL
                                </h6>
                                <p>
                                    Duration: 90 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    6000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    This anti-ageing treatment is a blend of Caviar extract, Pearl extract and phyto-extracts which increase skin oxygenation and suppleness, visibly reducing facial lines and wrinkles.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                <h6 className='text-custom-megenta'>
                                    LUMINOUS ‘C’ & SEA MASK
                                </h6>
                                <p>
                                    Duration: 75 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    5000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    This potent blend of stabilised vitamin ‘C’ and a specialised formulation of freeze-dried Seaweed gives a firm and smooth complexion with a luminous glow.
                                </p>
                            </Col>
                            <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                <h6 className='text-custom-megenta'>
                                    SENSITIVE FACIAL
                                </h6>
                                <p>
                                    Duration: 60 minutes
                                </p>
                                {/* <p className='text-black fw-bold'>
                                    4000 INR
                                </p> */}
                                <p className='d-none d-md-block'>
                                    French rose essential oil, chamomile and allantoin restore the skin’s hypersensitivity and defenses
                                </p>
                            </Col>
                        </Row>
                    </TabPanel>

                    {/* Skin Care  */}
                    <TabPanel>
                        <Col className='text-center mb-5'>
                            <select
                                value={selectedValue}
                                onChange={handleSelectChange}
                                className="py-2 pe-5" // Apply a class for styling
                            >
                                <option value="option1">BODY SCRUBS</option>
                                <option value="option2">BODY WRAPS</option>
                            </select>
                        </Col>

                        {/* Conditional rendering based on the selected value */}
                        {selectedValue === 'option1' && (
                            <Row className='d-flex flex-md-row flex-column flex-wrap'>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        SILKY SKIN BODY SCRUB
                                    </h6>
                                    <p>
                                        Duration: 45 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        2800 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        This unique body scrub carefully deep cleanses and exfoliates to eliminate dead skin cells, skin-bound toxins, impurities and sebum accumulation. Recommended for all skin types.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        DE AGING SALT MOUSSE SCRUB
                                    </h6>
                                    <p>
                                        Duration: 45 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        2800 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        The salt mousse scrub with sea minerals and fruit enzymes removes dead skin cells resulting in a more radiant appearance. Suits all skin types.
                                    </p>
                                </Col>
                            </Row>
                        )}

                        {selectedValue === 'option2' && (
                            <Row className='d-flex flex-md-row flex-column flex-wrap'>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        GREEN COFFEE BODY WRAP
                                    </h6>
                                    <p>
                                        Duration: 90 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        5000 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        This slimming and toning wrap stimulates your body’s ability to break down fat, increase metabolism and eliminate water retention.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        MOROCCAN COCOON WITH RASSOUL BODY WRAP
                                    </h6>
                                    <p>
                                        Duration: 90 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        5000 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        Volcanic ash, historically recognised as a purifying paste for skin cleansing and moisture retention is used alongside warm purifying mud for a gentle exfoliation and delightful rejuvenation.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        REJUVENATING EYE TREATMENT
                                    </h6>
                                    <p>
                                        Duration: 30 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        1500 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        This specialised treatment fights wrinkles, reduces dark circles and relieves puffiness making eyes refreshed and radiant.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        THALASSOTHERAPY
                                    </h6>
                                    <p>
                                        Duration: 90 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        5000 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        A warm, soaking bath with micronised seaweed to eliminate toxins and revitalise your body after a deep cleansing body exfoliation.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        HYDRO BATH
                                    </h6>
                                    <p>
                                        Duration: 30 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        2000 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        A warm, soaking bath in a hydrotherapy tub with a choice of micronised seaweed or natural moor mud after any of our body massages or skin treatments.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        MAYA SIGNATURE PACKAGES
                                    </h6>
                                    <p>
                                        Duration: 180 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        21000 / 10000 (Single) INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        Romantic Getaway, the Spa Way (Couple) Experience a couple package that consists of a refreshing body scrub of your choice, a hydrating body wrap, a massage of your choice from the Western spa menu and finally a romantic floral bath in the Jacuzzi with the aroma of fresh roses. You can opt for a 60 minute facial instead of the body wrap. Also available individually.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        COUPLE MASSAGE
                                    </h6>
                                    <p>
                                        Duration: 75 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        10000 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        An hour’s massage of your choice from the Western Spa menu together in the privacy of a candle-lit couple’s spa suite with soothing music. It ends with a head or foot massage and a floral bath in the private Jacuzzi. Oils: Yes; Pressure: Light, medium to deep.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        MAYA PAMPERING TREAT
                                    </h6>
                                    <p>
                                        Duration: 90 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        6000 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        Soothing body massage with aromatic oils follows a relaxing body palming and a back massage with warmed stones to ease the deeply tensed muscles.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        MAYA SPA DAY OUT REVIVAL
                                    </h6>
                                    <p className='d-none d-md-block'>
                                        Relax, unwind and enjoy a day of pampering at the Maya Spa and it will leave you feeling fresh, calm, rejuvenated and beautiful. The menu has been carefully designed to offer an ultimate Spa revival experience for your body, mind and soul. The day-out includes the following Spa therapies along with one session of personalised basic Yoga and Meditation (60 min). We request you to adhere to the specific timings for each session as advised by the Spa to fully enjoy the whole experience in a relaxed manner spaced through the day.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        SESSION 2
                                    </h6>
                                    <p>
                                        Choice of Body scrub – 45 min
                                    </p>
                                    <p>
                                        Vichy shower – 15 min
                                    </p>
                                    <p>
                                        Choice of Body massage – 60 min
                                    </p>
                                    <p>
                                        Floral bath in a private Jacuzzi
                                    </p>
                                </Col>

                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        AROMATIC MOOR MUD WRAP
                                    </h6>
                                    <p>
                                        Duration: 90 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        5000 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        Soothes sore muscles, aches and pains by stimulating your body’s circulation. Ideal for those prone to chronic pain or fatigue, rheumatism / arthritis pain and post sports injuries.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        WATER LILLY BODY WRAP AFTER SUN SOOTHING TREATMENT
                                    </h6>
                                    <p>
                                        Duration: 60 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        4000 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        Cooling and desensitising water lilies, green tea and chamomile relieve the discomfort of skin over-exposed to the sun.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        HYDROTHERAPY
                                    </h6>
                                    <p>
                                        Duration: 30 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        6000 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        Combines the herbo-mineral and thermal aspects to the healing power of water as you soak in a hydro bath-tub with water jet streams. Stimulates sensory receptors on the skin, boosts blood circulation and releases muscle tension.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        BALENEOTHERAPY
                                    </h6>
                                    <p>
                                        Duration: 90 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        5000 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        Aromatic body polish followed by a warm soaking bath with natural moor mud to alleviate aches and pains.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        VICHY SHOWER
                                    </h6>
                                    <p>
                                        Duration: 15 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        1000 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        A cascade of water hitting your body through gentle sprays of Vichy shower (a shower with seven shower heads) energises your body chakras, eases muscle tension, cleanses and hydrates. (It can easily be enjoyed separately or following any body massages or skin treatments for a complete Spa experience.)
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        CLOUD 9 MASSAGE
                                    </h6>
                                    <p>
                                        Duration: 90 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        6000 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        Lying on a Nuvola, a dry, floatation water bed after a relaxing full-body massage with a special lighting system creating a sequence of colours, provides deep relaxation and healing.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        FLORAL INDULGENCE
                                    </h6>
                                    <p>
                                        Duration: 60 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        5000 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        Choice of Western or Oriental full-body massage drains away stress and calms your body and senses. Ends in a floral bath in a private Jacuzzi.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        MAYA SPA SENSATION
                                    </h6>
                                    <p>
                                        Duration: 120 minutes
                                    </p>
                                    <p className='text-black fw-bolder'>
                                        7500 INR
                                    </p>
                                    <p className='d-none d-md-block'>
                                        Starts with a refreshing body scrub, rejuvenating body exfoliation and relaxing under the gentle sprays of Vichy shower. Ends with a deeply relaxing body massage.
                                    </p>
                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4}>
                                    <h6 className='text-custom-megenta'>
                                        SESSION 1
                                    </h6>
                                    <p>
                                        Maya Hand and Foot Affair – 30 min
                                    </p>
                                    <p>
                                        Shirodhara 30 min OR Back Massage – 30 min
                                    </p>

                                </Col>
                                <Col className='text-center p-3 custom-mayaspa-box' md={4} style={bgLightBlue}>
                                    <h6 className='text-custom-megenta'>
                                        SESSION 3
                                    </h6>
                                    <p>
                                        Maya Hair and Scalp Care – 45 min
                                    </p>
                                    <p>
                                        Choice of Facial – 60 min
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

export default WesternTherapiesTab