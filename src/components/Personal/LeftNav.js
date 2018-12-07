import React, {Component} from 'react'
import {Menu} from 'antd'

class LeftNav extends Component {
	render() {
		return (
			<Menu
				onClick={this.handleClick}
				style={{width: 256}}
				defaultSelectedKeys={['1']}
				mode="inline"
			>
				<Menu.Item key="1">基本设置</Menu.Item>
				<Menu.Item key="2">账户安全</Menu.Item>
			</Menu>
		)
	}
}

export default LeftNav
