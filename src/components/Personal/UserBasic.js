import React, {Component} from 'react'
import {Form, Button} from 'antd'
import {connect} from 'react-redux'
import {fetchPutMyBasic} from '../../api/index'
import InputItem from "../Form/InputItem";
import ItemMap from './map'

const FormItem = Form.Item

const mapStateToProps = state => ({
	userInfo: state.userData.userInfo
})

class UserBasic extends Component {
	onSubmit = (e) => {
		e.preventDefault()
		this.props.form.validateFields(async (err, values) => {
			if (!err) {
				console.log(values)
				const putMyBasicRes = await fetchPutMyBasic(values)
				console.log(putMyBasicRes)
			}
		})
	}
	
	componentDidMount() {
		const userInfo = this.props.userInfo
		this.props.form.setFieldsValue({
			username: userInfo.username,
			mobile: userInfo.mobile
		})
	}
	
	render() {
		const form = this.props.form
		return (
			<Form onSubmit={this.onSubmit}>
				{
					ItemMap.basic.input.map(item => (
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
					<Button type="primary" htmlType="submit">更新基本信息</Button>
				</FormItem>
			</Form>
		)
	}
}

export default connect(mapStateToProps)(Form.create()(UserBasic))
