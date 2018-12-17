import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import UserBasic from '../../../components/Personal/UserBasic'
import UserSecurity from '../../../components/Personal/UserSecurity'

class PersonalContent extends Component {
	render() {
		return (
			<Switch>
				<Route path='/admin/personal/basic' component={UserBasic}/>
				<Route path='/admin/personal/security' component={UserSecurity}/>
			</Switch>
		)
	}
}

export default PersonalContent
