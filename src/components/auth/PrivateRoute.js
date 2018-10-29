import React, {Component} from 'react'
import {Route} from 'react-router'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {notification} from 'antd'
import PageLoading from '../Loading/PageLoading'

const mapStateToProps = state => ({
	isLogin: state.userData.isLogin
})

const mapDispatchToProps = dispatch => ({})

class PrivateRoute extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
			isAuthenticated: false,
		}
	}
	
	checkAuth = async () => {
		let isAuthenticated = false
		const {isLogin} = this.props
		if (isLogin) {
			this.setState({isLoading: true})
		}
		if (!isAuthenticated) {
		
		}
		// 更新视图
		this.setState({isAuthenticated: isAuthenticated, isLoading: false})
	}
	
	render() {
		const {component: Component, ...rest} = this.props
		const {isLoading, isAuthenticated} = this.state
		return (
			isLoading === true
				? <PageLoading/>
				: <Route {...rest} render={props => (
					isAuthenticated
						? <Component {...props}/>
						: <Redirect to={{pathname: '/admin/login', state: {form: props.location}}}/>
				)}/>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
