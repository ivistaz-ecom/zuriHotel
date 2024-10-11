'use client'

import { useState } from 'react';
import axios from 'axios';
import { Col, Row, Container } from 'react-bootstrap'
import { RotatingLines } from 'react-loader-spinner'

import configData from '../../config'

const ContactForm = () => {
    const [post, setPost] = useState(null);
    const [yourName, setName] = useState(null);
    const [yourEmail, setEmail] = useState(null);
    const [yourSubject, setSubject] = useState(null);
    const [yourMessage, setMessage] = useState(null);
    const [spinner, setSpinner] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disable, setDisabled] = useState(false);
    const [errrname, setErrName] = useState(null);
    const [errremail, setErrEmail] = useState(null);
    const [errrsubject, setErrSubject] = useState(null);
    const [success, setSuccess] = useState(true);
    const [error, setError] = useState(false);

    const siteUrl = configData.apiUrl;

    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
    };

    function createPost() {
        setSpinner(true);
        axios.post(`${siteUrl}wp-json/contact-form-7/v1/contact-forms/7339/feedback`,
            {
                'your-name': { yourName },
                'your-email': { yourEmail },
                'your-subject': { yourSubject },
                'your-message': { yourMessage },
            }, {
            headers: {
                "Content-Type": 'multipart/form-data',
            }
        })
            .then((response) => {
                setPost(response.data.message);
                // setErrMessage(response.data['invalid_fields'][1]['message']);
                const msg = response.data.status;
                if (msg == 'mail_sent') {
                    setLoading(true);
                    setSpinner(false);
                    setSuccess(false);
                    setError(false);
                }
                else {
                    // setErrName(response.data['invalid_fields'][0]['message']);
                    // setErrEmail(response.data['invalid_fields'][1]['message']);
                    //setErrSubject(response.data['invalid_fields'][2]['message']);
                    setSpinner(false);
                    //setLoading(true);
                    setError(true);
                }
                console.log(response.data)
            });
    }

    return (
        <Container className='p-0 py-5'>

            <Row className='d-flex flex-md-row flex-column'>
                <Col className='' md={7}>

                    {success &&
                        <form
                            onSubmit={handleSubmit}
                            style={{ margin: '20px' }}>
                            <h4 id='' className='pt-3'>
                                Hi! I am
                            </h4>
                            <Col>
                                <input
                                    //required
                                    type='text'
                                    className="form-control border-top-0 border-start-0 border-end-0 rounded-0 border-3"
                                    id="yourName"
                                    name='yourName'
                                    placeholder="eg. Sandy"
                                    value={yourName}
                                    onChange={event => setName(event.target.value)}
                                />
                                <span className="r_error">{errrname}</span>
                            </Col>

                            <Col>
                                <h4 className='pt-3'>Reach Me At</h4>

                                <input
                                    //required
                                    type='email'
                                    className="form-control border-top-0 border-start-0 border-end-0 rounded-0 border-3"
                                    id="yourEmail"
                                    name='yourEmail'
                                    placeholder="eg. test@test.com"
                                    value={yourEmail}
                                    onChange={event => setEmail(event.target.value)}
                                />
                                <span className="r_error">{errremail}</span>
                            </Col>

                            <Col>
                                <h4 className='pt-3'>City</h4>

                                <input
                                    type='text'
                                    className="form-control border-top-0 border-start-0 border-end-0 rounded-0 border-3"
                                    id="yourSubject"
                                    name='yourSubject'
                                    placeholder="eg. Bengaluru"
                                    value={yourSubject}
                                    onChange={event => setSubject(event.target.value)}
                                />
                                <span className="r_error">{errrsubject}</span>
                            </Col>

                            <Col>
                                <h4 className='pt-3'>My Message</h4>
                                <textarea
                                    //required
                                    rows="4"
                                    cols="50"
                                    className="form-control border-top-0 border-start-0 border-end-0 rounded-0 border-3"
                                    id="yourMessage"
                                    name='yourMessage'
                                    placeholder=" Message"
                                    value={yourMessage}
                                    onChange={event => setMessage(event.target.value)}
                                />
                            </Col>
                            {spinner && <div className="spinner-border text-light" role="status" />}

                            <button type='submit' className='btn btn-primary register ' onClick={createPost}>Submit</button>
                        </form>
                    }

                    {loading && <h1 className="reg-success mt-4">{post}</h1>}
                    {error && <h1 className="reg-error mt-4">{post}</h1>}
                </Col>
            </Row>
        </Container >
    );
};

export default ContactForm;
