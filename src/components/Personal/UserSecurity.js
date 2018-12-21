import React, {Component} from 'react'
import {Form, Button} from 'antd'
import {fetchPutMySecurity} from '../../api/index'
import ItemMap from './map'
import InputItem from "../Form/InputItem";

const FormItem = Form.Item

class UserSecurity extends Component {
	constructor(props) {
		super(props)
		// 增加密码自定义校验
		ItemMap.security.input[0].options.rules.push({validator: this.validateToNextPassword})
		ItemMap.security.input[1].options.rules.push({validator: this.compareToFirstPassword})
		ItemMap.security.input[1].props['onBlur'] = this.handleConfirmBlur
		this.state = {
			confirmDirty: false,
		}
	}
	
	compareToFirstPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('password')) {
			callback('Two passwords that you enter is inconsistent!');
		} else {
			callback();
		}
	}
	
	validateToNextPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && this.state.confirmDirty) {
			form.validateFields(['confirm'], {force: true});
		}
		callback();
	}
	
	handleConfirmBlur = (e) => {
		const value = e.target.value
		this.setState({confirmDirty: this.state.confirmDirty || !!value})
	}
	
	onSubmit = (e) => {
		e.preventDefault()
		this.props.form.validateFields(async (err, values) => {
			if (!err) {
				console.log(values)
				const putMySecurityRes = await fetchPutMySecurity(values)
				console.log(putMySecurityRes)
			}
		})
	}
	
	render() {
		const form = this.props.form
		return (
			<Form onSubmit={this.onSubmit}>
				{
					ItemMap.security.input.map(item => (
						<InputItem
							key={item.id}
							id={item.id}
							options={item.options}
							formItemParams={item.formItemParams}
							form={form}
							{...item.props}/>
					))
				}
				<FormItem>
					<Button type="primary" htmlType="submit">更新密码</Button>
				</FormItem>
			</Form>
		)
	}
}

export default Form.create()(UserSecurity)
