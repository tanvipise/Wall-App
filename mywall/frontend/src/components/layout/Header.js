import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">My Wall</a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <nav className="navbar-brand navbar-dark bg-dark">
                                <Link to="./register">Register </Link>
                            </nav>
                            <nav className="navbar-brand navbar-dark bg-dark">
                                <Link to="./login">Login </Link>
                            </nav>

                        </ul>

                    </div>
                </div>
            </nav>

            // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            //     <Navbar.Brand href="#home">My Wall</Navbar.Brand>
            //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            //     <Navbar.Collapse id="responsive-navbar-nav">
            //         <Nav className="mr-auto"></Nav>

            //         <Nav>
            //             <Nav.Link href="/register">Register</Nav.Link>
            //             <Nav.Link href="/login">Login</Nav.Link>
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>
        )
    }
}

export default Header
