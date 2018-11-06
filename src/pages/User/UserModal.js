import React, {Component} from 'react'
import {Modal, Form} from 'antd'
import InputItem from '../../components/Form/InputItem'
import SwitchItem from '../../components/Form/SwitchItem'
import SelectItem from '../../components/Form/SelectItem'
import ItemMap from '../../components/Form/userMap'
import {fetchGetRole, fetchGetUserInfo} from '../../api/index'

class UserModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			roles: []
		}
	}
	
	handleOk = () => {
		this.props.form.validateFields((err, values) => {
			console.log(values)
		})
	}
	
	handleCancel = () => {
		this.props.setVisible(false)
	}
	
	async componentDidMount() {
		let roleRes = await fetchGetRole()
		this.setState({roles: roleRes})
		let userInfoRes = await fetchGetUserInfo({userId: this.props.userId})
		const userInfo = userInfoRes['userInfo']
		this.props.form.setFieldsValue({
			username: userInfo.username,
			mobile: userInfo.mobile,
			status: userInfo.status,
			role: {key: userInfo.role.id, label: userInfo.role.roleName}
		})
	}
	
	render() {
		const form = this.props.form
		const visible = this.props.visible
		const title = this.props.title
		const selectItem = ItemMap.select
		return (
			<Modal visible={visible}
						 title={title}
						 onOk={this.handleOk}
						 onCancel={this.handleCancel}>
				<Form>
					{
						ItemMap.input.map(item => (
							<InputItem
								key={item.id}
								id={item.id}
								options={item.options}
								form={form}
								formItemParams={item.formItemParams}
								{...item.props}/>
						))
					}
					{
						ItemMap.switch.map(item => (
							<SwitchItem
								key={item.id}
								id={item.id}
								options={item.options}
								form={form}
								formItemParams={item.formItemParams}
								{...item.props}/>
						))
					}
					<SelectItem
						id={selectItem.id}
						options={selectItem.options}
						form={form}
						formItemParams={selectItem.formItemParams}
						selectData={this.state.roles}/>
				</Form>
			</Modal>
		)
	}
}

export default Form.create()(UserModal)
