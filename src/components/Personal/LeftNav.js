import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu} from 'antd'

class LeftNav extends Component {
	componentWillMount() {
		console.log(this.props)
	}
	
	selectKey = ({key}) => {
		console.log(key)
	}
	
	render() {
		return (
			<Menu
				defaultSelectedKeys={['1']}
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
