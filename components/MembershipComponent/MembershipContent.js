"use client";
import React from "react";
import { Container, Col, Image } from "react-bootstrap";
import Link from "next/link";

const MembershipContent = () => {
  return (
    <div>
      <Col className="d-md-flex flex-column d-none mt-5 ">
        <Col className="d-flex flex-md-row mx-auto">
          <Col md={7} className="text-md-end text-center pe-md-4">
            <Col className="d-inline-block">
              <Image
                src="/cl.png"
                alt=""
                fluid
                className="object-fit-none px-md-5 pb-md-3"
              />
              <h6 className="text-center">
                Western Spa & Ayurveda Packages for NR Guests
              </h6>
            </Col>

            <Col className="d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2">
              <Link
                href="/lake-resorts-in-kumarakom/offers/spa-and-ayurveda-packages"
                className="bg-black text-center rounded-circle text-decoration-none "
              >
                <p
                  className="m-0 lh-sm text-white btn-circle"
                  style={{ fontSize: "11px" }}
                >
                  KNOW
                  <br /> MORE
                </p>
              </Link>
            </Col>
          </Col>
          <Col className="d-flex flex-wrap align-content-center ">
            <Image
              src="/kumarkom/offers/Spa_Western_Therapy.jpg"
              alt=""
              roundedCircle
              width={180}
              height={180}
              className="rounded-circle kumarkom-image-overlay"
            />
          </Col>
        </Col>

        {/* Gym Menbership */}
        <Col className="d-flex flex-row mt-5 mx-auto">
          <Col
            className="d-flex flex-wrap align-content-center justify-content-end p-3"
            md={4}
          >
            <Image
              src="/kumarkom/gym_membership.jpg"
              alt=""
              roundedCircle
              width={180}
              height={180}
              className="rounded-circle kumarkom-image-overlay"
            />
          </Col>
          <Col md={7} className="text-md-start text-center pe-md-4">
            <Col className="d-inline-block">
              <Image
                src="/cl.png"
                alt=""
                fluid
                className="object-fit-none px-md-5 pb-md-3"
              />
              <h6 className="text-center">Gym Menbership</h6>
            </Col>
            <Col className="d-flex justify-md-content-center  align-items-md-start p-0 pe-2">
              <Link
                href="/lake-resorts-in-kumarakom/offers/gym-membership/"
                className="bg-black text-center rounded-circle text-decoration-none "
              >
                <p
                  className="m-0 lh-sm text-white btn-circle"
                  style={{ fontSize: "11px" }}
                >
                  KNOW
                  <br /> MORE
                </p>
              </Link>
            </Col>
          </Col>
        </Col>
      </Col>

      {/* Mobile view */}

      <Container className="p-0 d-flex flex-column d-md-none ">
        <Col className="p-2">
          <Col className="d-flex flex-column justify-content-center align-items-center text-center">
            <Col className="d-flex flex-column align-items-center gap-4">
              <Image src="/cl.png" alt="" fluid />
              <h6 className="py-2 text-center">
                Western Spa & Ayurveda Packages for NR Guests
              </h6>
            </Col>
            <Col className="d-flex flex-wrap align-content-center justify-content-end p-3">
              <Image
                src="/kumarkom/offers/Spa_Western_Therapy.jpg"
                alt=""
                roundedCircle
                width={180}
                height={180}
                className="rounded-circle kumarkom-image-overlay"
              />
            </Col>
            <Link
              href="/lake-resorts-in-kumarakom/offers/spa-and-ayurveda-packages"
              className="bg-black text-center rounded-circle text-decoration-none btn-circle"
            >
              <p
                className="m-0 lh-sm text-white btn-circle"
                style={{ fontSize: "11px" }}
              >
                KNOW
                <br /> MORE
              </p>
            </Link>
          </Col>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center text-center py-4">
          <Col className="d-flex flex-column align-items-center gap-4">
            <Image src="/cl.png" alt="" fluid />
            <h6 className="py-2 text-center">Gym Menbership</h6>
          </Col>
          <Col className="d-flex flex-wrap align-content-center justify-content-end p-3">
            <Image
              src="/kumarkom/gym_membership.jpg"
              alt=""
              roundedCircle
              width={180}
              height={180}
              className="rounded-circle kumarkom-image-overlay"
            />
          </Col>
          <p></p>
          <Link
            href="/lake-resorts-in-kumarakom/offers/gym-membership/"
            className="bg-black text-center text-decoration-none btn-circle"
          >
            <p className=" mb-0 font11px lh-sm text-white">
              KNOW
              <br /> MORE
            </p>
          </Link>
        </Col>
      </Container>
    </div>
  );
};

export default MembershipContent;
