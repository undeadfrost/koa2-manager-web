import React, {Component, Fragment} from 'react'
import {Table, Divider, Modal} from 'antd'
import {connect} from 'react-redux'
import {fetchGetRole} from '../../api/index'
import ActionBar from '../../components/Table/ActionBar'
import Tree from '../../components/Tree/index'
import {fetchSaveRoleResources, fetchGetRoleResources} from '../../api/index'
import PageLoading from '../../components/Loading/PageLoading'

const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: record => ({
		disabled: record.name === 'Disabled User', // Column configuration not to be checked
		name: record.name,
	}),
};

const mapStateToProps = state => ({
	menusData: state.menusData
})

class Role extends Component {
	constructor(props) {
		super(props)
		this.state = {
			roleData: [],
			treeCheckedKeys: [],
			record: {},
			defaultCheckedKeys: [],
			isLoading: true,
			columns: [{
				title: 'ID',
				dataIndex: 'id',
			}, {
				title: '角色名称',
				dataIndex: 'roleName',
			}, {
				title: '操作',
				key: 'action',
				render: (text, record) => (<span>
					<a onClick={() => {
						this.showModal(record)
					}}>配置</a>
					<Divider type="vertical"/>
					<a href="javascript:;">删除</a>
					</span>)
			}]
		}
		
	}
	
	showModal = async (record) => {
		this.setState({
			visible: true,
		});
		const res = await fetchGetRoleResources({roleId: record.id, type: 2})
		this.setState({
			record: record,
			isLoading: false,
			defaultCheckedKeys: res.resources
		})
	}
	
	handleOk = (e) => {
		let params = {
			roleId: this.state.record.id,
			resourceIds: this.state.treeCheckedKeys
		}
		fetchSaveRoleResources(params).then(res => {
			// console.log(res)
			this.setState({
				visible: false,
			});
		})
	}
	
	handleCancel = (e) => {
		// console.log(e);
		this.setState({
			visible: false,
			isLoading: true,
		});
	}
	
	handleTreeCheckedKeys = (treeCheckedKeys) => {
		this.setState({treeCheckedKeys: treeCheckedKeys})
	}
	
	async componentDidMount() {
		await this.getRoleList()
	}
	
	getRoleList = async () => {
		let response = await fetchGetRole()
		let roleData = response.filter(item => (item.key = item.id))
		this.setState({roleData: roleData})
	}
	
	render() {
		const isLoading = this.state.isLoading
		console.log(this.state.defaultCheckedKeys)
		return (
			<Fragment>
				<ActionBar getRoleList={this.getRoleList}/>
				<Table
					rowSelection={rowSelection}
					columns={this.state.columns}
					dataSource={this.state.roleData}/>
				<Modal
					title="Basic Modal"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					{isLoading
						? <PageLoading/>
						: <Tree
							menusData={this.props.menusData}
							defaultCheckedKeys={this.state.defaultCheckedKeys}
							onTreeCheckedKeys={this.handleTreeCheckedKeys}/>}
				</Modal>
			</Fragment>
		)
	}
}

export default connect(mapStateToProps)(Role)
