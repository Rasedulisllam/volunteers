import React from 'react';
import {  Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Event.css'

const Event = (props) => {
    const history =useHistory();
    const {name,img}=props.event

    const handleClick=()=>{
      history.push('/registration')
    }
    return (
       <Col className='event-col' style={{cursor:'pointer'}} onClick={handleClick}>
           <Card className="border-0 rounded overflow-hidden position-relative my-3">
            <Card.Img variant="top" className='img-fluid h-100' src={img} />
            <Card.Body className='event-title position-absolute bottom-0 left-0 w-100 text-center'>
              <Card.Title className=' d-block text-center '>{name}</Card.Title>
            </Card.Body>
            </Card>
       </Col>
    );
};

export default Event;