import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import PermissionRoute from "../components/Auth/PermissionRoute"
import Welcome from '../pages/Welcome/index'
import UserList from '../pages/User/UserList'
import Role from '../pages/Role/index'
import Menu from '../pages/Menu/index'
import Personal from '../pages/User/Personal/index'


class ContentRoute extends React.Component {
	render() {
		return (
			<Switch>
				<Route path='/admin/welcome' component={Welcome}/>
				<Route path='/admin' exact render={() => (<Redirect to='/admin/welcome'/>)}/>
				<PermissionRoute path='/admin/user' component={UserList}/>
				<PermissionRoute path='/admin/role' component={Role}/>
				<PermissionRoute path='/admin/menu' component={Menu}/>
				<Route path='/admin/personal/:page?' component={Personal}/>
			</Switch>
		)
	}
}

export default ContentRoute
