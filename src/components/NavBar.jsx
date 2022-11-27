import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className='container'>
                <Navbar.Brand className='title-navbar' as={Link} to="/" href="#home">e-commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/login" href="#link"><i className="fa-regular fa-user"></i></Nav.Link>
                        <Nav.Link as={Link} to="/purchases" href="#link"><i className="fa-solid fa-box-archive"></i></Nav.Link>
                        <Nav.Link ><i className="fa-solid fa-cart-shopping"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;