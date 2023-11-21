import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

function Footer() {
  return (
    <div style={{backgroundColor:'black', color:'white'}}>
      <hr></hr>
      <Container>
        <Row className='text-center'>
          <Col lg={3} md={3} sm={3} xs={3}><a href='' style={{textDecoration:'none',color:'white'}}>About</a></Col>
          <Col lg={3} md={3} sm={3} xs={3}><a href='' style={{textDecoration:'none',color:'white'}}>Accessibility</a></Col>
          <Col lg={3} md={3} sm={3} xs={3}><a href='' style={{textDecoration:'none',color:'white'}}>Help Center</a></Col>
          <Col lg={3} md={3} sm={3} xs={3}><a href='' style={{textDecoration:'none',color:'white'}}>Privacy & terms</a></Col>
        </Row>
        <br></br>
        <Row className='text-center'>
          <Col lg={3} md={3} sm={3} xs={3}><a href='' style={{textDecoration:'none',color:'white'}}>Advertising</a></Col>
          <Col lg={3} md={3} sm={3} xs={3}><a href='' style={{textDecoration:'none',color:'white'}}>Business Services</a></Col>
          <Col lg={3} md={3} sm={3} xs={3}><a href='' style={{textDecoration:'none',color:'white'}}>Ad choicesp</a></Col>
          <Col lg={3} md={3} sm={3} xs={3}><a href='' style={{textDecoration:'none',color:'white'}}>More</a></Col>
        </Row>
        <br/>
        <Row className='text-center'>
          <b>All rights reserved <i class="fa-regular fa-copyright"></i> 2023 </b>
        </Row>
      </Container>
      <hr></hr>
    </div>
  )
}

export default Footer