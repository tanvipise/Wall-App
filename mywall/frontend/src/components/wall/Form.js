import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addPost } from '../../actions/wall'


export class Form extends Component {
    state = {
        name: '',
        email: '',
        post: ''
    }

    static propTypes = {
        addPost: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });


    onSubmit = e => {
        e.preventDefault();
        const { name, email, post } = this.state;
        const wall = { name, email, post };
        this.props.addPost(wall);
    };


    render() {
        const { name, email, post } = this.state;
        return (
            <div className="card">
                <h5 className="card-header">Add to your wall</h5>
                <div className="card-body mt-4 mb-4">
                    <p className="card-text"></p>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">

                            <label>Enter your name</label>
                            <input type="text" className="form-control" onChange={this.onChange} name="name" value={name} ></input>

                            <label>Enter your email</label>
                            <input type="email" className="form-control" onChange={this.onChange} name="email" value={email}></input>

                            <label>Write something here....</label>
                            <textarea className="form-control" rows="5" id="mypost" onChange={this.onChange} name="post" value={post} ></textarea>

                            <button type="submit" className="btn btn-primary">Post</button>
                        </div>

                        <div className="form-group">

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { addPost })(Form);
//null since we do not wan't the posts back, just an action to add posts
