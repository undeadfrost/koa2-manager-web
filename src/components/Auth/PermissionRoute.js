import React, {Component} from 'react'
import {Route} from 'react-router'
import {Redirect} from 'react-router-dom'
import {message} from 'antd'
import PageLoading from '../Loading/PageLoading'
import {fetchRouteAuth} from '../../api/index'

/**
 * 路由权限核验组件
 */
class PermissionRoute extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
			isAuthenticated: false,
		}
	}
	
	componentDidMount = async () => {
		await this.checkAuth()
	}
	
	componentWillReceiveProps = async (nextProps) => {
		if (nextProps.location.pathname !== this.props.location.pathname) {
			await this.checkAuth()
		}
	}
	
	checkAuth = async () => {
		const pathname = this.props.location.pathname
		let authRes = await fetchRouteAuth({route: pathname})
		if (!authRes['isAuth']) {
			console.log(authRes.msg)
			message.error(authRes.msg, 5)
		}
		// 更新视图
		this.setState({isAuthenticated: authRes['isAuth'], isLoading: false})
	}
	
	render() {
		const {component: Component, ...rest} = this.props
		const {isLoading, isAuthenticated} = this.state
		return (
			isLoading
				? <PageLoading/>
				: <Route {...rest} render={props => (
					isAuthenticated
						? <Component {...props}/>
						: <Redirect to={{pathname: '/admin/welcome', state: {from: props.location}}}/>
				)}/>
		)
	}
}

export default PermissionRoute
