import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return <header>
        <Navbar bg="primary " variant='dark' expand="lg">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>Product sales report</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <LinkContainer to='/customers'>
                            <Nav.Link><i className="fa-sharp fa-solid fa-users"></i> Customers</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/products'>
                            <Nav.Link>Products</Nav.Link>
                        </LinkContainer>
                    </Nav>
                        <Button className="btn btn-secondary btn-lg " variant='dark' block='true'>Sing out</Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
}

export default Header