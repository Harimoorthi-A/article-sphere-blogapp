import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ArrowLeft } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from 'firebase/auth';
import Header from '../components/Header';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Auth({ register, setIsAuth }) {

    const isRegisterForm = register ? true : false

    let navigate = useNavigate();

    const signInwithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
            navigate('/home')
        })
    }

    return (
        <div style={{ margin: '' }}>
            <Row className='container w-50 text-center' >
                {/* <Col lg={6} md={6} sm={6} xs={6}>
                    <img
                        alt=''
                        src="https://i.postimg.cc/x1NxqxxF/77055074.png"
                        width={60}
                        height={60}
                        className='d-inline-block align-top'
                    />{' '}
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                    <b className='fa-2x'>Blog Sphere</b>
                </Col> */}
                <Navbar expand="lg" className="text-center w-50" sticky='top'>
                    <Container>
                        <Navbar.Brand href="">
                            <img
                                alt=''
                                src="https://i.postimg.cc/x1NxqxxF/77055074.png"
                                width={60}
                                height={60}
                                className='d-inline-block align-top'
                            />{' '}
                            <b className='fa-2x'>Article Sphere</b>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Row>
            <div className='container mt-5 mb-5  w-50 shadow-lg '
                style={{ backgroundColor: 'black', color: 'white' }}>
                <Row>

                    <Col lg={6} md={6} sm={12} className='p-3'>
                        <img
                            alt=''
                            className='pt-5'
                            src={
                                isRegisterForm ? "https://i.postimg.cc/nrTkGx5P/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cl.png" : "https://i.postimg.cc/3wnxhbsH/images-removebg-preview.png"
                            }
                            width="100%"
                            height="60%"
                        />
                    </Col>

                    <Col lg={6} md={6} sm={12} className='mt-5  p-4'>
                        <p className='text-center'>
                            {
                                isRegisterForm ? "SIgn Up" : "Sign In"
                            }
                        </p>
                        {
                            isRegisterForm ? <InputGroup className="mb-3 mt-4">
                                <Form.Control
                                    placeholder="Enter Your Name"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                            </InputGroup>
                                : ''
                        }
                        <InputGroup className="mb-3 mt-4">
                            <Form.Control
                                placeholder="Enter Your E-mail"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3 mt-4">
                            <Form.Control
                                placeholder="Enter Your Password"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>

                        {
                            isRegisterForm ?
                                <InputGroup className="mb-3 mt-4">
                                    <Form.Control
                                        placeholder="Re-enter Your Password"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                </InputGroup>

                                : ''
                        }

                        {
                            isRegisterForm ?
                                <Button className='btn btn-warning'>
                                    Register
                                </Button> :
                                <>
                                    <Button className='btn btn-light shadow-lg mt-3' onClick={signInwithGoogle}>
                                        <i class="fa-brands fa-google fa-2xs"></i>
                                        Sign in with Google
                                    </Button>
                                    <Button className='btn btn-warning mt-3 ms-5' >
                                        LogIn
                                    </Button>
                                </>

                        }

                        <p className='mt-3'>
                            {
                                isRegisterForm ? 'Already have an Account ?'
                                    : 'New User ?'
                            }
                        </p>

                        <p className='text-warning mt-3'>
                            {
                                isRegisterForm ?
                                    <Link to={'/login'} style={{ textDecoration: 'none' }} className='text-warning'>
                                        LogIn
                                    </Link>
                                    :
                                    <Link to={'/register'} style={{ textDecoration: 'none' }} className='text-warning'>
                                        Register Here
                                    </Link>

                            }
                        </p>
                    </Col>

                </Row>

            </div>

        </div>
    )
}

export default Auth