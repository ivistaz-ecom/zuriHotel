import React from 'react';
import { Col, Container } from 'react-bootstrap';

const SpiritualRetreatContent = () => {
    return (
        <Container className="d-flex flex-column">

            <div className="container">
                {/* <h3 className='text-center py-md-4 text-custom-grey my-2'>SPIRITUAL RETREAT IN KERALA</h3> */}
                <Col className='text-center py-3 md:py-0'>
                    <h6 className='text-black'>(4 Nights/5 Days)</h6>

                    <p className='mt-3'>
                        Validity: 1st April 2025 to 31st March 2026 (excluding 20th December 2025 to 4th January 2026)<br />
                    </p>

                </Col>
                <div className="table-responsive md:pt-5 pt-1">
                    <table className="table table-bordered d-none d-md-table">
                        <thead>
                            <tr>
                                <th>Room Category</th>
                                <th>Zuri Lagoon View Room</th>
                                <th>Deluxe Lagoon View Room</th>
                                <th>Zuri Lagoon View Cottage</th>
                                <th>Zuri Presidential Pool Villa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>FULL BOARD <br /> <small>(Inclusive of Breakfast, Lunch & Dinner)</small></td>
                                <td>INR 90,000</td>
                                <td>INR 95,000</td>
                                <td>INR 1,00,000</td>
                                <td>INR 1,80,000</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Mobile View (Vertical Table) */}
                    <div className="d-block d-md-none">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>Room Category</th>
                                    <td>FULL BOARD <br /> <small>(Inclusive of Breakfast, Lunch & Dinner)</small></td>
                                </tr>
                                <tr>
                                    <th>Zuri Lagoon View Room</th>
                                    <td>INR 90,000</td>
                                </tr>
                                <tr>
                                    <th>Deluxe Lagoon View Room</th>
                                    <td>INR 95,000</td>
                                </tr>
                                <tr>
                                    <th>Zuri Lagoon View Cottage</th>
                                    <td>INR 1,00,000</td>
                                </tr>
                                <tr>
                                    <th>Zuri Presidential Pool Villa</th>
                                    <td>INR 1,80,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <Col className=' pt-3'>
                    <h6 className='text-black'>Inclusions:</h6>
                    <ul className=''>
                        <li className='mb-2'>Traditional welcome drink on arrival.</li>
                        <li className='mb-2'>Accommodation in well-appointed rooms.</li>
                        <li className='mb-2'>Centrally air-conditioned rooms equipped with tea/coffee makers, in-room safes and data ports.</li>
                        <li className='mb-2'>Breakfast, lunch, and dinner at our all-day dining restaurant, Lime Tree, or via room service.</li>
                        <li className='mb-2'>Evening tea/coffee with cookies and a local hot delicacy.</li>
                        <li className='mb-2'>Inclusive of taxes.</li>
                    </ul>
                </Col>
                <Col className=' pt-3'>
                    <h6 className='text-black'>Experiences:</h6>
                    <ul className=''>
                        <li className='mb-2'>Temple visits by a private sedan during the stay.</li>
                        <li className='mb-2'>Three sessions of Ayurvedic rejuvenation massage (45 minutes each) for a couple during the stay.</li>
                        <li className='mb-2'>One 45-minute evening cruise through the pristine backwaters during the stay (subject to weather conditions).</li>
                        <li className='mb-2'>Cultural program, including live music entertainment, at Natya – Our Exclusive Amphitheatre by the Lime Tree restaurant deck.</li>
                    </ul>
                </Col>
                <Col className=' pt-3'>
                    <h6 className='text-black'>Temple Visits:</h6>
                    <ul className=''>
                        <li className='mb-2'>Vaikom Mahadeva Temple – This temple is one of the few revered by both Shaivas (devotees of Shiva) and Vaishnavas (devotees of Vishnu). In Vaikom, Shiva is fondly called Vaikkathappan, the lord of Vaikom. The lingam here is believed to be from the Treta Yuga, the second age of Hinduism, and is considered one of the oldest temples in Kerala, where puja has never been interrupted since its inception.</li>
                        <li className='mb-2'>Ettumanoor Mahadeva Temple – The name “Ettumanoor” originates from the Malayalam words ‘maan’ (deer) and ‘oor’ (place), meaning “the place of deer.” Another interpretation suggests that it comes from ‘Ettu Mana Ooru,’ referring to “The Land of Eight Namboothiri Manas” (Brahmin households). According to temple tradition, the Pandavas and the sage Vyasa worshipped at this temple.</li>
                        <li className='mb-2'>Kaduthuruthy Mahadeva Temple – Legend has it that the Shivalinga here was installed by a demon named Khara, who appears in the Ramayana. After worshipping Shiva at Chidambaram, Khara obtained three Shivalingams and carried them—one in each hand and one in his mouth. The one he bit down on was installed here, giving rise to the name Kadichiruthy Prathishitta, which later became Kaduthuruthy. The other two were placed at Ettumanoor Mahadeva Temple and Vaikom Mahadeva Temple.</li>
                        <li className='mb-2'>Thiruvarppu Sree Krishna Temple – Over 1,500 years old, this temple’s origins are linked to the Mahabharata. It is believed that the idol given to the Pandavas by Krishna for worship during their exile was later placed in the Akshaya Patra and floated into the sea. This is the first temple in India to open its doors each day—it opens at 2:00 AM, performs Abhishekam to Krishna, and first serves Ushapayasam.</li>
                        <li className='mb-2'>Thirunakkara Mahadeva Temple – About 500 years old, this temple was built by the Raja of Thekkumkur. It houses unique sculptures and murals of Hindu deities. According to legend, the idol of Shiva here was installed by Parashurama. The Thekkumkur royal family considered the deity their Paradevata (tutelary deity), worshipped as Thirunakkara Thevar.</li>
                    </ul>
                </Col>
                <Col className=' pt-3'>
                    <h6 className='text-black'>Child & Extra Adult Rate:</h6>
                    <ul className=''>
                        <li className='mb-2'>One child aged 6 to 12 years stays complimentary when sharing a parent’s bed.</li>
                        <li className='mb-2'>An additional child aged 6 to 12 years will be charged INR 16,520 per child for a 4-night stay with all three meals.</li>
                        <li className='mb-2'>Children above 12 years will be considered adults and charged INR 35,400 for a 4-night stay with all three meals.</li>
                    </ul>
                </Col>
                <Col className=' pt-3'>
                    <h6 className='text-black'>Terms & Conditions:</h6>
                    <ul className=''>
                        <li className='mb-2'>Sold-out dates and blackout dates apply.</li>
                        <li className='mb-2'>Rates are inclusive of currently applicable taxes (subject to change).</li>
                        <li className='mb-2'>Rate applicable only for a minimum stay of four nights.</li>
                        <li className='mb-2'>Additional nights will be charged on a pro-rata basis.</li>
                        <li className='mb-2'>Room confirmation is subject to receipt of a guarantee in the form of an advance payment or credit card guarantee.</li>
                        <li className='mb-2'>A 100% deposit is required 14 days prior to arrival, after which the booking will be released.</li>
                        <li className='mb-2'>Bookings for more than two rooms at a given rate will be confirmed at the hotel’s discretion.</li>
                        <li className='mb-2'>This is a limited-period offer with a limited number of rooms available. Rates may increase during holidays and extended weekends.</li>
                        <li className='mb-2'>This offer cannot be used in conjunction with any other offer or privilege card discount.</li>
                        <li className='mb-2'>Check-in: 3:00 PM | Check-out: 11:00 AM</li>
                        <li className='mb-2'>Hotel terms and conditions apply.</li>
                    </ul>
                </Col>
                <Col className=' pt-3'>
                    <h6 className='text-black'>Cancellation Policy:</h6>
                    <ul className=''>
                        <li className='mb-2'>100% of the total room value will be charged if cancelled within seven days or in the event of a no-show/late cancellation.</li>
                        <li className='mb-2'>The hotel reserves the right to charge an early departure fee if the guest checks out before the confirmed departure date.</li>
                    </ul>
                </Col>
                <Col className=' pt-3'>
                    <h6 className='text-black'>Guarantee Policy:</h6>
                    <ul className=''>
                        <li className='mb-2'>All reservations must be guaranteed with a Visa, MasterCard or American Express credit card.</li>
                        <li className='mb-2'>The hotel reserves the right to preauthorize credit cards before arrival.</li>
                    </ul>
                </Col>
            </div>
        </Container>
    );
};

export default SpiritualRetreatContent;
