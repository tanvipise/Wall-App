import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


export class Alerts extends Component {
    static propTypes = {
        errors: PropTypes.object.isRequired,
        posts: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { errors, alert, post } = this.props;

        if (errors !== prevProps.errors) {
            if (errors.msg.name) alert.error(`Name: ${errors.msg.name.join()}`);
            if (errors.msg.email) alert.error(`Email: ${errors.msg.email.join()}`);
            if (errors.msg.post) alert.error(`Post: ${errors.msg.post.join()}`);
            if (errors.msg.non_field_errors) alert.error(errors.msg.non_field_errors.join());
            if (errors.msg.username) alert.error(errors.msg.username.join());

        }
        if (post !== prevProps.post) {
            if (post.deletePost) alert.success(post.deletePost);
            if (post.addPost) alert.success(post.addPost);
            if (post.passwordNotMatch) alert.errors(post.passwordNotMatch);
        }

    }

    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
    posts: state.posts
});

export default connect(mapStateToProps)(withAlert()(Alerts));
