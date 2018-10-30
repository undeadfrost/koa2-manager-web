import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Icon, Menu} from 'antd'

const SubMenu = Menu.SubMenu

class BaseMenu extends Component {
	getMenuItems = (menusData) => {
		if (!menusData) {
			return [];
		}
		return menusData.map(item => (
			this.getSubMenuOrItem(item)
		))
	}
	
	getSubMenuOrItem = (item) => {
		if (item.submenus.length === 0) {
			return (
				<Menu.Item key={item.id}>
					<Icon type="user"/>
					<span>{item.name}</span>
				</Menu.Item>
			)
		} else {
			return (
				<SubMenu key={item.id} title={<span><Icon type="mail"/><span>{item.name}</span></span>}>
					{
						item.submenus.map(item => (
							<Menu.Item key={item.id}>
								<Link to={item.route}>
									<span>{item.name}</span>
								</Link>
							</Menu.Item>
						))
					}
				</SubMenu>
			)
		}
	}
	
	render() {
		const menusData = this.props.menusData
		return (
			<Menu theme="dark" mode="inline">
				{this.getMenuItems(menusData)}
			</Menu>
		)
	}
}

export default BaseMenu
