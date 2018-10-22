import React, {Component} from 'react'
import {Route, Switch} from 'react-router'
import Login from './User/Login'

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path='/admin/login' component={Login}/>
			</Switch>
		)
	}
}

export default App
