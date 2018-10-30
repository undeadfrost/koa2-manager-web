import React, {Component} from 'react'
import {Layout, Icon} from 'antd'
import BaseMenu from '../components/SiderMenu/BaseMenu'
import styles from './index.module.less'
import ContentRoute from './ContentRoute'

const {Header, Sider, Content} = Layout

class BasicLayout extends Component {
	state = {
		collapsed: false,
	};
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}
	
	render() {
		console.log(this.props)
		return (
			<Layout>
				<Sider
					breakpoint="lg"
					collapsed={true}
					// collapsedWidth="30"
					trigger={null}
					collapsible
					width={256}
					collapsed={this.state.collapsed}
				>
					<div className={styles.logo}/>
					<BaseMenu menusData={this.props.menusData}/>
				</Sider>
				<Layout>
					<Header style={{background: '#fff', padding: 0}}>
						<Icon
							className="trigger"
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>
					</Header>
					<Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
						<ContentRoute/>
					</Content>
				</Layout>
			</Layout>
		)
	}
}

export default BasicLayout
