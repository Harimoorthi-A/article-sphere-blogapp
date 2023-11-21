import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Post from '../components/Post';


function Profile() {



    return (
        <div style={{ margin: '5%' }}>
            <hr />
            <div className='container '>
                <Row className='bg-dark text-white p-3'>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <Image
                            src="https://i.postimg.cc/zvbFKhGF/80-T5j3-HF-400x400.jpg"
                            className=''
                            height="200px"
                            roundedCircle
                        />
                    </Col>
                    <Col lg={9} md={9} sm={9} xs={9}>
                        <h3 className=' text-center mt-3 text-warning'>call_me_JD</h3>
                        <Row className='container mt-3 text-center'>
                            <Col lg={4} md={4} sm={4} xs={4}>
                                <p>60<span>Posts</span></p>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4}>
                                <p>446<span>Followers</span></p>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4}>
                                <p>965<span>Followings</span></p>
                            </Col>
                        </Row>
                        <Row className='ms-3'>
                            <h5>Johnny Depp</h5>
                            <p>Even dead I'm hero
                                What you want, won't happen
                                What you need, will definitely happpen....
                            </p>
                        </Row>
                        <Row>
                            <Col lg={4} md={4} sm={4} xs={4} className='text-center'>
                                <Button className='btn btn-dark'>Edit profile</Button>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4} className='text-center'>
                                <Button className='btn btn-dark'>View Archieve</Button>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4} className='text-end'>
                                <i class="fa-solid fa-gear icons" style={{ color: '#000000;' }}></i>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Row className='text-white p-3'>
                    <Button className='btn btn-dark w-50 container text-center'>
                        <i class="fa-solid fa-plus"></i>
                        <b className='ps-4'>Write a Blog</b>
                    </Button>
                </Row>
                <hr />
                <Row className=' text-white p-3'>
                    <Post></Post>
                </Row>

            </div>
        </div>
    )
}

export default Profile