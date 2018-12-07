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
			collapsed: false,
			navFold: true
		}
	}
	
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		})
	}
	
	handleResize = (e) => {
		if (e.target.innerWidth <= 1000 && this.state.collapsed === false) {
			this.setState({
				collapsed: true
			})
		}
		if (e.target.innerWidth > 1000 && this.state.collapsed === true) {
			this.setState({
				collapsed: false
			})
		}
		console.log('浏览器窗口大小改变事件', e.target.innerWidth)
	}
	
	componentWillMount() {
		if (document.body.clientWidth <= 1000) {
			this.setState({
				collapsed: true,
				navFold: false
			})
		}
	}
	
	componentDidMount() {
		window.addEventListener('resize', this.handleResize.bind(this))
	}
	
	render() {
		return (
			<Layout className={styles.layout}>
				<Sider
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
				>
					<div className={styles.logo}/>
					<BaseMenu navsData={this.props.navsData} navFold={this.state.navFold}/>
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
