import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateRoles} from '../../redux/role/actions'
import {fetchGetRole} from '../../api/index'
import ActionBar from '../../components/ActionBar'
import RoleTable from './RoleTable'
import MenuModal from './MenuModal'

const mapStateToProps = state => ({
	rolesData: state.rolesData
})

const mapDispatchToProps = dispatch => bindActionCreators({
	updateRoles
}, dispatch)

class Role extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuModalVisible: false,
			menuModalTitle: '',
			roleId: ''
		}
	}
	
	setRoles = async (params) => {
		let response = await fetchGetRole(params)
		let rolesData = response.filter(item => (item.key = item.id))
		this.props.updateRoles(rolesData)
	}
	
	setMenuModalData = (menuModalVisible, menuModalTitle, roleId) => {
		this.setState({
			menuModalVisible: menuModalVisible,
			menuModalTitle: menuModalTitle,
			roleId: roleId
		})
	}
	
	setMenuModalVisible = (visible) => {
		console.log(visible)
		this.setState({menuModalVisible: visible})
	}
	
	render() {
		return (
			<Fragment>
				<ActionBar title={'添加角色'} setRoles={this.setRoles}/>
				<RoleTable setMenuModalData={this.setMenuModalData}/>
				<MenuModal
					roleId={this.state.roleId}
					visible={this.state.menuModalVisible}
					setVisible={this.setMenuModalVisible}
					title={this.state.menuModalTitle}/>
			</Fragment>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Role)
