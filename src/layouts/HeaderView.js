import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Icon, Layout, Dropdown, Menu, message} from "antd"
import {persistor} from '../redux/index'
import {restUser} from '../redux/user/actions'
import styles from './index.module.less'

const {Header} = Layout

const mapStateToProps = state => ({
	userInfo: state.userData.userInfo
})

const mapDispatchToProps = dispatch => bindActionCreators({
	restUser
}, dispatch)

class HeaderView extends Component {
	state = {
		menu: (
			<Menu>
				<Menu.Item>
					<a href="javascript:void(0);" onClick={() => this.clearStore()}>退出登录</a>
				</Menu.Item>
			</Menu>
		)
	}
	
	// 注销登录，清空store
	clearStore = async () => {
		await persistor.purge()
		this.props.restUser({})
		message.success('注销成功，请重新登录')
		this.props.history.push('/admin/login')
	}
	
	render() {
		const {collapsed, toggle} = this.props
		const {username} = this.props.userInfo
		return (
			<Header className={styles.header}>
				<Icon
					className={styles.icon}
					type={collapsed ? 'menu-unfold' : 'menu-fold'}
					onClick={toggle}
				/>
				<Dropdown overlay={this.state.menu} placement="bottomRight" className={styles.dropdown}>
					<span>
						{username}<Icon type="down"/>
					</span>
				</Dropdown>
			</Header>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderView))
