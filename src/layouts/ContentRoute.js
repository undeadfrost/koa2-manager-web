import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import PermissionRoute from "../components/Auth/PermissionRoute"
import Welcome from '../pages/Welcome/index'
import UserList from '../pages/User/UserList'
import Role from '../pages/Role/index'
import Menu from '../pages/Menu/index'
import Personal from '../pages/User/Personal/index'

/**
 * 路由导航
 * <PermissionRoute>组件中子路由需要权限校验，需要添加节点路由nodeRoute，节点路为菜单路由名
 */

class ContentRoute extends React.Component {
	render() {
		return (
			<Switch>
				<Route path='/admin/welcome' exact component={Welcome}/>
				<Route path='/admin' exact render={() => (<Redirect to='/admin/welcome'/>)}/>
				<PermissionRoute path='/admin/user' component={UserList}/>
				<PermissionRoute path='/admin/role' component={Role}/>
				<PermissionRoute path='/admin/menu' component={Menu}/>
				<Route path='/admin/personal' exact render={() => (<Redirect to='/admin/personal/basic'/>)}/>
				<Route path='/admin/personal/:page' component={Personal}/>
			</Switch>
		)
	}
}

export default ContentRoute
