import React from 'react'
import {Switch} from 'react-router-dom'
import PermissionRoute from "../components/Auth/PermissionRoute"
import UserInfo from '../pages/User/Info'
import List from '../pages/List/index'
import Role from '../pages/Manage/Role'


class ContentRoute extends React.Component {
	render() {
		return (
			<Switch>
				<PermissionRoute path='/admin/user' component={UserInfo}/>
				<PermissionRoute path='/admin/list' component={List}/>
				<PermissionRoute path='/admin/role' component={Role}/>
			</Switch>
		)
	}
}

export default ContentRoute
