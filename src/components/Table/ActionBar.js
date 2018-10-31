import React, {Component} from 'react'
import {Button, Input, Modal, Form} from "antd"
import {fetchAddRole} from '../../api/index'
import InputItem from './InputItem'
import ItemMap from './map'
import styles from './index.module.less'

const Search = Input.Search

class ActionBar extends Component {
	state = {visible: false}
	
	showModal = () => {
		this.setState({
			visible: true,
		});
	}
	
	handleOk = (e) => {
		console.log(e);
		this.props.form.validateFields(async (err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				await fetchAddRole(values)
				await this.props.getRoleList()
			}
		});
		this.setState({
			visible: false,
		});
		this.props.form.resetFields()
	}
	
	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
		this.props.form.resetFields()
	}
	
	render() {
		const form = this.props.form
		return (
			<div className={styles.action_bar}>
				<Search
					className={styles.search}
					placeholder="input search text"
					onSearch={value => console.log(value)}
					enterButton
				/>
				<Button type="primary" onClick={this.showModal}>
					新增
				</Button>
				<Modal
					title="Basic Modal"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<Form onSubmit={this.handleOk}>
						{
							ItemMap.role.map(item => (
								<InputItem
									key={item.id}
									id={item.id}
									options={item.options}
									formItemParams={item.formItemParams}
									form={form}
									{...item.props}/>
							))
						}
					</Form>
				</Modal>
			</div>
		)
	}
}

export default Form.create()(ActionBar)
