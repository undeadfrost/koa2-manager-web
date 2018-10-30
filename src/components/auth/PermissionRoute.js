import React, {Component} from 'react'
import {Route} from 'react-router'
import {connect} from 'react-redux'
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
		let isAuthenticated = (await fetchRouteAuth({route: pathname}))['isAuth']
		if (!isAuthenticated) {
			console.log('error auth')
			message.error('無權使用，請先登入系統！', 5)
		}
		// 更新视图
		this.setState({isAuthenticated: isAuthenticated, isLoading: false})
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
						: <Redirect to={{pathname: '/admin/login', state: {form: props.location}}}/>
				)}/>
		)
	}
}

export default PermissionRoute
