import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getWall, deletePost } from '../../actions/wall'

export class Wall extends Component {
    static propTypes = {
        wall: PropTypes.array.isRequired,
        getWall: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired
    };
    componentDidMount() {
        this.props.getWall();
    }

    render() {
        return (
            <Fragment>
                <h2> Posts</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th> Name</th>
                            <th>Email</th>
                            <th>Content</th>
                            {/* for delete button */}
                            <th />

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.wall.map(wall => (
                                <tr key={wall.id}>
                                    <td>{wall.id}</td>
                                    <td>{wall.name}</td>
                                    <td>{wall.email}</td>
                                    <td>{wall.post}</td>
                                    <td><button onClick={this.props.deletePost.bind(this, wall.id)} className="btn btn-danger btn-sm">  DELETE </button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Fragment>

        );
    }
}
// state of redux matches to props of components
const mapStateToProps = state => ({
    // state.wall is reducer and .wall is part of state of that wall
    wall: state.wall.wall
})

export default connect(mapStateToProps, { getWall, deletePost })(Wall);
