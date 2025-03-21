"use client";
import React, { useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { RotatingLines } from "react-loader-spinner";

import configData from "../../config";
import countries from "../ContactUsComponents/CountyList";

const EventsContactUsWordpressForm = () => {
  const [post, setPost] = useState(null);

  const [yourName, setName] = useState(null);
  const [yourEmail, setEmail] = useState(null);
  const [yourSubject, setSubject] = useState(null);
  const [yourMessage, setMessage] = useState(null);
  const [yourPhone, setPhone] = useState(null);
  const [yourCountry, setCountry] = useState(null);
  const [yourPlace, setPlace] = useState(null);
  const [eventStartDate, setStartDate] = useState("");
  const [eventEndDate, setEndDate] = useState("");
  const [yourPurpose, setPurpose] = useState("");

  const [spinner, setSpinner] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errrname, setErrName] = useState(null);
  const [errremail, setErrEmail] = useState(null);
  const [errrphone, setErrPhone] = useState(null);
  const [errrcountry, setErrCountry] = useState(null);
  const [errrsubject, setErrSubject] = useState(null);
  const [errrhotel, setErrHotel] = useState(null);
  const [errrpurpose, setErrPurpose] = useState(null);

  const [errrstartdate, setErrStartDate] = useState(null);
  const [errrenddate, setErrEndDate] = useState(null);

  const [success, setSuccess] = useState(true);
  const [error, setError] = useState(false);

  const [yourBookingStartDate, setBookingStartDate] = useState(
    getTodayDateString()
  );
  const [yourBookingEndDate, setBookingEndDate] = useState(
    getTodayDateString()
  );

  const siteUrl = configData.apiUrl;

  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
  };

  function getTodayDateString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  function createPost() {
    setSpinner(true);
    axios
      .post(
        `${siteUrl}wp-json/contact-form-7/v1/contact-forms/7338/feedback`,
        {
          "your-name": { yourName },
          "your-phone": { yourPhone },
          "your-email": { yourEmail },
          "your-place": { yourPlace },
          "your-country": { yourCountry },
          "your-subject": { yourSubject },
          purpose: { yourPurpose },
          "event-start-date": { eventStartDate },
          "event-end-date": { eventEndDate },
          "your-message": { yourMessage },
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setPost(response.data.message);
        // setErrMessage(response.data['invalid_fields'][1]['message']);
        const msg = response.data.status;
        // console.log(response.data);
        if (msg == "mail_sent") {
          setLoading(true);
          setSpinner(false);
          setSuccess(false);
          setError(false);
        } else {
          setErrName("Please Enter Your Name.");
          setErrEmail("Please fill out this field.");
          setErrSubject("Please fill out this field.");
          setErrCountry("Please select a Country");
          setErrHotel("Please select a Hotel");
          setErrPhone("Please fill out this field.");
          setErrStartDate("Please fill out this field.");
          setErrEndDate("Please fill out this field.");
          setErrPurpose("Please Select a Purpose.");
          setSpinner(false);
          //setLoading(true);
          setError(true);
        }
        // console.log(response.data)
      });
  }

  return (
    <Col className="p-0 w-100">
      <style>
        {`
                    h1.reg-success.mt-4 {
                        text-align: center;
                        color: purple;
                    }
                    `}
      </style>
      <Col className="">
        {success && (
          <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
            <Row className="d-flex flex-lg-row flex-column gap-lg-0 flex-wrap gap-3">
              <Col md={4} className="py-md-4">
                <label className="events-form">Full Name</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="yourName"
                  name="yourName"
                  placeholder="Full Name"
                  value={yourName}
                  onChange={(event) => setName(event.target.value)}
                />
                {!yourName && <span className="r_error">{errrname}</span>}
              </Col>

              <Col md={4} className="py-md-4">
                <label className="events-form">Phone no</label>
                <input
                  required
                  type="tel"
                  pattern="^[0-9+\s()-]*$" // Allow digits, plus sign, space, hyphen, and parentheses
                  className="form-control"
                  id="yourPhone"
                  name="yourPhone"
                  placeholder="Phone no"
                  value={yourPhone}
                  onChange={(event) => setPhone(event.target.value)}
                />
                {!yourPhone && <span className="r_error">{errrphone}</span>}
                {yourPhone && !/^[0-9+\s()-]*$/.test(yourPhone) && (
                  <span className="r_error">
                    Please enter a valid phone number
                  </span>
                )}
              </Col>

              <Col md={4} className="py-md-4">
                <label className="events-form">Email id</label>
                <input
                  required
                  type="email"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  className="form-control"
                  id="yourEmail"
                  name="yourEmail"
                  placeholder="Email"
                  value={yourEmail}
                  onChange={(event) => setEmail(event.target.value)}
                  onBlur={() => setError(true)} // Set error to true when the input is blurred (focus is lost)
                />
                {((yourEmail &&
                  !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                    yourEmail
                  )) ||
                  (errremail && !yourEmail)) && (
                  <span className="r_error">
                    Please enter a valid email address
                  </span>
                )}
              </Col>

              <Col md={4} className="">
                <label className="events-form">Hotel Location</label>
                <div className="custom-select">
                  <select
                    required
                    className="form-control"
                    id="yourPlace"
                    name="yourPlace"
                    value={yourPlace}
                    onChange={(e) => setPlace(e.target.value)}
                  >
                    <option value="" disable>
                      Hotel Name
                    </option>
                    <option value="whitefield">
                      The Zuri Whitefield, Bengaluru
                    </option>
                    <option value="goa">
                      The Zuri White Sands, Goa Resort & Casino
                    </option>
                    <option value="kerala">The Zuri Kumarakom, Kerala</option>
                  </select>
                  <div className="select-icon">&#9660;</div>
                </div>
                {!yourPlace && <span className="r_error">{errrhotel}</span>}
              </Col>

              <Col md={4}>
                <label className="events-form">Country</label>
                <div className="custom-select">
                  <select
                    required
                    className="form-control"
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
                  <div className="select-icon">&#9660;</div>
                </div>
                {!yourCountry && <span className="r_error">{errrcountry}</span>}
              </Col>

              <Col md={4}>
                <label className="events-form">State</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="yourSubject"
                  name="yourSubject"
                  placeholder="State"
                  value={yourSubject}
                  onChange={(event) => setSubject(event.target.value)}
                />
                {!yourSubject && <span className="r_error">{errrsubject}</span>}
              </Col>

              <Col md={4} className="py-md-4">
                <label className="events-form">Purpose</label>
                <div className="custom-select">
                  <select
                    required
                    className="form-control"
                    id="yourPurpose"
                    name="yourPurpose"
                    value={yourPurpose}
                    onChange={(e) => setPurpose(e.target.value)}
                  >
                    <option value="" disable>
                      Select the purpose
                    </option>
                    <option value="wedding">Wedding</option>
                    <option value="meeting">Meetings</option>
                    <option value="others">Others</option>
                  </select>
                  <div className="select-icon">&#9660;</div>
                </div>
                {!yourPurpose && <span className="r_error">{errrpurpose}</span>}
              </Col>

              <Col md={4} className="py-md-4">
                <label className="events-form">Event Start Date</label>
                <div className="w-100">
                  <input
                    required
                    type="date"
                    id="eventStartDate"
                    name="eventStartDate"
                    value={eventStartDate}
                    className="w-100"
                    onChange={(e) => setStartDate(e.target.value)}
                    min={getTodayDateString()}
                  />
                  {!eventStartDate && (
                    <span className="r_error">{errrstartdate}</span>
                  )}
                </div>
              </Col>

              <Col md={4} className="py-md-4">
                <label className="events-form">Event End Date</label>
                <div className="w-100">
                  <input
                    required
                    type="date"
                    id="eventEndDate"
                    name="eventEndDate"
                    value={eventEndDate}
                    className="w-100"
                    onChange={(e) => setEndDate(e.target.value)}
                    min={getTodayDateString()}
                  />
                  {!eventEndDate && (
                    <span className="r_error">{errrenddate}</span>
                  )}
                </div>
              </Col>

              <Col md={12}>
                <textarea
                  //required
                  rows="4"
                  cols="50"
                  className="form-control w-100"
                  id="yourMessage"
                  name="yourMessage"
                  placeholder=" Feedback/Question"
                  value={yourMessage}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Col>
            </Row>
            {spinner && (
              <div className="spinner-border text-light" role="status" />
            )}

            <button
              type="submit"
              className=" mt-4 px-5 py-2 bg-purple border-0 text-white font14px"
              onClick={createPost}
            >
              Submit
            </button>
          </form>
        )}

        {loading && <h1 className="reg-success mt-4">{post}</h1>}
        {/* {error && <h1 className="reg-error mt-4">{post}</h1>} */}
      </Col>
    </Col>
  );
};

export default EventsContactUsWordpressForm;
