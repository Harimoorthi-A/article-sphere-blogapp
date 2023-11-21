import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

function Tags() {
  return (
    <div className='mt-5'>
        <b>Tags</b>
        <hr />
        <Row >
            <Button className='btn btn-warning ms-4 mt-2' style={{width:'15%'}}>Business</Button>
            <Button className='btn btn-warning ms-4 mt-2' style={{width:'15%'}}>Tech</Button>
            <Button className='btn btn-warning ms-4 mt-2' style={{width:'15%'}}>Sports</Button>
            <Button className='btn btn-warning ms-4 mt-2' style={{width:'15%'}}>Politics</Button>
            <Button className='btn btn-warning ms-4 mt-2' style={{width:'15%'}}>Kerala</Button>
            <Button className='btn btn-warning ms-4 mt-2' style={{width:'15%'}}>India</Button>
            <Button className='btn btn-warning ms-4 mt-2' style={{width:'15%'}}>Yamaha</Button>
            <Button className='btn btn-warning ms-4 mt-2' style={{width:'15%'}}>Business</Button>
            <Button className='btn btn-warning ms-4 mt-2' style={{width:'15%'}}>Honda</Button>
            <Button className='btn btn-warning ms-4 mt-2' style={{width:'15%'}}>South Korea</Button>
            <Button className='btn btn-warning ms-4 mt-2' style={{width:'15%'}}>Business</Button>
        </Row>
    </div>
  )
}

export default Tags