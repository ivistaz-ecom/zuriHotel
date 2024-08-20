"use client";
import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import countries from "../ContactUsComponents/CountyList";
import configData from "../../config";
import axios from "axios";

const MayaSpaForm = () => {
  const [post, setPost] = useState(null);
  const [yourName, setName] = useState("");
  const [yourEmail, setEmail] = useState("");
  const [yourMessage, setMessage] = useState("");
  const [yourPhone, setPhone] = useState("");
  const [yourCountry, setCountry] = useState("");
  const [yourBookingStartDate, setBookingStartDate] = useState(getTodayDateString());
  const [yourBookingEndDate, setBookingEndDate] = useState(getTodayDateString());
  const [spinner, setSpinner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(true);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});
  const [disableButton, setDisableButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const siteUrl = configData.apiUrl;

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisableButton(true);
    createPost();
  };

  function getTodayDateString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setMessage("");
    setBookingStartDate(getTodayDateString());
    setBookingEndDate(getTodayDateString());
    setErrors({});
    setDisableButton(false);
  }

  const createPost = () => {
    setSpinner(true);
    axios
      .post(
        `${siteUrl}wp-json/contact-form-7/v1/contact-forms/7617/feedback`,
        {
          yourName,
          yourEmail,
          yourMessage,
          yourPhone,
          yourCountry,
          yourBookingStartDate,
          yourBookingEndDate,
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
          resetForm();
        } else if (msg === "validation_failed") {
          const fieldErrors = {};
          response.data.invalid_fields.forEach((field) => {
            fieldErrors[field.field] = field.message;
          });
          setErrors(fieldErrors);
          setSpinner(false);
          setDisableButton(false);
        } else {
          setSpinner(false);
          setDisableButton(false);
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setSpinner(false);
        setError(true);
        setDisableButton(false);
      });
  };

  const handlePhoneChange = (event) => {
    const input = event.target.value;
    // Remove all non-numeric characters
    const numericInput = input.replace(/\D/g, "");
    setPhone(numericInput);
  };

  return (
    <Container className="p-0 py-5">
      <Col className="">
        <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
          <Row className="d-flex flex-lg-row flex-column gap-lg-0 flex-wrap gap-3">
            {/* Name Field */}
            <Col md={6} className="pb-md-4">
              <input
                type="text"
                className={`form-control ${
                  errors && errors.yourName ? "is-invalid" : ""
                }`}
                id="yourName"
                placeholder="Name"
                value={yourName}
                onChange={(event) => setName(event.target.value)}
              />
              {errors.yourName && (
                <div className="invalid-feedback">{errors.yourName}</div>
              )}
            </Col>

            {/* Phone Field */}
            <Col md={6} className="pb-md-4">
              <input
                type="tel"
                className={`form-control ${
                  errors && errors.yourPhone ? "is-invalid" : ""
                }`}
                id="yourPhone"
                placeholder="Phone"
                value={yourPhone}
                onChange={handlePhoneChange}
              />
              {errors.yourPhone && (
                <div className="invalid-feedback">{errors.yourPhone}</div>
              )}
            </Col>

            {/* Email Field */}
            <Col md={6}>
              <input
                type="email"
                className={`form-control ${
                  errors && errors.yourEmail ? "is-invalid" : ""
                }`}
                id="yourEmail"
                placeholder="Email"
                value={yourEmail}
                onChange={(event) => setEmail(event.target.value)}
              />
              {errors.yourEmail && (
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

            {/* Country Field */}
            <Col md={6} className="pb-md-4">
              <select
                className={`form-control ${
                  errors && errors.yourCountry ? "is-invalid" : ""
                }`}
                id="yourCountry"
                value={yourCountry}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="" disabled>
                  Select Country
                </option>
                {countries.map((country, index) => (
                  <option key={index} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.yourCountry && (
                <div className="invalid-feedback">{errors.yourCountry}</div>
              )}
            </Col>

            <Col md={12} sm={6} className="pb-md-4">
              <p className="mb-0 text-black">Preferred Booking Date:</p>
              <div className="d-flex gap-3">
                <div className="d-flex flex-column gap-2 col-lg-3">
                  <label htmlFor="checkIn" className="text-black-50">
                    From:
                  </label>
                  <input
                    id="checkIn"
                    type="date"
                    value={yourBookingStartDate}
                    onChange={(e) => setBookingStartDate(e.target.value)}
                    min={getTodayDateString()}
                  />
                </div>
                <div className="d-flex flex-column gap-2 col-lg-3">
                  <label htmlFor="checkOut" className="text-black-50">
                    To:
                  </label>
                  <input
                    id="checkOut"
                    type="date"
                    value={yourBookingEndDate}
                    onChange={(e) => setBookingEndDate(e.target.value)}
                    min={getTodayDateString()}
                  />
                </div>
              </div>
            </Col>

            {/* Message Field */}
            <Col md={12}>
              <textarea
                rows="4"
                className={`form-control w-100 ${
                  errors && errors.yourMessage ? "is-invalid" : ""
                }`}
                id="yourMessage"
                placeholder="Message"
                value={yourMessage}
                onChange={(event) => setMessage(event.target.value)}
              />
              {errors.yourMessage && (
                <div className="invalid-feedback">{errors.yourMessage}</div>
              )}
            </Col>
          </Row>

          {/* Spinner and Submit Button */}
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
        {/* Success Message */}
        {loading && <h1 className="reg-success mt-4">{post}</h1>}
      </Col>

      {/* Modal */}
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
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MayaSpaForm;
