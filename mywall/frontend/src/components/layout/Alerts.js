import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        post: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, alert, post } = this.props;

        if (error !== prevProps.error) {
            if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
            if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
            if (error.msg.post) alert.error(`Post: ${error.msg.post.join()}`);

        }
        if (post !== prevProps.post) {
            if (post.deletePost) alert.success(post.deletePost);
            if (post.addPost) alert.success(post.addPost);
        }

    }

    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = state => ({
    error: state.error,
    posts: state.posts
});

export default connect(mapStateToProps)(withAlert()(Alerts));
