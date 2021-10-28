import React from 'react';
import { Col, Row } from 'react-bootstrap';
import VolunteerItem from '../VolunteerItem/VolunteerItem';
import './Volunteer.css'


const VolunteerList = () => {
    const data=[{
        key:1,
        name:'rasedul',
        email:'rasel@gmail.com',
        date:'11',
        event:'clean water'
    }]
    return (
        <div>
            <h1 className="text-start text-capitalize">
                volunteer register list
            </h1>
            <div className='m-3 bg-white'>
                <table className='d-block py-2'>
                    <th className='table-row px-4 py-2 ' style={{backgroundColor:'#f4f7fc'}}>
                        <td>Name</td>
                        <td>Email</td>
                        <td>date</td>
                        <td>Volunteer list</td>
                        <td>Action</td>
                    </th>
                    {
                        data.map(x => <VolunteerItem></VolunteerItem>)
                    }
                </table>

            </div>
        </div>
    );
};

export default VolunteerList;