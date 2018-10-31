import React, {Component} from 'react'
import {Route, Switch} from 'react-router'
import PrivateRoute from '../components/Auth/PrivateRoute'
import Login from './User/Login'
import Layout from '../layouts/index'

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path='/admin/login' exact component={Login}/>
				<PrivateRoute path='/admin' component={Layout}/>
			</Switch>
		)
	}
}

export default App
