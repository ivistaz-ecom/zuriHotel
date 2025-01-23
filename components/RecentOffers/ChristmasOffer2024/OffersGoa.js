"use client";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Package = ({ title, price, inclusions }) => (
  <div className="package-card p-4 mt-4 rounded position-relative">
    <h5 className="fw-bolder">{title} – {price}</h5>
    <p>Package Inclusions –</p>
    <div className="ps-3">
      {inclusions.map((item, index) => (
        <p key={index} className="mt-3 d-flex align-items-center gap-2">
          <i className="bi bi-heart-fill heart-icon"></i> {item}
        </p>
      ))}
    </div>
    <div className="heart-overlay">
      <i className="bi bi-heart-fill"></i>
    </div>
  </div>
);

const festiveEvents = [
  {
    title: "",
    location: "Karibu “Multi-Cuisine Dining”",
    imageUrl: "/valentines_day/multi-cuisine_dining.jpg",
  },
];

const OffersGoa = () => {
  const packages = [
    {
      title: 'Karibu “Indian” (Poolside)',
      price: 'INR 7999 AI (Per Couple)',
      inclusions: [
        "Candle Light table setup.",
        "Exclusively curated 5 course Indian Set Menu",
        "Choice of either Vegetarian or Non-Vegetarian Menu.",
        "Love Cake gesture of celebration",
        "Chocolates Box and Rose as, souvenir.",
        "Instant Photo with Frames",
      ],
    },
  ];

  return (
    <>
      <style>
        {`

        h5 {
            color: #913065;
        }

          /* Base card styles */
          .package-card {
            background-color: #fff;
            color: #333;
            // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 2px 4px rgba(230, 57, 70, 0.6);
            border-radius: 10px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          /* Hover effects for card */
          .package-card:hover {
            background-color: #e63946;
            color: #fff;
            box-shadow: 0 6px 12px rgba(230, 57, 70, 0.6);
          }

          /* Heart icon styles */
          .heart-icon {
            color: #e63946;
            font-size: 1.2rem;
            transition: transform 0.3s ease, color 0.3s ease;
          }

          .package-card:hover .heart-icon {
            color: #fff;
          }

          /* Text hover color */
          .package-card:hover h5,
          .package-card:hover p {
            color: #fff;
          }

          /* Bottom right heart overlay */
          .heart-overlay {
            position: absolute;
            bottom: 0px;
            right: 0px;
            // width: 100px;
            // height: 100px;
            background-color: transparent;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            opacity: 0;
          }

          .heart-overlay i {
            // font-size: 2.5rem;
            color: #fff;
                height: 100px;
                width: 100px;
                font-size: 100px;
          }

          /* Show the heart overlay on hover */
          .package-card:hover .heart-overlay {
            opacity: 1;
            bottom: -1px;
            right: -1px;
          }

          @media(max-width:767px) {
            .heart-overlay i {
            // font-size: 2.5rem;
            color: #fff;
                height: 40px;
                width: 40px;
                font-size: 40px;
            }
          }

        `}
      </style>
      <Container fluid className="p-lg-0 p-2">
        <Container>
        <Row className="gy-4">
            {festiveEvents.map((event, index) => (
              <Col
                key={index}
                xs={12}
                md={6}
                lg={6}
                className={index === 1 ? "mx-auto" : ""}
              >

                <Image
                  src={event.imageUrl}
                  alt={event.location}
                  width={500}
                  height={300}
                  className="img-fluid d-md-none d-flex"
                />
                {/* <h5 className="mt-2 fw-bold d-md-none d-flex">{event.location}</h5> */}
                <Package
                  title={packages[index]?.title}
                  price={packages[index]?.price}
                  inclusions={packages[index]?.inclusions}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};




export default OffersGoa;
