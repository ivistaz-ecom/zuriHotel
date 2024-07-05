"use client";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";

import DomainUrl from "../../../config";

const GallaryKumarkomAlbum = () => {
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
          4862, 4861, 6289, 4859, 4858, 4857, 4856, 4855, 4854, 4853, 4852,
          4851, 4936, 4935, 6290, 4933, 4932, 4931, 4930, 4929, 4928, 4927,
          4926, 4925, 4924, 4923, 4922, 4921, 4920, 4919, 4918, 4917, 4916,
          4915, 4914, 4913, 4912, 4911, 4910, 4909, 4908, 4907, 4906, 4905,
          4904, 4903, 4902, 4901, 4900, 4899, 4898, 4897, 4896, 4895, 4894,
          4893, 4892, 4891, 4890, 4889, 4888, 4887, 4886, 4885, 4884, 4883,
          4882, 4881, 4880, 4879, 4878, 4877, 4876, 4875, 4874, 4873, 4872,
          4871, 4870, 4869, 4868, 4867, 4866, 4865, 4864, 4863,
        ];
      case "Room & Suites":
        return [4902, 4883, 4884, 4878, 4876, 4875, 4877];
      case "Dining":
        return [
          4852, 4933, 4932, 4931, 4930, 4928, 4927, 4925, 4924, 4926, 4922,
          4921, 4923, 4919, 4920, 4895, 4887, 4888, 4885, 4874, 4872,
        ];
      case "Maya spa":
        return [4910, 4909, 4881, 4882];
      case "Event and Wedding":
        return [
          4861, 4859, 4858, 4856, 4855, 4857, 4854, 4936, 4935, 4929, 4914,
          4904, 4896, 4893, 4879, 4860, 4934, 4897, 4880,
        ];
      case "Lifestyle":
        return [
          4862, 4853, 4851, 4918, 4916, 4915, 4917, 4913, 4912, 4914, 4911,
          4906, 4907, 4908, 4903, 4903, 4905, 4901, 4900, 4898, 4899, 4892,
          4889, 4886, 4873, 4870, 4869, 4871, 4867, 4866, 4868, 4864, 4863,
          4865,
        ];
      // Add more cases for additional categories
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
                "Lifestyle",
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
                <i class="bi bi-arrow-left-square"></i>
              </Button>
              <Button className="bg-black border-0" onClick={nextImage}>
                <i class="bi bi-arrow-right-square"></i>
              </Button>
            </Col>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};
export default GallaryKumarkomAlbum;
