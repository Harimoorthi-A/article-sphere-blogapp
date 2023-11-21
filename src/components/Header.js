import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../firebase-config';

function Header() {

    const [isAuth, setIsAuth] = useState(false);

    let navigate = useNavigate();

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false);
            navigate("/")
        });
    };

    return (
        <div>
            <Navbar expand="lg" className="" sticky='top'>
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                            alt=''
                            src="https://i.postimg.cc/x1NxqxxF/77055074.png"
                            width={60}
                            height={60}
                            className='d-inline-block align-top'
                        />{' '}
                        <b className='fa-2x'>Article Sphere</b>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ fontSize: '', border: 'none' }}>
                        <i class="fa-solid fa-braille"></i>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ms-5">
                            <Nav.Link href="" className=''>Home</Nav.Link>
                            <Nav.Link className=''>
                                <Link to={'/createpost'}>
                                    <Button className='btn btn-light' style={{ outline: 'solid 1px' }}>
                                        Add a Post
                                    </Button>

                                </Link>
                            </Nav.Link>

                        </Nav>
                        {
                            isAuth ?
                                <div>
                                    <Nav.Link href="/" className='ps-5'>
                                        <Button className='btn btn-warning'>
                                            login
                                        </Button>
                                    </Nav.Link>
                                </div> :
                                <div>
                                    {/* <NavDropdown className='ps-auto' title="Me" id="basic-nav-dropdown">
                                        <NavDropdown.Item className=''>
                                            <Row className=''>
                                                <Col lg={2} md={2} sm={2} xs={2}>
                                                    <img
                                                        alt=''
                                                        src="https://i.postimg.cc/zvbFKhGF/80-T5j3-HF-400x400.jpg"
                                                        width={20}
                                                        height={20}
                                                        className='d-inline-block align-top rounded'
                                                    />
                                                </Col>
                                                <Col lg={10} md={10} sm={10} xs={10} className=''>
                                                    <b>call_me_JD</b>
                                                </Col>
                                            </Row>
                                            <Row className='mt-3 p-1'>
                                                <Link to={'/profile'}>
                                                    <Button className='btn btn-info'>View Profile</Button>
                                                </Link>
                                            </Row>
                                        </NavDropdown.Item>
                                    </NavDropdown> */}
                                    <Nav.Link href="" className='mt-2'>
                                        <Button className='btn btn-danger' onClick={signUserOut}>
                                            Logout
                                        </Button>
                                    </Nav.Link>

                                </div>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header