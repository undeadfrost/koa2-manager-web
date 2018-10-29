import React from 'react'
import {Route, Switch} from 'react-router-dom'
import UserInfo from '../pages/User/Info'


class ContentRoute extends React.Component {
	render() {
		return (
			<Switch>
				<Route path='/admin/user' component={UserInfo}/>
			</Switch>
		)
	}
}

export default ContentRoute
