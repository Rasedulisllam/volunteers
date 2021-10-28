import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter,Switch,Route, NavLink } from 'react-router-dom';
import VolunteerList from '../VolunteerList/VolunteerList';
import logo from '../../images/logos/Group_1329.png'
import userLogo from '../../images/logos/users-alt 1.png'
import addLogo from '../../images/logos/plus_1.png'
import AddEvents from '../AddEvents/AddEvents';


const Admin = () => {

    const active={
        fontWeight: "bold",
    }
    return (
        <Container style={{paddingTop:'7rem',backgroundColor:'#f4f7fc'}} className='h-100'>
            <BrowserRouter>
                <Row>
                    <Col md={3} className='text-start'>
                        <NavLink
                         to='/volunteerList' 
                         activeStyle={active}
                         className='text-black text-decoration-none'>
                         
                            <img width='24px'  style={{marginRight:'.3rem'}} src={userLogo} alt="" />
                            Volunteer Register list
                        </NavLink>
                        <br/>
                        <NavLink 
                        to='/addEvents' 
                        activeStyle={active}
                        className='text-black text-decoration-none my-3 d-block'>
                           <img width='24px'  style={{marginRight:'.3rem'}} src= {addLogo} alt="" />
                            Add Events
                        </NavLink>
                    </Col>
                    <Col md={9} style={{backgroundColor:'white'}}>
                    <Switch>
                        <Route path='/admin'> 
                            <VolunteerList></VolunteerList>
                        </Route>
                        <Route path='/volunteerList'> 
                            <VolunteerList></VolunteerList>
                        </Route>
                        <Route path='/addEvents'> 
                            <AddEvents></AddEvents>
                        </Route>
                    </Switch>
                    </Col>
                </Row>



                
            </BrowserRouter>
        </Container>
    );
};

export default Admin;