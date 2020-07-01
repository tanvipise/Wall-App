import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

export class Login extends Component {
    state = {
        username: '',

        password: '',

    };

    onSubmit = e => {
        e.preventDefault();
        console.log('submit')

        // const { name, email, post } = this.state;
        // const wall = { name, email, post };
        // this.props.addPost(wall);
        // this.setState({
        //     name: '',
        //     email: '',
        //     post: ''
        // });
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { username, password } = this.state;
        return (
            <div className="card">
                <h5 className="card-header">Login</h5>
                <div className="card-body mt-4 mb-4">
                    <p className="card-text"></p>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <div className="form-group">
                                <label>Enter username: </label>
                                <input type="text" className="form-control" onChange={this.onChange} name="username" value={username} ></input>
                            </div>

                            <div className="form-group">
                                <label>Enter password:</label>
                                <input type="password" className="form-control" onChange={this.onChange} name="password" value={password}></input>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>

                            <div className="form-group">
                                <p>Don't have an account?
                                <Link to="/register">Register</Link>
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

export default Login
