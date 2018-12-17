import React, {Component} from 'react'
import {Form} from 'antd'
import InputItem from "../Form/InputItem";

const FormItem = Form.Item

class UserBasic extends Component {
	render() {
		return (
			<Form>
				<h1>基本信息</h1>
			</Form>
		)
	}
}

export default Form.create()(UserBasic)
