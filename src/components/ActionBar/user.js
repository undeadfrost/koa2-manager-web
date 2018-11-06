import React, {Component} from 'react'
import {Form, Modal, Input, Button} from 'antd'
import ItemMap from './map'

const Search = Input.Search

class UserActionBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: false,
			confirmLoading: false
		}
	}
	
	showModal = () => {
		this.setState({visible: true})
	}
	
	render() {
		return (
			<div>
				<Search/>
				<Button type="primary" onClick={this.showModal}>
					新增
				</Button>
				<Modal visible={this.state.visible}>
					<Form></Form>
				</Modal>
			</div>
		)
	}
}

export default UserActionBar
