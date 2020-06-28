import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">My Wall</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">


                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header
