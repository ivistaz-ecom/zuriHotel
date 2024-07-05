"use client";
import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

import countries from "../ContactUsComponents/CountyList";

import configData from "../../config";
import axios from "axios";

const CareerForm = () => {
  const [post, setPost] = useState(null);
  const [yourName, setName] = useState(null);
  const [yourEmail, setEmail] = useState(null);
  const [yourPosition, setPosition] = useState(null);
  const [yourMessage, setMessage] = useState(null);
  const [yourPhone, setPhone] = useState(null);
  const [yourCountry, setCountry] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disable, setDisabled] = useState(false);
  const [errrname, setErrName] = useState(null);
  const [errremail, setErrEmail] = useState(null);
  const [errrphone, setErrPhone] = useState(null);
  const [errrPosition, setErrPosition] = useState(null);
  const [errrsubject, setErrSubject] = useState(null);
  const [errrcountry, setErrCountry] = useState(null);
  const [success, setSuccess] = useState(true);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});

  const [yourLocations, setLocations] = useState(null);

  const [yourPlace, setPlace] = useState(null);
  const [errrPlace, setErrrPlace] = useState(null);

  const [fileUpdate, setfileUpdate] = useState(null);
  const [errrFile, setErrrFile] = useState(null);

  const [disableButton, setDisableButton] = useState(false);

  const hotels = [
    { name: "The Zuri Whitefield, Bengaluru", id: "whitefield" },
    { name: "The Zuri White Sands, Goa Resort & Casino", id: "goa" },
    { name: "The Zuri Kumarakom, Kerala", id: "kerala" },
  ];

  const siteUrl = configData.apiUrl;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      setErrors({ fileUpdate: "Please select a file." });
    } else if (selectedFile.size > 5 * 1024 * 1024) {
      // 5MB limit
      setErrors({ fileUpdate: "File size exceeds 5MB limit." });
    } else {
      setfileUpdate(selectedFile);
      setErrors({}); // Clear any previous errors
    }
  };

  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    setDisableButton(true); // Disable the button when the form is submitted
    createPost();
  };

  function createPost() {
    if (!fileUpdate) {
      setErrors({ fileUpdate: "Please select a file." });
      setDisableButton(false); // Enable the button if there's an error
      return;
    }
    setSpinner(true);
    axios
      .post(
        `${siteUrl}wp-json/contact-form-7/v1/contact-forms/7340/feedback`,
        {
          yourName: { yourName },
          yourEmail: { yourEmail },
          yourPosition: { yourPosition },
          yourMessage: { yourMessage },
          yourPhone: { yourPhone },
          yourLocations: { yourLocations },
          yourCountry: { yourCountry },
          fileUpdate: { fileUpdate },
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        const msg = response.data.status;
        if (msg === "mail_sent") {
          setLoading(true);
          setSpinner(false);
          setSuccess(false);
          setShowModal(true);
          setError(false);
          setShowForm(false);
          setDisableButton(true);
        } else if (msg === "validation_failed") {
          const fieldErrors = {};
          const { status, invalid_fields } = response.data;
          invalid_fields.forEach((field) => {
            fieldErrors[field.field] = field.message;
          });
          setErrors(fieldErrors);
          setSpinner(false);
          setDisableButton(false); // Enable the button if there's an error
        } else {
          console.log("mail failed");
          setSpinner(false);
          setDisableButton(false); // Enable the button if mail fails
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setSpinner(false);
        setError(true);
        setDisableButton(false); // Enable the button if there's an error
      });
  }

  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(true);

  return (
    <Container className="p-0 py-5">
      <Col className="">
        {success && (
          <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
            <Row className="d-flex flex-lg-row flex-column gap-lg-0 flex-wrap gap-3">
              <Col md={12}>
                <textarea
                  rows="4"
                  cols="50"
                  className={`form-control w-100 ${
                    errors && errors.yourMessage ? "is-invalid" : ""
                  }`}
                  id="yourMessage"
                  name="yourMessage"
                  placeholder="Feedback/Question"
                  value={yourMessage}
                  onChange={(event) => setMessage(event.target.value)}
                />
                {errors && errors.yourMessage && (
                  <div className="invalid-feedback">{errors.yourMessage}</div>
                )}
              </Col>

              <Col md={6} className="py-md-4">
                <input
                  type="text"
                  className={`form-control ${
                    errors && errors.yourPosition ? "is-invalid" : ""
                  }`}
                  id="yourPosition"
                  name="yourPosition"
                  placeholder="Position*(applying for)"
                  value={yourPosition}
                  onChange={(event) => setPosition(event.target.value)}
                />
                {errors && errors.yourPosition && (
                  <div className="invalid-feedback">{errors.yourPosition}</div>
                )}
              </Col>

              <Col md={6} className="py-md-4">
                <input
                  type="email"
                  className={`form-control ${
                    errors && errors.yourEmail ? "is-invalid" : ""
                  }`}
                  id="yourEmail"
                  name="yourEmail"
                  placeholder="Your Email"
                  value={yourEmail}
                  onChange={(event) => setEmail(event.target.value)}
                  onBlur={() => setError(true)}
                />
                {errors && errors.yourEmail && (
                  <div className="invalid-feedback">{errors.yourEmail}</div>
                )}
                {((yourEmail &&
                  !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                    yourEmail
                  )) ||
                  (error && !yourEmail)) && (
                  <span className="r_error">
                    Please enter a valid email address
                  </span>
                )}
              </Col>

              <Col md={6} className="">
                <input
                  type="text"
                  className={`form-control ${
                    errors && errors.yourName ? "is-invalid" : ""
                  }`}
                  id="yourName"
                  name="yourName"
                  placeholder="Your name"
                  value={yourName}
                  onChange={(event) => setName(event.target.value)}
                />
                {errors && errors.yourName && (
                  <div className="invalid-feedback">{errors.yourName}</div>
                )}
              </Col>

              <Col md={6}>
                <input
                  type="tel"
                  className={`form-control ${
                    errors && errors.yourPhone ? "is-invalid" : ""
                  }`}
                  id="yourPhone"
                  name="yourPhone"
                  placeholder="Phone"
                  value={yourPhone}
                  onChange={(event) => setPhone(event.target.value)}
                />
                {errors && errors.yourPhone && (
                  <div className="invalid-feedback">{errors.yourPhone}</div>
                )}
                {yourPhone && !/^[0-9+\s()-]*$/.test(yourPhone) && (
                  <span className="r_error">
                    Please enter a valid phone number
                  </span>
                )}
              </Col>

              <Col md={6} className="py-md-4">
                <select
                  className={`form-control ${
                    errors && errors.yourLocations ? "is-invalid" : ""
                  }`}
                  id="yourLocations"
                  name="yourLocations"
                  value={yourLocations}
                  onChange={(e) => setLocations(e.target.value)}
                >
                  <option value="" disable>
                    Select Place
                  </option>

                  {hotels.map((hotel, index) => (
                    <option key={index} value={hotel.id}>
                      {hotel.name}
                    </option>
                  ))}
                </select>
                {errors && errors.yourLocations && (
                  <div className="invalid-feedback">{errors.yourLocations}</div>
                )}
              </Col>

              <Col md={6} className="py-md-4">
                <select
                  className={`form-control ${
                    errors && errors.yourCountry ? "is-invalid" : ""
                  }`}
                  id="yourCountry"
                  name="yourCountry"
                  value={yourCountry}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="" disable>
                    Select Country
                  </option>
                  {countries.map((country, index) => (
                    <option key={index} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
                {errors && errors.yourCountry && (
                  <div className="invalid-feedback">{errors.yourCountry}</div>
                )}
              </Col>

              <Col>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  id="fileUpdate"
                  name="fileUpdate"
                  className={`form-control ${
                    errors && errors.fileUpdate ? "is-invalid" : ""
                  }`}
                  onChange={handleFileChange}
                />
                {errors && errors.fileUpdate && (
                  <div className="invalid-feedback">{errors.fileUpdate}</div>
                )}
              </Col>
            </Row>
            {spinner && (
              <div className="spinner-border text-light" role="status" />
            )}

            <button
              type="submit"
              className={`mt-4 px-5 py-2 bg-purple border-0 text-white font14px ${
                disableButton ? "disabled" : ""
              }`}
              disabled={disableButton}
            >
              Submit
            </button>
          </form>
        )}

        {loading && <h1 className="reg-success mt-4">{post}</h1>}
      </Col>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your message has been sent successfully.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
            className="bg-purple"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
    </Container>
  );
};

export default CareerForm;
