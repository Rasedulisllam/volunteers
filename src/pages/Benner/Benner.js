import React from 'react';
import { FormControl, InputGroup,Button } from 'react-bootstrap';
import './Benner.css'

const Benner = () => {
    return (
        <div className='banner'>
            <div className='w-100'>
                <h1 className='text-uppercase fw-bold fs-3'>i grow by helping people in need</h1>
                <InputGroup className="mb-3 w-25 mt-3 mx-auto">
                    <FormControl
                    placeholder="Search.."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
};

export default Benner;