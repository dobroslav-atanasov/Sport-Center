import React from 'react';
import './styles.css';
import Link from '../Link';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class Header extends React.Component {

    render() {
        return <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Sport Data Center</Navbar.Brand>
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Login</Nav.Link>
                    <Nav.Link href="#features">Register</Nav.Link>
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