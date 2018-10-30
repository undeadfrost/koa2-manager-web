import React, {Component} from 'react'
import {Icon, Layout, Dropdown, Menu} from "antd"
import styles from './index.module.less'

const {Header} = Layout

const menu = (
	<Menu>
		<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">修改密码</a>
		</Menu.Item>
		<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">退出登录</a>
		</Menu.Item>
	</Menu>
)

class HeaderView extends Component {
	render() {
		const {collapsed, toggle} = this.props
		return (
			<Header className={styles.header}>
				<Icon
					className={styles.icon}
					type={collapsed ? 'menu-unfold' : 'menu-fold'}
					onClick={toggle}
				/>
				<Dropdown overlay={menu} placement="bottomRight" className={styles.dropdown}>
					<a className="ant-dropdown-link" href="#">
						Hover me <Icon type="down"/>
					</a>
				</Dropdown>
			</Header>
		)
	}
}

export default HeaderView
