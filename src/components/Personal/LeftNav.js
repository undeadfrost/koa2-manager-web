import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu} from 'antd'

class LeftNav extends Component {
	state = {
		defaultSelectedKeys: [],
		routes: ['basic', 'security']
	}
	
	componentWillMount() {
		const pathname = this.props.location.pathname
		this.state.routes.forEach(route => {
			if (pathname.includes(route)) {
				this.setState({defaultSelectedKeys: [route]})
			}
			
		})
	}
	
	selectKey = ({key}) => {
		console.log(key)
	}
	
	render() {
		return (
			<Menu
				defaultSelectedKeys={this.state.defaultSelectedKeys}
				mode="inline"
				onClick={this.selectKey}>
				<Menu.Item key="basic">
					<Link to='/admin/personal/basic'>基本设置</Link>
				</Menu.Item>
				<Menu.Item key="security">
					<Link to='/admin/personal/security'>安全设置</Link>
				</Menu.Item>
			</Menu>
		)
	}
}

export default withRouter(LeftNav)
