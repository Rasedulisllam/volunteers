import React from 'react';
import { Col, Form, Row,Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1 className="text-start text-capitalize">
               Add events
            </h1>
            <div className='my-3 p-3 text-start' >
            <form onSubmit={handleSubmit(onSubmit)}>
               <Row md={2} className="py-3" style={{backgroundColor:'#f4f7fc'}}>
                   <Col className='text-start px-3'>
                        <Form.Group className="mb-3" controlId="eventTitle" >
                            <Form.Label>Event title</Form.Label>
                            <Form.Control type="text" placeholder='enter title' {...register("eventTitle", { required: true })} />
                            {errors.eventTitle && <span>This field is required</span>}
                        </Form.Group>
                   </Col>
                   <Col className='text-start px-3'>
                        <Form.Group className="mb-3" controlId="eventDate" >
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control type="text" placeholder='event date' {...register("eventDate", { required: true })} />
                            {errors.eventDate && <span>This field is required</span>}
                        </Form.Group>
                   </Col>
                   <Col className='text-start px-3'>
                        <Form.Group className="mb-3" controlId="deacription" >
                            <Form.Label>Event deacription</Form.Label>
                            <Form.Control
                             as="textarea"
                            placeholder="deacription"
                            style={{ height: '100px' }}
                             {...register("deacription", { required: true })} />
                            {errors.deacription && <span>This field is required</span>}
                        </Form.Group>
                   </Col>
                   <Col className='text-start px-3'>
                        <Form.Group className="mb-3" controlId="image" >
                            <Form.Label>Event image</Form.Label>
                            <Form.Control type="text" {...register("image", { required: true })} />
                            {errors.image && <span>This field is required</span>}
                        </Form.Group>
                   </Col>
                   
               </Row>
                <Button variant='primary' className='px-3 my-3' type="submit">Submit</Button>
            </form>

            </div>

        </div>
    );
};

export default AddEvents;