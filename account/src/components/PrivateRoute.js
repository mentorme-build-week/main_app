import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends Component(props) {
	constructor(props) {
		super();
		this.state = {
		}
	}
	// the rest variable === { exact: true, path: "/" }
	// it excludes "component" because we use it manually
	render() {

		const {
			component: Component, // rename "component" to "Component"
			...rest // everything except "component"
		} = this.props

		if (this.props.token) {
			return <Component />
		} else {
			return <Redirect to="/" />
		}
	}
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

export default(
	connect(
		mapStateToProps,
		null,
	)(PrivateRoute)
)