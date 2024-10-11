import Link from "next/link";
import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const GymMenbershipContent = () => {
  return (
    <>
      <Container className="pt-md-5 p-2">
        <Col className="text-center">
          <h6 className="text-decoration-underline text-black">
            Gym Membership
          </h6>
        </Col>

        <Col>
          <div>
            <p className="fs-5 pt-5">Annual Gym Membership Programs:</p>
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th scope="col">
                    <p className="text-custom-grey mb-0"> </p>
                  </th>
                  <th scope="col">
                    <p className="text-custom-grey mb-0">
                      Basic Fitness Package
                    </p>
                  </th>
                  <th scope="col">
                    <p className="text-custom-grey mb-0">
                      Premium Fitness Package
                    </p>
                  </th>
                  <th scope="col">
                    <p className="text-custom-grey mb-0">
                      Ultimate Gym Package
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <p className="text-custom-grey mb-0"> Individual </p>
                  </th>
                  <td>
                    <p className="text-custom-grey mb-0">INR 70,000/- </p>
                  </td>
                  <td>
                    <p className="text-custom-grey mb-0">INR 1,00,000/- </p>
                  </td>
                  <td>
                    <p className="text-custom-grey mb-0">INR 1,20,000/- </p>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">
                    <p className="text-custom-grey mb-0">Couple </p>
                  </th>
                  <td>
                    <p className="text-custom-grey mb-0">INR 1,00,000/- </p>
                  </td>
                  <td>
                    <p className="text-custom-grey mb-0">INR 1,50,000/- </p>
                  </td>
                  <td>
                    <p className="text-custom-grey mb-0">INR 2,00,000/- </p>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">
                    <p className="text-custom-grey mb-0"> Family ** </p>
                  </th>
                  <td>
                    <p className="text-custom-grey mb-0">INR 1,50,000/- </p>
                  </td>
                  <td>
                    <p className="text-custom-grey mb-0">INR 2,00,000/- </p>
                  </td>
                  <td>
                    <p className="text-custom-grey mb-0">INR 2,50,000/- </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <p className="fs-5 pt-5">Membership Benefits:</p>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th scope="col">
                      <p className="text-custom-grey mb-0">
                        Discounts &Inclusions
                      </p>
                    </th>
                    <th scope="col">
                      <p className="text-custom-grey mb-0">
                        Basic Fitness Package
                      </p>
                    </th>
                    <th scope="col">
                      <p className="text-custom-grey mb-0">
                        Premium Fitness Package
                      </p>
                    </th>
                    <th scope="col">
                      <p className="text-custom-grey mb-0">
                        Ultimate Gym Package
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <p className="text-custom-grey mb-0"> Swimming Pool </p>
                    </th>
                    <td>
                      <p className="text-custom-grey mb-0">
                        <FaCheck />
                      </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">
                        <FaCheck />
                      </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">
                        <FaCheck />
                      </p>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope="row">
                      <p className="text-custom-grey mb-0">
                        Wet Area ( Steam/Sauna/Jacuzzi){" "}
                      </p>
                    </th>
                    <td>
                      <p className="text-custom-grey mb-0">
                        <FaCheck className="text-center mt-3" />
                      </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">
                        <FaCheck className="text-center mt-3" />
                      </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">
                        <FaCheck className="text-center mt-3" />
                      </p>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope="row">
                      <p className="text-custom-grey mb-0">
                        {" "}
                        Wellness Consultation{" "}
                      </p>
                    </th>
                    <td>
                      <p className="text-custom-grey mb-0">
                        <FaCheck />
                      </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">
                        <FaCheck />
                      </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">
                        <FaCheck />
                      </p>
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <th scope="row">
                      <p className="text-custom-grey mb-0"> Spa Services </p>
                    </th>
                    <td>
                      <p className="text-custom-grey mb-0">
                        15% Discount & 1 Complimentary 60 mints Massage
                      </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">
                        20% Discount & 2 Complimentary 60 mints Massage
                      </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">
                        25% Discount & 4 Complimentary 60 mints Massage
                      </p>
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <th scope="row">
                      <p className="text-custom-grey mb-0">
                        {" "}
                        Lime Tree Restaurant{" "}
                      </p>
                    </th>
                    <td>
                      <p className="text-custom-grey mb-0">15 % Discount </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">20% Discount </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">20% Discount </p>
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <th scope="row">
                      <p className="text-custom-grey mb-0">
                        {" "}
                        Liquor & Beverage{" "}
                      </p>
                    </th>
                    <td>
                      <p className="text-custom-grey mb-0">15 % Discount </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">20% Discount </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">20% Discount </p>
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <th scope="row">
                      <p className="text-custom-grey mb-0"> Room Bookings </p>
                    </th>
                    <td>
                      <p className="text-custom-grey mb-0"> </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">15% Discount </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">15% Discount </p>
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <th scope="row">
                      <p className="text-custom-grey mb-0"> Guest Passes </p>
                    </th>
                    <td>
                      <p className="text-custom-grey mb-0"> </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">1 Guest pass </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">2 Guest Passes </p>
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <th scope="row">
                      <p className="text-custom-grey mb-0">
                        {" "}
                        Complimentary Gym Trial{" "}
                      </p>
                    </th>
                    <td>
                      <p className="text-custom-grey mb-0"> </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">1 week </p>
                    </td>
                    <td>
                      <p className="text-custom-grey mb-0">2 Weeks </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <p className="py-3">
              The "Zuri Privilege Member" package offers an exclusive membership
              program for individuals seeking relaxation, rejuvenation, and
              wellness. Here's a breakdown of the package details:
            </p>
            <p className="fw-bold">Membership Benefits:</p>
            <p>
              <u>Swimming Pool & Fitness Centre Access:</u> Complimentary access
              to the swimming pool and state-of-the-art fitness center, complete
              with modern equipment and personalized trainers for a balanced
              wellness routine.
            </p>
            <p>
              <u>Unlimited Facility Access:</u> Access to facilities such as
              steam rooms, saunas, and relaxation lounges, providing serene
              spaces for unwinding.
            </p>
            <p>
              <u>Free Wellness Consultations:</u> Unlimited free wellness
              consultations with an Ayurveda doctor, covering topics like
              meditation, healthy living, and stress management.
            </p>
            <p>
              <u>Spa Services:</u> Enjoy a 60-minute signature spa treatment of
              your choice as package benefit & skilled therapists will customize
              each treatment to your specific needs. Members receive an
              exclusive 15%to 25% discount on additional spa treatments and
              services beyond the signature treatment depending on the category.
            </p>
            <p>
              <u>Dining Discounts:</u> Enjoy a 15% to 20% discount on dining at
              the Lime Tree restaurant, offering exquisite cuisine in a stunning
              ambiance. You can also avail a discount of 15% to 20% on liquor
              and beverages.
            </p>
            <p>
              <u>Accommodation Discounts:</u> Enjoy a 15% discount on your total
              accommodation bill
            </p>
            <p>
              <u>Preferred Booking:</u> Priority booking for appointments,
              ensuring preferred time slots for treatments and facilities.
            </p>
            <p>
              <u>Guest Passes:</u> Receive up to two guest passes per year,
              allowing you to share the spa experience with friends or family.
            </p>
          </div>

          <p>
            <u>Membership Duration:</u> 12-month membership commitment.
          </p>
          <div>
            <p className="py-3">
              <u>How to Join:</u>
            </p>
            <p>
              To become a Zuri Privilege Member, visit the spa reception desk or
              call the dedicated membership line at [phone number]. Friendly
              staff will guide you through the enrollment process.
            </p>

            <p className="py-3">
              <u>Limited Availability:</u>
            </p>
            <p>
              Please note that membership is limited to 50 members, ensuring an
              intimate and personalized experience.
            </p>
            <p>
              Indulge in self-care and well-being with the Zuri Privilege Member
              package, offering a tranquil oasis for relaxation and
              rejuvenation. Elevate your lifestyle and discover inner peace
              through this exclusive wellness journey.
            </p>
          </div>
        </Col>
      </Container>
    </>
  );
};

export default GymMenbershipContent;
