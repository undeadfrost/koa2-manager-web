import React, {Component} from 'react'
import {Form, Input} from 'antd'

const FormItem = Form.Item

class InputItem extends Component {
	render() {
		const {id, options, form, ...customprops} = this.props
		const {getFieldDecorator} = form
		return (
			<FormItem>
				{getFieldDecorator(id, options)(<Input {...customprops}/>)}
			</FormItem>
		)
	}
}

export default InputItem
