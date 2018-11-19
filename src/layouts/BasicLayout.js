import React, {Component} from 'react'
import {Layout} from 'antd'
import BaseMenu from '../components/Nav/BaseNav'
import styles from './index.module.less'
import ContentRoute from './ContentRoute'
import HeaderView from "./HeaderView";

const {Sider, Content} = Layout

class BasicLayout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			breakpoint: 'md',
			collapsed: false,
		}
	}
	
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		})
	}
	
	render() {
		return (
			<Layout className={styles.layout}>
				<Sider
					breakpoint={this.state.breakpoint}
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
				>
					<div className={styles.logo}/>
					<BaseMenu navsData={this.props.navsData}/>
				</Sider>
				<Layout>
					<HeaderView collapsed={this.state.collapsed} toggle={this.toggle}/>
					<Content className={styles.content}>
						<ContentRoute/>
					</Content>
				</Layout>
			</Layout>
		)
	}
}

export default BasicLayout
