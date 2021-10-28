import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MyEvent from '../MyEvent/MyEvent';

const MyEvents = () => {
   const data=[
        {
            key:1,
            name:'this is masf',
            img:'https://i.ibb.co/h8GyDbt/school-Suffiles.png',
            data:'11'
        }
    ]
    return (
        <Container style={{paddingTop:'8rem'}}>
            <Row xs={1} md={2} className="g-5">
                {
                    data.map(event => <MyEvent key={event.key} event={event}></MyEvent>)
                }
            </Row>
        </Container>
    );
};

export default MyEvents;