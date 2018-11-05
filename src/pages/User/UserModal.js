import React, {Component, Fragment} from 'react'
import {Modal, Form, Input, Button, Switch} from 'antd'
import InputItem from '../../components/Form/InputItem'
import SwitchItem from '../../components/Form/SwitchItem'
import PageLoading from '../../components/Loading/PageLoading'
import ItemMap from '../../components/Form/userMap'

class UserModal extends Component {
	render() {
		const form = this.props.form
		return (
			<Modal visible={true} title={'新增用户'}>
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
				</Form>
			</Modal>
		)
	}
}

export default Form.create()(UserModal)
