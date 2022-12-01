import React, { useState } from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const NavBar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container className='container'>
                    <Navbar.Brand className='title-navbar' as={Link} to="/" href="#home">e-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/login" href="#link"><i className="fa-regular fa-user"></i></Nav.Link>
                            <Nav.Link as={Link} to="/purchases" href="#link"><i className="fa-solid fa-box-archive"></i></Nav.Link>
                            <Nav.Link onClick={handleShow} ><i className="fa-solid fa-cart-shopping"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Cart show={show} handleClose={handleClose}/>
        </>
    );
};

export default NavBar;