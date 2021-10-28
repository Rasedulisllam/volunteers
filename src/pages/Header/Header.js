import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import logo from '../../images/logos/Group_1329.png'

const Header = () => {
    const history =useHistory();
    const {user,logout}=useAuth()

    // handle register
    const handleRegister=()=>{
        history.push('/register');
    }
    // handle logout
    const handleLogout =()=>{
        logout();
    }
   
    return (
        <Navbar className='bg-transparent mt-3' fixed="top" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img width='134px' src={logo} alt="brand logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav.Link as={Link} to='/home' className='text-dark fw-bold'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/donation' className='text-dark fw-bold'>Donation</Nav.Link>
                    <Nav.Link as={Link} to='/myEvents' className='text-dark fw-bold'>My-Evants</Nav.Link>
                    <Nav.Link as={Link} to='/blogs' className='text-dark fw-bold'>Blogs</Nav.Link>
                    {
                        user?.email?<Button variant="warning" className="me-3 px-4" onClick={handleLogout}>Logout</Button>
                        :<Button variant="primary" className="me-3 px-4" onClick={handleRegister}>Ragister</Button>
                    }
                    <Button variant="secondary" className=" px-4" onClick={()=> history.push('/admin')} >Admin</Button>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
};

export default Header;