import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Modal, message} from "antd"
import PageLoading from "../../components/Loading/PageLoading"
import Tree from "../../components/Tree"
import {fetchGetRoleResources, fetchSaveRoleResources} from '../../api/index'

const mapStateToProps = state => ({
	menusData: state.menusData
})

class MenuModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
			confirmLoading: false,
			defaultCheckedKeys: [],
			checkedKeys: []
		}
	}
	
	handleTreeCheckedKeys = (checkedKeys) => {
		this.setState({checkedKeys: checkedKeys})
	}
	
	handleOk = async () => {
		this.setState({confirmLoading: true})
		let params = {
			roleId: this.props.roleId,
			resourceIds: this.state.checkedKeys
		}
		let saveRoleResourcesRes = await fetchSaveRoleResources(params)
		if (saveRoleResourcesRes.code === 0) {
			message.success(saveRoleResourcesRes['msg'])
			this.props.setVisible(false)
			this.setState({isLoading: true})
		} else {
			message.error(saveRoleResourcesRes['msg'])
		}
		this.setState({confirmLoading: false})
	}
	
	handleCancel = () => {
		this.props.setVisible(false)
	}
	
	async componentWillReceiveProps(nextProps) {
		const roleId = nextProps['roleId']
		if (nextProps.visible) {
			this.setState({isLoading: true})
			const roleResourcesRes = await fetchGetRoleResources({roleId: roleId, type: 2})
			this.setState({
				isLoading: false,
				defaultCheckedKeys: roleResourcesRes['resources']
			})
		}
	}
	
	render() {
		const isLoading = this.state.isLoading
		const title = this.props.title
		const visible = this.props.visible
		const navList = this.props.menusData.navList
		return (
			<Modal
				title={title}
				visible={visible}
				confirmLoading={this.state.confirmLoading}
				onOk={this.handleOk}
				onCancel={this.handleCancel}
			>
				{isLoading
					? <PageLoading/>
					: <Tree
						navList={navList}
						defaultCheckedKeys={this.state.defaultCheckedKeys}
						onTreeCheckedKeys={this.handleTreeCheckedKeys}/>}
			</Modal>
		)
	}
}

export default connect(mapStateToProps)(MenuModal)
