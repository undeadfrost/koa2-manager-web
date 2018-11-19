import React from 'react'
import {Route, Switch} from 'react-router-dom'
import PermissionRoute from "../components/Auth/PermissionRoute"
import Welcome from '../pages/Welcome/index'
import UserList from '../pages/User/UserList'
import List from '../pages/List/index'
import Role from '../pages/Role/index'
import Menu from '../pages/Menu/index'


class ContentRoute extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/admin/welcome' component={Welcome}/>
                <PermissionRoute path='/admin/user' component={UserList}/>
                <PermissionRoute path='/admin/list' component={List}/>
                <PermissionRoute path='/admin/role' component={Role}/>
                <PermissionRoute path='/admin/menu' component={Menu}/>
            </Switch>
        )
    }
}

export default ContentRoute
