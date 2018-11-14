import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import {Icon, Menu} from 'antd'

const SubMenu = Menu.SubMenu

class BaseMenu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			defaultOpenKeys: [],
			defaultSelectedKeys: []
		}
	}
	
	getKeys = () => {
		const pathname = this.props.location.pathname
		const navsData = this.props.navsData
		let defaultOpenKeys = []
		let defaultSelectedKeys = []
		for (let i = 0; i < navsData.length; i++) {
			if (navsData[i].route === pathname) {
				defaultSelectedKeys.push(navsData[i].id.toString())
				break
			}
			const submenus = navsData[i].submenus
			if (submenus) {
				for (let j = 0; j < submenus.length; j++) {
					if (submenus[j].route === pathname) {
						defaultOpenKeys.push(navsData[i].id.toString())
						defaultSelectedKeys.push(submenus[j].id.toString())
						break
					}
				}
			}
		}
		this.setState({defaultOpenKeys: defaultOpenKeys, defaultSelectedKeys: defaultSelectedKeys})
	}
	
	componentWillMount() {
		this.getKeys()
	}
	
	getMenuItems = (menusData) => {
		if (!menusData) {
			return [];
		}
		return menusData.map(item => (
			this.getSubMenuOrItem(item)
		))
	}
	
	getSubMenuOrItem = (item) => {
		if (item.submenus) {
			return (
				<SubMenu key={item.id} title={<span><Icon type={item.icon}/><span>{item.name}</span></span>}>
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
		} else {
			return (
				<Menu.Item key={item.id}>
					<Link to={item.route}>
						<Icon type={item.icon}/>
						<span>{item.name}</span>
					</Link>
				</Menu.Item>
			)
		}
	}
	
	render() {
		const navsData = this.props.navsData
		return (
			<Menu theme="dark" mode="inline"
						defaultOpenKeys={this.state.defaultOpenKeys}
						defaultSelectedKeys={this.state.defaultSelectedKeys}>
				{this.getMenuItems(navsData)}
			</Menu>
		)
	}
}

export default withRouter(BaseMenu)
