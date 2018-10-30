import React from 'react'
import {Route, Switch} from 'react-router-dom'
import UserInfo from '../pages/User/Info'
import List from '../pages/List/index'
import PermissionRoute from "../components/auth/PermissionRoute";


class ContentRoute extends React.Component {
	render() {
		return (
			<Switch>
				<PermissionRoute path='/admin/user' component={UserInfo}/>
				<PermissionRoute path='/admin/list' component={List}/>
			</Switch>
		)
	}
}

export default ContentRoute
