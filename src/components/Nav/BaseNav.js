import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import {Icon, Menu} from 'antd'

const SubMenu = Menu.SubMenu

class BaseNav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			openKeys: [],
			selectedKeys: []
		}
	}
	
	onClick = ({item, key, keyPath}) => {
		this.setState({selectedKeys: [key]})
	}
	
	// 菜单只能展开一项
	onOpenChange = (openKeys) => {
		if (openKeys.length <= 1) {
			this.setState({openKeys: openKeys});
		} else {
			this.setState({openKeys: [openKeys[openKeys.length - 1]]})
		}
	}
	
	getKeys = () => {
		let pathname = this.props.history.location.pathname
		// 修改进入/admin或/admin/跳转后导航无法高亮问题
		if (pathname === '/admin/' || pathname === '/admin') pathname = '/admin/welcome'
		const navsData = this.props.navsData
		let openKeys = []
		let selectedKeys = []
		for (let i = 0; i < navsData.length; i++) {
			if (pathname.includes(navsData[i].route)) {
				selectedKeys.push(navsData[i].id.toString())
				break
			}
			const submenus = navsData[i].submenus
			if (submenus) {
				for (let j = 0; j < submenus.length; j++) {
					if (submenus[j].route === pathname) {
						openKeys.push(navsData[i].id.toString())
						selectedKeys.push(submenus[j].id.toString())
						break
					}
				}
			}
		}
		this.setState({openKeys: openKeys, selectedKeys: selectedKeys})
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
		let openKeys = []
		if (this.props.navFold) {
			openKeys = this.state.openKeys
		}
		console.log(this.props.navFold)
		return (
			<Menu theme="dark" mode="inline"
						openKeys={openKeys}
						selectedKeys={this.state.selectedKeys}
						onClick={this.onClick}
						onOpenChange={this.onOpenChange}>
				{this.getMenuItems(navsData)}
			</Menu>
		)
	}
}

export default withRouter(BaseNav)
