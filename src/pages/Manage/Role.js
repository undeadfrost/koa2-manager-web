import React, {Component, Fragment} from 'react'
import {Table, Button, Input} from 'antd'
import {fetchGetRole} from '../../api/index'
import ActionBar from '../../components/Table/ActionBar'

const columns = [{
	title: 'ID',
	dataIndex: 'id',
}, {
	title: '角色名称',
	dataIndex: 'roleName',
}, {
	title: '操作',
	key: 'action',
	render: (text, record, index) => (<span>
		<a href="javascript:;">{record.roleName}</a>
		<a href="javascript:;">Delete</a>
	</span>)
}]

const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: record => ({
		disabled: record.name === 'Disabled User', // Column configuration not to be checked
		name: record.name,
	}),
};

class Role extends Component {
	constructor(props) {
		super(props)
		this.state = {
			roleData: []
		}
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
				<ActionBar/>
				<Table
					rowSelection={rowSelection}
					columns={columns}
					dataSource={this.state.roleData}/>
			</Fragment>
		)
	}
}

export default Role
