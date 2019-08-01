import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function(props) {
	const {
		component: Component, // rename "component" to "Component"
		...rest // everything except "component"

	} = props

	// the rest variable === { exact: true, path: "/" }
	// it excludes "component" because we use it manually
	return (
		<Route {...rest} render={() => {
			// get a value saved in our browser's local storage
			if (props.token) {
				return <Component />
			} else {
				return <Redirect to="/" />
			}
		}} />

	)
}