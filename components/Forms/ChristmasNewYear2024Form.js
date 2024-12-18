"use client";
import React, { useState } from "react";
import axios from "axios";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

import configData from "../../config";
import DatePicker from "react-datepicker";

const ChristmasNewYear2024Form = () => {
  const [yourName, setName] = useState("");
  const [yourlName, setlName] = useState("");
  const [yourEmail, setEmail] = useState("");
  const [yourPhone, setPhone] = useState("");
  const [selectHotel, setSelectHotel] = useState("");
  const [eventType, setEventType] = useState("");
  const [candidates, setCandidates] = useState("");
  const [yourMessage, setMessage] = useState("");

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [spinner, setSpinner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [errrname, setErrName] = useState(null);
  const [errrlname, setErrlName] = useState(null);
  const [errremail, setErrEmail] = useState(null);
  const [errrphone, setErrPhone] = useState("");
  const [errrselectHotel, setErrSelectHotel] = useState("");
  const [errrEventType, setErrEventType] = useState("");
  const [errrCandidates, setErrCandidates] = useState("");
  const [errrDate, setErrDate] = useState("");

  const [error, setError] = useState(false);

  const siteUrl = configData.apiUrl;

  const validateForm = () => {
    let valid = true;

    // Reset error messages
    setErrName(null);
    setErrlName(null);
    setErrEmail(null);
    setErrPhone(null);
    setErrSelectHotel(null);
    setErrEventType(null);
    setErrCandidates(null);
    setErrDate(null);

    // Validate each field
    if (!yourName) {
      setErrName("Please enter your first name");
      valid = false;
    }
    if (!yourlName) {
      setErrlName("Please enter your last name");
      valid = false;
    }

    if (
      !yourEmail ||
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(yourEmail)
    ) {
      setErrEmail("Please enter a valid email address");
      valid = false;
    }

    if (!yourPhone || !/^[0-9+\s()-]*$/.test(yourPhone)) {
      setErrPhone("Please enter a valid phone number");
      valid = false;
    }

    if (!selectHotel) {
      setErrSelectHotel("Please select a hotel");
      valid = false;
    }

    if (!candidates) {
      setErrCandidates("Please enter the number of candidates");
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      createPost();
    }
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    // Clear error if both dates are selected
    if (start && end) setErrDate("");
  };

  const resetForm = () => {
    setName("");
    setlName("");
    setEmail("");
    setPhone("");
    setSelectHotel("");
    setEventType("");
    setCandidates("");
    setMessage("");
    setStartDate(null);
    setEndDate(null);
  };

  const createPost = () => {
    setSpinner(true);
    axios
      .post(
        `${siteUrl}wp-json/contact-form-7/v1/contact-forms/7719/feedback`,
        {
          "your-name": yourName,
          "your-lname": yourlName,
          "your-email": yourEmail,
          "your-phone": yourPhone,
          "select-hotel": selectHotel,
          "event-type": eventType,
          "your-todate": startDate,
          "your-fromdate": endDate,
          candidates: candidates,
          "your-message": yourMessage,
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
          setShowModal(true); // Set showModal to true here
          setError(false);
          console.log("form submitted successfully");
        } else {
          setSpinner(false);
          setError(true);
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setSpinner(false);
        setError(true);
      });
  };

  return (
    <>
      <style>
        {`
              .react-datepicker-wrapper {
                    width: 100%;
                }
                select#eventType, select#selectHotel {
                    font-size: 14px;
                }
            `}
      </style>
      <Container className="p-0">
        <Col>
          <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
            <Row className="d-flex flex-lg-row flex-column gap-lg-0 flex-wrap gap-3">
              <Col md={6} className="pt-md-4">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="yourName"
                  name="yourName"
                  placeholder="First Name"
                  value={yourName}
                  onChange={(event) => setName(event.target.value)}
                />
                {!yourName && <span className="r_error">{errrname}</span>}
              </Col>

              <Col md={6} className="pt-md-4">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="yourlName"
                  name="yourlName"
                  placeholder="Last Name"
                  value={yourlName}
                  onChange={(event) => setlName(event.target.value)}
                />
                {!yourlName && <span className="r_error">{errrlname}</span>}
              </Col>

              <Col md={6} className="pt-md-4">
                <input
                  required
                  type="email"
                  className="form-control"
                  id="yourEmail"
                  name="yourEmail"
                  placeholder="Email Address"
                  value={yourEmail}
                  onChange={(event) => setEmail(event.target.value)}
                />
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

              <Col md={6} className="pt-md-4">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="yourPhone"
                  name="yourPhone"
                  placeholder="Mobile Number"
                  value={yourPhone}
                  onChange={(event) => {
                    const value = event.target.value;

                    // Check if the value contains any non-numeric characters
                    if (/[^0-9]/.test(value)) {
                      setErrPhone("Please enter only numbers");
                    } else {
                      setErrPhone(""); // Clear the error if valid
                    }

                    // Update the state with only numbers
                    setPhone(value.replace(/[^0-9]/g, ""));
                  }}
                />
                {errrphone && <span className="r_error">{errrphone}</span>}
              </Col>

              <Col md={6} className="pt-md-4">
                <select
                  required
                  className="form-control"
                  id="eventType"
                  name="eventType"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                >
                  <option value="" disabled>
                    Event Type
                  </option>
                  <option value="christmas">Christmas</option>
                  <option value="newyear">New Year</option>
                </select>
                {errrEventType && (
                  <span className="r_error">{errrEventType}</span>
                )}
              </Col>

              <Col md={6} className="pt-md-4">
                <select
                  required
                  className="form-control"
                  id="selectHotel"
                  name="selectHotel"
                  value={selectHotel}
                  onChange={(e) => setSelectHotel(e.target.value)}
                >
                  <option value="" disabled>
                    Preferred Hotel
                  </option>
                  <option value="whitefield">
                    The Zuri Whitefield, Bengaluru
                  </option>
                  <option value="goa">
                    The Zuri White Sands, Goa Resort & Casino
                  </option>
                  <option value="kerala">The Zuri Kumarakom, Kerala</option>
                </select>
                {errrselectHotel && (
                  <span className="r_error">{errrselectHotel}</span>
                )}
              </Col>

              <Col md={6} className="pt-md-4">
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()} // Disable dates before today
                  placeholderText="What are your preferred check-in and check-out dates?"
                  className="form-control w-100"
                  isClearable // Allow users to clear the selection
                />
              </Col>

              <Col md={6} className="pt-md-4">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="candidates"
                  name="candidates"
                  placeholder="Number of Guests"
                  value={candidates}
                  onChange={(event) => {
                    const value = event.target.value;

                    // Check if the value contains any non-numeric characters
                    if (/[^0-9]/.test(value)) {
                      setErrCandidates("Please enter only numbers");
                    } else {
                      setErrCandidates(""); // Clear the error if valid
                    }

                    // Update the state with only numbers
                    setCandidates(value.replace(/[^0-9]/g, ""));
                  }}
                />
                {errrCandidates && (
                  <span className="r_error">{errrCandidates}</span>
                )}
              </Col>

              <Col md={12} className="pt-md-4">
                <textarea
                  
                  rows="4"
                  cols="50"
                  className="form-control w-100"
                  id="yourMessage"
                  name="yourMessage"
                  placeholder="Additional Requests"
                  value={yourMessage}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Col>

              {/* <Col className="mt-lg-4">
                <p className="text-danger">* All fields are Mandatory</p>
              </Col> */}
            </Row>

            {spinner && (
              <div className="spinner-border text-light" role="status" />
            )}

            <button
              type="submit"
              className=" mt-lg-4 px-5 py-2 bg-purple border-0 text-white font14px"
            >
              Submit
            </button>
          </form>

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
                onClick={() => {
                  setShowModal(false);
                  resetForm();
                }}
                className="bg-purple"
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Container>
    </>
  );
};

export default ChristmasNewYear2024Form;
