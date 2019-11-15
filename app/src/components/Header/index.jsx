import React from 'react';
import './styles.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class Header extends React.Component {

    render() {
        return <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Sport Data Center</Navbar.Brand>
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    }
};

export default Header;