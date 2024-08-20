import Link from "next/link";
import React from "react";
import { Col, Container, Image } from "react-bootstrap";

const MayaSpaContent = () => {
  return (
    <>
      <Container>
        <Col className="text-center mt-3">
          <Image src="/cl.png" alt="" fluid />
          <h6 className="py-2 pt-4 text-center text-black">
            MAYA SPA, THE ZURI KUMARAKOM KERALA RESORT & SPA
          </h6>
        </Col>

        <Col className="text-center">
          <p>
            Maya Spa offers a range of luxurious treatments. Enjoy renowned
            Ayurvedic therapies from Kerala alongside global Western and
            Oriental treatments. Let your worries melt away in a world of
            relaxation and healing.{" "}
          </p>

        </Col>

        <Col className="text-center mt-3">
          <Image src="/cl.png" alt="" fluid />
          <h6 className="py-2 pt-4 text-center text-black">Enquire About Maya Spa Offers and Packages</h6>
        </Col>
      </Container>
    </>
  );
};

export default MayaSpaContent;
