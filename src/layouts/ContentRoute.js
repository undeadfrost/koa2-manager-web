import React from 'react'
import {Switch} from 'react-router-dom'
import PermissionRoute from "../components/Auth/PermissionRoute"
import UserList from '../pages/User/UserList'
import List from '../pages/List/index'
import Role from '../pages/Role/index'


class ContentRoute extends React.Component {
	render() {
		return (
			<Switch>
				<PermissionRoute path='/admin/user' component={UserList}/>
				<PermissionRoute path='/admin/list' component={List}/>
				<PermissionRoute path='/admin/role' component={Role}/>
			</Switch>
		)
	}
}

export default ContentRoute
