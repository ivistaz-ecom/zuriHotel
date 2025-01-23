"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BannerAllPage from "../../BannerAllPage";
import Image from "next/image";
import Offers from "./Offers";

// Card Data Array
const festiveEvents = [
  {
    title: "Zuri Whitefield",
    location: "Infinity “Indian” (Poolside)",
    imageUrl: "/valentines_day/whitefield_pool_side.jpg",
  },
  {
    title: "Zuri Whitefield",
    location: "Karibu “Multi-Cuisine Dining”",
    imageUrl: "/valentines_day/multi-cuisine_dining.jpg",
  },
  {
    title: "Zuri Whitefield",
    location: "Incanto “Italian”",
    imageUrl: "/valentines_day/Incanto_italian.jpg",
  },
];

const ChristmasBanner = () => {
  const desktopImageUrl = "/valentines_day/valentines_day_banner.jpg"; // Image for desktop view
  const mobileImageUrl = "/valentines_day/valentines_day_mobile_banner.jpg"; // Image for mobile view

  const [isOnclickShow, setIsOnclickShow] = useState(true);
  const [isOnclickShow1, setIsOnclickShow1] = useState(false);

  const handleOnclikEvent = () => {
    setIsOnclickShow(true);
    setIsOnclickShow1(false);
  };

  const handleOnclikEvent1 = () => {
    setIsOnclickShow1(true);
    setIsOnclickShow(false);
  };

  return (
    <>
      <Container fluid className="p-0">
        <Container className="custom-kumarkom-menu-container px-0">
          {/* <h3 className="d-none d-md-block text-center py-md-4 text-custom-grey p-2">
          Celebrate the Magic of the Festive Season at
          <br className=""/> The Zuri Hotels & Resorts
          </h3> */}
          {/* Desktop banner */}
          <div className="d-none d-sm-block">
            <BannerAllPage backgroundImageUrl={desktopImageUrl} />
          </div>
          {/* Mobile banner */}
          <div className="d-block d-md-none ">
            <BannerAllPage backgroundImageUrl={mobileImageUrl} />
          </div>

          <Container className="pt-5">
            <div className="d-flex flex-lg-row flex-column gap-lg-4 justify-content-center">
                <div onClick={handleOnclikEvent} className="text-center">
                  <p
                    className="pb-2 text-center font12px cursor-pointer"
                    style={{
                      borderBottom: isOnclickShow ? "2px solid #8b3f88" : "0px",
                      color: isOnclickShow ? "#8b3f88" : "black",
                    }}
                  >
                    Zuri Whitefield
                  </p>
                </div>

                <div onClick={handleOnclikEvent1} className="text-center">
                  <p
                    className="pb-2 text-center font12px cursor-pointer"
                    style={{
                      borderBottom: isOnclickShow1
                        ? "2px solid #8b3f88"
                        : "0px",
                      color: isOnclickShow1 ? "#8b3f88" : "black",
                    }}
                  >
                    Zuri Goa
                  </p>
                </div>
            </div>
          </Container>
           
          {isOnclickShow && (
            <div>
              {/* Event Layout Using Map */}
              <div className="text-center mt-4">
                <div className="py-2">
                  <Image src="/cl.png" alt="" fluid width={25} height={25} />
                </div>
                <h4 className="fw-bold">Valentine's day Party</h4>
                <p className="pb-2">14 January 2025</p>
                <div className="d-flex flex-lg-row flex-column justify-content-center gap-lg-5 gap-1">
                  {festiveEvents.slice(0, 3).map((event, index) => (
                    <div key={index} xs={12} md={4} className="">
                      <div className="text-center">
                        <Image
                          src={event.imageUrl}
                          alt={event.title}
                          width={200}
                          height={200}
                          className="img-fluid"
                        />
                        <h5 className="mt-2 fw-bold">{event.title}</h5>
                        <p className="text-muted">{event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Offers />
            </div>
          )}
          {isOnclickShow1 && <div> <div className="text-center mt-4">
                <div className="py-2">
                  <Image src="/cl.png" alt="" fluid width={25} height={25} />
                </div>
                <h4 className="fw-bold">Valentine's day Party</h4>
                <p className="pb-2">14 January 2025</p>
                <div className="d-flex flex-lg-row flex-column justify-content-center gap-lg-5 gap-1">
                  {festiveEvents.slice(0, 3).map((event, index) => (
                    <div key={index} xs={12} md={4} className="">
                      <div className="text-center">
                        <Image
                          src={event.imageUrl}
                          alt={event.title}
                          width={200}
                          height={200}
                          className="img-fluid"
                        />
                        <h5 className="mt-2 fw-bold">{event.title}</h5>
                        <p className="text-muted">{event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div></div>}
        </Container>
      </Container>
    </>
  );
};

export default ChristmasBanner;
