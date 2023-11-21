import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Trending() {
    return (
        <div>
            <Row>
                <b>Trending</b>
                <hr />
                <Col lg={3} md={3} sm={3} xs={3}>
                    <div className='panel'>
                        <img
                            alt=''
                            src="https://i.postimg.cc/qv5wD3J9/business.jpg"
                            width='100%'
                            height='200'
                        />
                        <p className='text-center panelText' style={{ marginTop: '-40px' }}>Business</p>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={3} xs={3}>
                    <div className='panel'>
                        <img
                            alt=''
                            src="https://i.postimg.cc/fWcYm88r/technology-customer-support1.jpg"
                            width='100%'
                            height='200'
                            style={{ backgroundColor: 'black' }}
                        />
                        <p className='text-center panelText' style={{ marginTop: '-40px' }}>Tech</p>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={3} xs={3}>
                    <div className='panel'>
                        <img
                            alt=''
                            src="https://i.postimg.cc/gjTSv4Dj/sports.jpg"
                            width='100%'
                            height='200'
                        />
                        <p className='text-center panelText' style={{ marginTop: '-40px' }}>Sports</p>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={3} xs={3}>
                    <div className='panel'>
                        <img
                            alt=''
                            src="https://i.postimg.cc/HL6hYpyb/frieden-1600.jpg"
                            width='100%'
                            height='200'
                        />
                        <p className='text-center panelText' style={{ marginTop: '-40px' }}>Politics</p>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default Trending