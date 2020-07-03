import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { register } from '../../actions/auth'
import { createPosts } from '../../actions/posts'

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        // password 2 used for confirmation
        password2: ''

    };

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    onSubmit = e => {
        e.preventDefault();
        console.log('submit')

        const { username, email, password, password2 } = this.state;
        if (password !== password2) {
            this.props.createPosts({ passwordNotMatch: 'Passwords do not match' });
        }
        else {
            const newUser = {
                username,
                password,
                email
            }
            this.props.register(newUser);
        }
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }

        const { username, email, password, password2 } = this.state;
        return (
            <div className="card">
                <h5 className="card-header">Register as a new user</h5>
                <div className="card-body mt-4 mb-4">
                    <p className="card-text"></p>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <div className="form-group">
                                <label>Enter username: </label>
                                <input type="text" className="form-control" onChange={this.onChange} name="username" value={username} ></input>
                            </div>

                            <div className="form-group">
                                <label>Enter email:</label>
                                <input type="email" className="form-control" onChange={this.onChange} name="email" value={email}></input>
                            </div>

                            <div className="form-group">
                                <label>Enter password:</label>
                                <input type="password" className="form-control" onChange={this.onChange} name="password" value={password}></input>
                            </div>

                            <div className="form-group">
                                <label>Confirm password:</label>
                                <input type="password" className="form-control" onChange={this.onChange} name="password2" value={password2}></input>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>

                            <div className="form-group">
                                <p>Already have an account?
                                   <Link to="/login">Login</Link>
                                </p>
                            </div>
                        </div>

                        <div className="form-group">

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, createPosts })(Register);
