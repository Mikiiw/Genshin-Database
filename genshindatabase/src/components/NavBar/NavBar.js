import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Genshin Database</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#Tier">Tier List</Nav.Link>
                <Nav.Link href="#Characters">Characters</Nav.Link>
                <NavDropdown title="Region" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Template1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Template2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Template3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

    )
}

export default NavBar;