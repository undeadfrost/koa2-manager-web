import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import MenuTable from './MenuTable'
import MenuActionBar from '../../components/ActionBar/MenuActionBar'
import {fetchGetMenu} from '../../api/index'
import {updateMenu} from '../../redux/menu/actions'
import {formatRoutes} from '../../common/utils'

const mapStateToProps = state => ({menusList: state.menusData.menusList})

const mapDispatchToProps = dispatch => bindActionCreators({updateMenu}, dispatch)

class Route extends Component {
	getMenus = async () => {
		let menusRes = await fetchGetMenu()
		this.props.updateMenu({menusList: formatRoutes(menusRes)})
	}
	
	async componentDidMount() {
		await this.getMenus()
	}
	
	render() {
		return (
			<Fragment>
				<MenuActionBar title={'新增菜单'} getMenus={this.getMenus}/>
				<MenuTable/>
			</Fragment>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Route)
