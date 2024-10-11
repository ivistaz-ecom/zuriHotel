"use client";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";

import DomainUrl from "../../../config";

const GalleryGoaAlbum = () => {
  const [mediaData, setMediaData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const siteUrl = DomainUrl.wpApiUrl;

  useEffect(() => {
    const fetchMediaData = async () => {
      try {
        const categoryMediaIds = getCategoryMediaIds(selectedCategory);
        const mediaPromises = categoryMediaIds.map(async (id) => {
          const response = await fetch(`${siteUrl}/media/${id}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch media with ID ${id}`);
          }
          return response.json();
        });
        const categoryMediaDetails = await Promise.all(mediaPromises);
        const flattenedMediaDetails = categoryMediaDetails.flat();
        setMediaData(flattenedMediaDetails);
      } catch (error) {
        console.error("Error fetching media data:", error);
      }
    };
    fetchMediaData();
  }, [siteUrl, selectedCategory]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (showModal) {
        if (event.key === "ArrowRight") {
          nextImage();
        } else if (event.key === "ArrowLeft") {
          prevImage();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentIndex, showModal]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mediaData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaData.length - 1 : prevIndex - 1
    );
  };

  const getCategoryMediaIds = (category) => {
    switch (category) {
      case "All":
        return [
          5082, 5081, 5080, 5079, 5078, 5077, 5076, 5075, 5074, 5073, 5072,
          5071, 5070, 5069, 5068, 5067, 4980, 4978, 4979, 4977, 4976, 4974,
          4973, 4972, 4971, 4970, 4969, 4968, 4967, 4966, 4965, 4964, 4963,
          4962, 4961, 4960, 4959, 4958, 5013, 5012, 5011, 5009, 5008, 5007,
          5006, 5010, 5005, 5004, 5003, 5002, 5001, 5000, 4999, 4998, 4997,
          4996, 4995, 4994, 4993, 4992, 4991, 4990, 4989, 4988, 4987, 4986,
          4985, 4984, 4983, 5020, 5019, 5018, 5017, 5016, 5015, 5039, 5038,
          5037, 5036, 5035, 5034, 5033, 5032, 5031, 5030, 5029, 5028, 5027,
          5026, 5041, 5025, 5024, 5023, 5052, 5051, 5050, 5049, 5048, 5047,
          5046, 5045, 5044, 5043, 5042, 5066, 5064, 5063, 5062, 5061, 5059,
          5058, 5056, 5055, 5053,
        ];
      case "Room & Suites":
        return [
          4980, 4979, 4978, 4977, 4976, 4975, 4974, 4973, 4972, 4971, 4970,
          4969, 4968, 4967, 4966, 4965, 4964, 4963, 4962, 4961, 4960, 4959,
          4958,
        ];
      case "Dining":
        return [
          5013, 5012, 5011, 5010, 5009, 5008, 5007, 5006, 5005, 5004, 5003,
          5002, 5001, 5000, 4999, 4998, 4997, 4996, 4995, 4994, 4993, 4992,
          4991, 4990, 4989, 4988, 4987, 4986, 4985, 4984, 4983,
        ];
      case "Maya spa":
        return [5020, 5019, 5018, 5017, 5016, 5015];
      case "Event and Wedding":
        return [
          5039, 5038, 5037, 5036, 5035, 5034, 5033, 5032, 5031, 5030, 5029,
          5028, 5027, 5026, 5025, 5024, 5023,
        ];
      case "Lobby":
        return [5041];
      case "Banquets":
        return [
          5052, 5051, 5050, 5049, 5048, 5047, 5046, 5045, 5044, 5043, 5042,
        ];
      case "Beach Locations":
        return [
          5066, 5065, 5064, 5063, 5062, 5061, 5060, 5059, 5058, 5057, 5056,
          5055, 5054, 5053,
        ];
      case "Property Locations":
        return [
          5082, 5081, 5080, 5079, 5078, 5077, 5076, 5075, 5074, 5073, 5072,
          5071, 5070, 5069, 5068, 5067,
        ];
      default:
        return [];
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={2}>
            <Row className="d-flex flex-column gap-2">
              {[
                "All",
                "Room & Suites",
                "Dining",
                "Maya spa",
                "Event and Wedding",
                "Lobby",
                "Banquets",
                "Beach Locations",
                "Property Locations",
              ].map((category) => (
                <Button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  variant=""
                  className="text-start"
                  style={{
                    color:
                      selectedCategory === category ? "#80027f" : "#6c6e71",
                  }}
                >
                  <h6>{category}</h6>
                </Button>
              ))}
            </Row>
          </Col>
          <Col>
            <Row className="d-flex flex-lg-row flex-column align-items-stretch">
              {/* Display fetched media data */}
              {mediaData.map((media, index) => (
                <div key={media.id} className="p-1 col-lg-4">
                  <div
                    className="card p-0 overflow-hidden"
                    style={{ width: "100%", height: "200px" }}
                  >
                    <Image
                      src={media.source_url}
                      alt={`Image ${media.id}`}
                      className="img-fluid"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleImageClick(index)}
                    />
                  </div>
                </div>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Modal for displaying full-size image */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          className="bg-black bg-opacity-75"
        >
          <Modal.Body className="bg-black border-0 p-0">
            <Image
              src={mediaData[currentIndex]?.source_url}
              alt={`Image ${mediaData[currentIndex]?.id}`}
              className="img-fluid"
            />
          </Modal.Body>
          <Modal.Footer className="border-0 position-absolute w-100 top-50 p-0">
            <Col className="d-flex justify-content-between">
              <Button className="bg-black border-0" onClick={prevImage}>
                <i className="bi bi-arrow-left-square"></i>
              </Button>
              <Button className="bg-black border-0" onClick={nextImage}>
                <i className="bi bi-arrow-right-square"></i>
              </Button>
            </Col>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};
export default GalleryGoaAlbum;
