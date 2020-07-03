import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <span className="navbar-text mr-3">
                    <strong>
                        {user ? `Welcome ${user.username}` : ""}
                    </strong>
                </span>
                <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light"> Logout </button>

            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <nav className="navbar-brand navbar-dark bg-dark">
                    <Link to="./register">Register </Link>
                </nav>
                <nav className="navbar-brand navbar-dark bg-dark">
                    <Link to="./login">Login </Link>
                </nav>

            </ul>
        );


        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">My Wall</a>
                    </div>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>

        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header)
