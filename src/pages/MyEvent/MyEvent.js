import React from 'react';
import { Button, Col } from 'react-bootstrap';

const MyEvent = (props) => {
    const {img,name,date}=props.event
    return (
        <Col className='d-flex p-4 bg-white rounded'>
            <div className='w-25 me-4'>
                <img className='img-fluid' src={img} alt="" />
            </div>
            <div className='text-start'>
                <h3 className='text-capitalize mb-3'>{name}</h3>
                <Button variant='warning'>Cancel</Button>
            </div>
        </Col>
    );
};

export default MyEvent;