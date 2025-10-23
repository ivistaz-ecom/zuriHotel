'use client'
import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap';

const KumarkomHomePopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(true);
    }, []);

    // Disable scrolling when popup is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto'; // Cleanup when component unmounts
        };
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <Col className='position-fixed start-0 top-0 end-0 bottom-0 d-flex flex-column z-3'>
                    <Col className='position-relative'>
                        <span
                            className='position-absolute top-0 bottom-0 start-0 end-0 bg-dark bg-opacity-50'
                            onClick={handleClick}
                        ></span>
                        <Col className='position-absolute translate-middle start-50 top-50 d-lg-block d-none d-lg-flex flex-column align-items-start bg-white shadow-lg rounded p-4 w-50'>
                            <p class=" text-secondary mt-3">
                                TiEcon Kerala 2025 will be held at <strong>The Zuri Kumarakom, Kerala Resort &amp; Spa</strong>
                                on <strong>21st and 22nd November 2025</strong>.</p>
                            <p>For room reservations during the event, please contact the undersigned.</p>
                            <p><strong>Reshma</strong></p>
                            <p>Mobile: <a href="tel:+918129367122">+91 81293 67122</a></p>
                            <p>E-mail: <a href="mailto:accounts@tiekerala.org">accounts@tiekerala.org</a></p>
                            <p><strong>Vishnu</strong></p>
                            <p>Mobile: <a href="tel:+919946105511">+91 99461 05511</a></p>
                            <p>E-mail: <a href="mailto:vishnu.soman@thezurihotels.com">vishnu.soman@thezurihotels.com</a></p>

                            <span className='position-absolute end-0 top-0'>
                                <i className="bi bi-x fs-4 cursor-pointer" onClick={handleClick}></i>
                            </span>
                        </Col>
                        <Col className='d-lg-none d-block position-absolute top-50 start-50 w-100 p-4 translate-middle'>
                            <Col className='position-relative'>
                                <span className='position-absolute end-0 top-0 z-3 bg-purple'>
                                    <i className="bi bi-x fs-4 cursor-pointer text-white" onClick={handleClick}></i>
                                </span>
                                <p className='text-center text-secondary mt-3 p-5'
                                    style={{ width: '100%', height: "auto", backgroundColor: 'white' }}
                                >
                                    Our main pool and kids' pool <br />will be under maintenance from <br />1st April to 8th April 2025.
                                </p>
                            </Col>
                        </Col>
                    </Col>
                </Col>
            )}
        </>
    )
}

export default KumarkomHomePopup;


// 'use client'
// import React, { useEffect, useState } from 'react'
// import { Col, Image, Modal } from 'react-bootstrap';

// const KumarkomHomePopup = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleClick = () => {
//         setIsOpen(!isOpen);
//     };

//     // Close the component on page load
//     React.useEffect(() => {
//         setIsOpen(true);
//     }, []);

//     return (
//         <>

//             {isOpen && (
//                 <Col
//                     className='position-fixed start-0 top-0 end-0 bottom-0 d-flex flex-column z-3'
//                 >
//                     <Col
//                         className='position-relative'
//                     >
//                         <span
//                             className='position-absolute top-0 bottom-0 start-0 end-0 bg-black bg-opacity-50'
//                             onClick={handleClick}
//                         >
//                         </span>
//                         <Col
//                             className='position-absolute translate-middle start-50 top-50 d-lg-block d-none'
//                         >
//                             {/* <Image
//                                 src="/popup/kumarkom-popup/zuri_kumarkom_appreciation_letter.jpeg"
//                                 style={{ width: '100%', height: "90vh" }}
//                                 alt=""
//                             /> */}
//                             <p
//                                 className='p-5 d-flex align-items-center justify-content-center flex-column'
//                                 style={{ backgroundColor: 'white', width: '100%', height: "50vh" }}
//                             >
//                                 Our main pool and kids' pool will be under maintenance from 1st April to 8th April 2025.
//                             </p>
//                             <span className='position-absolute end-0 top-0'>
//                                 <i className="bi bi-x fs-4 cursor-pointer" onClick={handleClick}></i>
//                             </span>
//                         </Col>
//                         <Col
//                             className='d-lg-none d-block position-absolute top-50 start-50 w-100 p-4 translate-middle'
//                         >
//                             <Col className='position-relative'>
//                                 <span className='position-absolute end-0 top-0 z-3 bg-purple'>
//                                     <i className="bi bi-x fs-4 cursor-pointer text-white" onClick={handleClick}></i>
//                                 </span>
//                                 <Image
//                                     src="/popup/kumarkom-popup/zuri_kumarkom_appreciation_letter.jpeg"
//                                     style={{ width: '100%', height: "auto" }}
//                                     alt=""
//                                 />
//                             </Col>
//                         </Col>


//                     </Col>
//                 </Col>
//             )}


//             {/* <Modal
//                 show={showPopup}
//                 onHide={handleClose}
//                 backdrop="static"
//                 keyboard={false}
//             >
//                 <Modal.Body>
//                     <Image src="/popup/kumarkom-popup/zuri_kumarkom_appreciation_letter.jpeg" alt="Popup Image" style={{ width: '100%' }} />

//                     <p>
//                         Our Banquet hall & Kick-start Gym will be closed for maintenance from 10th January to 20th January 2024. Thank you for your understanding.
//                     </p>
//                 </Modal.Body>
//                 <Col className='position-absolute end-0'>
//                     <button
//                         onClick={handleClose}
//                         className='bg-transparent border-0'
//                     >
//                         <i
//                             className="bi bi-x-square rounded-circle text-purple"
//                         >
//                         </i>
//                     </button>
//                 </Col>
//             </Modal> */}
//         </>
//     )
// }

// export default KumarkomHomePopup