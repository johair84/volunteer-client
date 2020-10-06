import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png';
import '../Header/Header.css';



//linear-gradient(to bottom, rgb(0,0,0,0.5), rgba(0, 0, 0, 0.5))
const Header = () => {
    return (
        <div>
            <Container fluid>
            <Navbar expand="lg">
                <Navbar.Brand href="/home">
                    <img src={logo} alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
    
                <Form inline className="ml-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/donaiton">Donation</Nav.Link>
                    <Nav.Link href="/events">Events</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/login"><Button variant="primary">Register</Button></Nav.Link>
                    <Nav.Link><Button variant="dark">Admin</Button></Nav.Link>   
                </Form>
                </Navbar.Collapse>
            </Navbar>
        
               

            </Container>
           
        </div>
    );
};

export default Header;