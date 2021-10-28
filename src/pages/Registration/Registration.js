import React from 'react';
import logo from  '../../images/logos/Group_1329.png'
import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';
import './Registration.css'
import useAuth from '../../Hooks/useAuth';

const Registration = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=' register-main' style={{paddingTop:'7rem'}}>
            <img width='260px' src={logo} alt="brand-logo" />
            <div className='ragistration'>
                <h2>Register as a volunteer</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-3'>
                        <Form.Control size="lg" type="text"placeholder="Large text" {...register("name", { required: true })} />
                        {errors.name && <small className='text-danger'>This field is required</small>}
                    </div>
                    <div className='my-3'>
                        <Form.Control size="lg" type='email' {...register("email", { required: true })}  />
                        {errors.email &&  <small className='text-danger'>This field is required</small>}
                    </div>
                    <div className='my-3'>
                        <Form.Control size="lg" type='text' {...register("date", { required: true })}  />
                        {errors.date &&  <small className='text-danger'>This field is required</small>}
                    </div>
                    <div className='my-3'>
                        <Form.Control size="lg" type='email' {...register("desicription", { required: true })}  />
                        {errors.desicription &&  <small className='text-danger'>This field is required</small>}
                    </div>
                    <div className='my-3'>
                        <Form.Control size="lg" type='email' {...register("eventName", { required: true })}  />
                        {errors.eventName &&  <small className='text-danger'>This field is required</small>}
                    </div>
                    <Button type="submit" variant='primary' className='d-block border-0'>Registration</Button>
                    </form>
            </div>
        </div>
    );
};

export default Registration;