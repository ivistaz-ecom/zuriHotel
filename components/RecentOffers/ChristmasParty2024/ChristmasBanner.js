"use client";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BannerAllPage from "../../BannerAllPage";
import Image from "next/image";

// Card Data Array
const festiveEvents = [
  {
    title: "Zuri Goa",
    location: "Horizon Lawn",
    imageUrl: "/christmas/ZuriGoa-24Dec.png",
  },
  {
    title: "Zuri Kumarakom",
    location: "Lime Tree & Amphitheatre",
    imageUrl: "/christmas/ZuriKumarkomChirstmus.png",
  },
];

const gustEvents = [
  {
    title: "Zuri Bangalore",
    location: "Karibu",
    imageUrl: "/christmas/ZuriBangaloreChristmus.png",
  },
];

const newYearEvents = [
  {
    title: "Zuri Goa",
    location: "Horizon Lawn",
    imageUrl: "/christmas/ZuriGoaNewYear.png",
  },
  {
    title: "Zuri Kumarakom",
    location: "Lime Tree & Amphitheatre",
    imageUrl: "/christmas/ZuriKumarakomNewYear.png",
  },
  {
    title: "Zuri Bangalore",
    location: "Infinity By Poolside",
    imageUrl: "/christmas/ZuriBangaloreNewYear.png",
  },
  {
    title: "Zuri Bangalore",
    location: "Karibu",
    imageUrl: "/christmas/ZuriBangaloreChristmus.png",
  },
];

const ChristmasBanner = () => {
  const desktopImageUrl = "/christmas/ChristmasBannerImage.jpg"; // Image for desktop view
  const mobileImageUrl = "/christmas/ChristmasMobileBannerImage.jpg"; // Image for mobile view

  return (
    <>
      <Container fluid className="p-0">
        <Container className="custom-kumarkom-menu-container px-0">

          {/* Desktop view */}
          <h3 className="d-none d-md-block text-center py-md-4 text-custom-grey p-2">
          Celebrate the Magic of the Festive Season at
          <br /> The Zuri Hotels & Resorts
          </h3>
          {/* Mobile view */}
          <p className="d-block d-md-none text-center py-md-4 text-custom-grey p-2">
            Celebrate the Magic of the Festive Season at<br/> The Zuri Hotels & Resorts
          </p>

          {/* Desktop banner
          <div className="d-none d-sm-block">
            <BannerAllPage backgroundImageUrl={desktopImageUrl} />
          </div>

          Mobile banner
          <div className="d-block d-md-none ">
            <BannerAllPage backgroundImageUrl={mobileImageUrl} />
          </div> */}

          {/* Description */}
          <Col className="mt-lg-5 mt-4 text-center p-lg-0 p-3">
            <p>
              Make this Christmas and New Year Eve unforgettable with Zuri
              Hotels & Resorts! Experience the joy of the season with dazzling
              celebrations, gourmet feasts, live entertainment, and luxurious
              stays. Whether you’re planning a family gathering, a romantic
              evening, or a lively party with friends, we’ve got something
              special for everyone.
            </p>
            <p>
              Spaces are filling up fast - don’t miss out on the festivities!
            </p>
            <p>
              Reserve your spot now and make this holiday season one to
              remember!
            </p>
          </Col>

          {/* Event Layout Using Map */}
          <div className="text-center">
            <div className="py-2">
              <Image src="/cl.png" alt="" fluid width={25} height={25} />
            </div>
            <h4 className="fw-bold">Christmas Eve Party </h4>
            <p className="pb-2">24 December 2024</p>
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
            <div className="py-2 mt-3">
              <Image src="/cl.png" alt="" fluid width={25} height={25} />
            </div>
            <h4 className="fw-bold ">Christmas Brunch</h4>
            <p className="pb-2">25 December 2024</p>
            <div className="d-flex flex-lg-row flex-column justify-content-center gap-lg-5 gap-1">
              {gustEvents.map((event, index) => (
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

            <div className="py-2 mt-3">
              <Image src="/cl.png" alt="" fluid width={25} height={25} />
            </div>
            <h4 className="fw-bold">New Year Eve Party </h4>
            <p className="pb-2">31 December 2024</p>
            <div className="d-flex flex-lg-row flex-column justify-content-center gap-lg-5 gap-3">
              {newYearEvents.map((event, index) => (
                <div key={index} xs={12} md={3} className="">
                  <div className="text-center">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      width={200}
                      height={200}
                    />
                    <h5 className="mt-2 fw-bold">{event.title}</h5>
                    <p className="text-muted">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default ChristmasBanner;
