import React, {Component, Fragment} from 'react'
import {Table, Divider, Modal} from 'antd'
import {connect} from 'react-redux'
import {fetchGetRole} from '../../api/index'
import ActionBar from '../../components/Table/ActionBar'
import Tree from '../../components/Tree/Tree'

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
						this.showModal()
					}}>配置</a>
					<Divider type="vertical"/>
					<a href="javascript:;">删除</a>
					</span>)
			}]
		}
	}
	
	showModal = () => {
		this.setState({
			visible: true,
		});
	}
	
	handleOk = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	}
	
	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
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
					<Tree menusData={this.props.menusData}/>
				</Modal>
			</Fragment>
		)
	}
}

export default connect(mapStateToProps)(Role)
