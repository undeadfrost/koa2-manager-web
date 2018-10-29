import React, {Component} from 'react'
import {Layout} from 'antd'
import BaseMenu from "./BaseMenu"

const {Sider} = Layout

class SiderMenu extends Component {
	render() {
		return (
			<Sider
				breakpoint="lg"
				collapsed={true}
				collapsedWidth="64"
				trigger={null}
				collapsible
				width={256}
				collapsed={this.state.collapsed}
			>
				<div className="logo"/>
				<BaseMenu menusData={this.props.menusData}/>
			</Sider>
		)
	}
}

export default SiderMenu
