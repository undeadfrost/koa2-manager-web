import React, {Component} from 'react'
import {Route, Switch} from 'react-router'
import PrivateRoute from '../components/auth/PrivateRoute'
import Login from './User/Login'
import List from './List/index'

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path='/admin/login' component={Login}/>
				<PrivateRoute path='/admin' excat component={List}/>
			</Switch>
		)
	}
}

export default App
