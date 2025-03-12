"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../../app/globals.css";
import ContactWordpressFeedbackForm from "./ContactWordpressFeedbackForm";

const ContactUsTap = () => {
  const [isOnclickShow, setIsOnclickShow] = useState(true);
  const [isOnclickShow1, setIsOnclickShow1] = useState(false);
  const [isOnclickShow2, setIsOnclickShow2] = useState(false);

  const handleOnclikEvent = () => {
    setIsOnclickShow(true);
    setIsOnclickShow1(false);
    setIsOnclickShow2(false);
  };

  const handleOnclikEvent1 = () => {
    setIsOnclickShow1(true);
    setIsOnclickShow(false);
    setIsOnclickShow2(false);
  };
  const handleOnclikEvent2 = () => {
    setIsOnclickShow2(true);
    setIsOnclickShow(false);
    setIsOnclickShow1(false);
  };

  return (
    <>
      <Container className="py-5">
        <div className="d-flex flex-lg-row flex-column gap-lg-4 justify-content-center">
          <div onClick={handleOnclikEvent} className="text-center">
            <p
              className="pb-2 text-center font12px cursor-pointer"
              style={{
                borderBottom: isOnclickShow ? "2px solid #8b3f88" : "0px",
                color: isOnclickShow ? "#8b3f88" : "black",
              }}
            >
              PHYSICAL ADDRESS
            </p>
          </div>

          <div onClick={handleOnclikEvent1} className="text-center">
            <p
              className="pb-2 text-center font12px cursor-pointer"
              style={{
                borderBottom: isOnclickShow1 ? "2px solid #8b3f88" : "0px",
                color: isOnclickShow1 ? "#8b3f88" : "black",
              }}
            >
              SALES ADDRESS
            </p>
          </div>

          <div onClick={handleOnclikEvent2} className="text-center">
            <p
              className="pb-2 text-center font12px cursor-pointer"
              style={{
                borderBottom: isOnclickShow2 ? "2px solid #8b3f88" : "0px",
                color: isOnclickShow2 ? "#8b3f88" : "black",
              }}
            >
              FEEDBACK
            </p>
          </div>
        </div>

        {isOnclickShow && (
          <Col className="mt-4">
            <Col>
              <Row className="d-flex flex-lg-row flex-column">
                <Col className="text-center">
                  <p className="purple-clr">
                    THE ZURI WHITEFIELD, BENGALURU <br /> <br />
                  </p>
                  <p>
                    ITPL Road, Whitefield, Bengaluru, <br />
                    Karnataka 560 048, INDIA
                  </p>
                  <p className="mb-0">
                    Tel:
                    <a
                      className="text-decoration-none text-black-50"
                      href="tel:8066657272"
                    >
                      +91 806 665 7272
                    </a>
                  </p>
                  <p>
                    Fax:
                    <a
                      className="text-decoration-none text-black-50"
                      href="fax:8066657282"
                    >
                      +91 806 665 7282
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.google.com/maps/place/The+Zuri+Whitefield,+Bengaluru/@12.9901636,77.7233533,17z/data=!3m1!4b1!4m9!3m8!1s0x3bae11eca67a4595:0x8df549946d852668!5m2!4m1!1i2!8m2!3d12.9901636!4d77.7233533!16s%2Fg%2F1v9l96f8?entry=ttu"
                      target="_blank"
                      className="text-black-50"
                    >
                      View in Google Maps
                    </a>
                  </p>
                </Col>

                <Col className="text-center">
                  <p className="purple-clr">
                    THE ZURI KUMARAKOM, <br />
                    KERALA RESORT & SPA
                  </p>

                  <p>
                    V 235 A1 to A54, Karottukayal, Kumarakom, <br />
                    Kottayam, Kerala 686 563, INDIA
                  </p>
                  {/* Temporary contact is updated */}
                  <p className="mb-0">
                    {/* Tel:<a className="text-decoration-none text-black-50" href='tel: 9946105513' >+91 99461 05513  </a> */}
                    Tel:
                    <a
                      className="text-decoration-none text-black-50"
                      href="tel:4812527272"
                    >
                      +91 481 252 7272
                    </a>
                  </p>

                  <p>
                    Fax:
                    <a
                      className="text-decoration-none text-black-50"
                      href="fax:4812527282"
                    >
                      +91 481 252 7282{" "}
                    </a>
                  </p>

                  <p>
                    <a
                      href="https://www.google.com/maps/place/The+Zuri+Kumarakom,+Kerala+Resort+%26+Spa/@9.5922502,76.4248096,17z/data=!3m1!4b1!4m9!3m8!1s0x3bae11ecefe74b25:0x6e053ff345195894!5m2!4m1!1i2!8m2!3d9.5922502!4d76.4248096!16s%2Fg%2F1thk759j?entry=ttu"
                      target="_blank"
                      className="text-black-50"
                    >
                      View in Google Maps
                    </a>
                  </p>
                </Col>

                <Col className="text-center">
                  <p className="purple-clr">
                    THE ZURI WHITE SANDS, <br />
                    GOA RESORT & CASINO
                  </p>

                  <p>
                    Pedda Varca, Salcete, <br />
                    South Goa, Goa 403 721, INDIA
                  </p>

                  <p className="mb-0">
                    Tel:
                    <a
                      className="text-decoration-none text-black-50"
                      href="tel:08322727272"
                    >
                      +91 0832 272 7272{" "}
                    </a>{" "}
                    / Tel:
                    <a
                      className="text-decoration-none text-black-50"
                      href="tel:08326687272"
                    >
                      +91 0832 668 7272{" "}
                    </a>
                  </p>

                  <p>
                    Fax:
                    <a
                      className="text-decoration-none text-black-50"
                      href="fax:08322727282"
                    >
                      +91 0832 272 7282{" "}
                    </a>
                  </p>

                  <p>
                    <a
                      href="https://www.google.com/maps/place/The+Zuri+White+Sands,+Goa+Resort+%26+Casino/@15.2261444,73.9291849,17z/data=!3m1!4b1!4m5!3m4!1s0x3bbfb49c84bd23e5:0xa6437361c8d39990!8m2!3d15.2261444!4d73.9313736?shorturl=1"
                      target="_blank"
                      className="text-black-50"
                    >
                      View in Google Maps
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Col>
        )}

        {isOnclickShow1 && (
          <Col className="mt-4">
            <Col>
              <Row>
                <Col className="text-center">
                  <p className="purple-clr">DELHI SALES OFFICE</p>
                  <p>Ms. Gitika Singh</p>
                  <p className="mb-0">
                    Email:{" "}
                    <a
                      className="text-decoration-none text-black"
                      href="mailto:gitika.singh@thezurihotels.com"
                    >
                      gitika.singh@thezurihotels.com
                    </a>
                  </p>
                  <p>
                    Tel:
                    <a className="text-decoration-none text-black" href="tel:">
                      +91 848 490 6204{" "}
                    </a>
                  </p>
                  {/* <p>Mr. Rajarshi Dutta</p>
                  <p className="mb-0">
                    Email:{" "}
                    <a
                      className="text-decoration-none text-black"
                      href="mailto:rajarshi.dutta@thezurihotels.com"
                    >
                      rajarshi.dutta@thezurihotels.com
                    </a>
                  </p>
                  <p>
                    Tel:
                    <a
                      className="text-decoration-none text-black"
                      href="tel:8956152715"
                    >
                      +91 895 615 2715{" "}
                    </a>
                  </p> */}
                </Col>

                <Col className="text-center">
                  <p className="purple-clr">MUMBAI SALES OFFICE</p>

                  <p>Mr. Brian Dsouza</p>

                  <p className="mb-0">
                    Email:{" "}
                    <a
                      className="text-decoration-none text-black"
                      href="mailto:brian.dsouza@thezurihotels.com"
                    >
                      brian.dsouza@thezurihotels.com
                    </a>
                  </p>
                  <p>
                    Tel:
                    <a
                      className="text-decoration-none text-black"
                      href="tel: 9930494512"
                    >
                      +91 993 049 4512{" "}
                    </a>
                  </p>

                  <p>Mr. Mahendra Kamble</p>
                  <p className="mb-0">
                    Email:{" "}
                    <a
                      className="text-decoration-none text-black"
                      href="mailto:mahendra.kamble@thezurihotels.com"
                    >
                      mahendra.kamble@thezurihotels.com
                    </a>
                  </p>
                  <p>
                    Tel:
                    <a className="text-decoration-none text-black" href="tel:">
                      +91 992 055 7851{" "}
                    </a>
                  </p>
                </Col>

                <Col className="text-center">
                  <p className="purple-clr">GOA SALES OFFICE</p>

                  <p>Mr. Abhijit Das</p>

                  <p className="mb-0">
                    Email:{" "}
                    <a
                      className="text-decoration-none text-black"
                      href="mailto:salesexe.whitesands@thezurihotels.com"
                    >
                      abhijit.das@thezurihotels.com
                    </a>
                  </p>
                  <p>
                    Tel:
                    <a
                      className="text-decoration-none text-black"
                      href="tel:9765557925"
                    >
                      +91 976 555 7806{" "}
                    </a>
                  </p>

                  <p>Ms. Lisel Rodrigues</p>

                  <p className="mb-0">
                    Email:{" "}
                    <a
                      className="text-decoration-none text-black"
                      href="mailto:salesexe.whitesands@thezurihotels.com"
                    >
                      salesexe.whitesands@thezurihotels.com
                    </a>
                  </p>
                  <p>
                    Tel:
                    <a
                      className="text-decoration-none text-black"
                      href="tel:9765557925"
                    >
                      +91 976 555 7925{" "}
                    </a>
                  </p>
                </Col>
              </Row>

              <Row className="mt-4">
                <Col className="text-center">
                  <p className="purple-clr">KOCHI SALES OFFICE</p>

                  <p>Mr. Vishnu Soman</p>

                  <p className="mb-0">
                    Email:{" "}
                    <a
                      className="text-decoration-none text-black"
                      href="mailto:vishnu.soman@thezurihotels.com"
                    >
                      vishnu.soman@thezurihotels.com
                    </a>
                  </p>
                  <p>
                    Tel:
                    <a
                      className="text-decoration-none text-black"
                      href="tel:9946105511"
                    >
                      +91 994 610 5511{" "}
                    </a>
                  </p>

                  <p>Mr. Sooraj R</p>

                  <p className="mb-0">
                    Email:{" "}
                    <a
                      className="text-decoration-none text-black"
                      href="mailto:sooraj.r@thezurihotels.com"
                    >
                      sooraj.r@thezurihotels.com
                    </a>
                  </p>
                  <p>
                    Tel:
                    <a
                      className="text-decoration-none text-black"
                      href="tel:+919946105501"
                    >
                      +91 994 610 5501{" "}
                    </a>
                  </p>
                </Col>

                <Col className="text-center">
                  <p className="purple-clr">BENGALURU SALES OFFICE</p>

                  <p>Ms. Simran Randhawa</p>

                  <p className="mb-0">
                    Email:{" "}
                    <a
                      className="text-decoration-none text-black"
                      href="mailto:simran.randhawa@thezurihotels.com"
                    >
                      simran.randhawa@thezurihotels.com
                    </a>
                  </p>
                  <p>
                    Tel:
                    <a
                      className="text-decoration-none text-black"
                      href="tel:9739077569"
                    >
                      +91 973 907 7569{" "}
                    </a>
                  </p>
                </Col>

                <Col className="text-center">
                  <p className="purple-clr">GUJARAT SALES OFFICE</p>

                  <p>Mr. Jitendra Patel</p>

                  <p className="mb-0">
                    Email:{" "}
                    <a
                      className="text-decoration-none text-black"
                      href="mailto:jitendra.patel@thezurihotels.com"
                    >
                      {" "}
                      jitendra.patel@thezurihotels.com
                    </a>
                  </p>
                  <p>
                    Tel:
                    <a
                      className="text-decoration-none text-black"
                      href="tel:+918484906209"
                    >
                      +91 848 490 6209{" "}
                    </a>
                  </p>
                </Col>
              </Row>
              <Row className="mt-4 justify-content-start">
                <Col className="text-center">
                  <p className="purple-clr">CHENNAI SALES OFFICE:</p>
                  <p>Mr. Lyndon Trousse</p>
                  <p className="mb-0">
                    Email:{" "}
                    <a
                      className="text-decoration-none text-black"
                      href="mailto:lyndon.trousse@thezurihotels.com"
                    >
                      lyndon.trousse@thezurihotels.com
                    </a>
                  </p>
                  <p>
                    Tel:
                    <a className="text-decoration-none text-black" href="tel:">
                      +91 998 037 3006{" "}
                    </a>
                  </p>
                </Col>
                <Col className="d-none d-md-block"></Col>
<Col className="d-none d-md-block"></Col>

              </Row>
            </Col>
          </Col>
        )}
        {isOnclickShow2 && (
          <Col className="">
            <Col>
              <ContactWordpressFeedbackForm />
            </Col>
          </Col>
        )}
      </Container>
    </>
  );
};

export default ContactUsTap;
