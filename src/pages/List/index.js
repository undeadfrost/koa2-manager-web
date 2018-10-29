import React, {Component} from 'react'
import {fetchGetRoute} from '../../api/index'
import PageLoading from '../../components/Loading/PageLoading'
import BasicLayout from '../../layouts/BasicLayout'

class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
			menusData: []
		}
	}
	
	componentDidMount = async () => {
		const menusData = await fetchGetRoute()
		console.log(menusData)
		this.setState({isLoading: false, menusData: menusData})
	}
	
	render() {
		let isLoading = this.state.isLoading
		return (
			isLoading
				? <PageLoading/>
				: <BasicLayout menusData={this.state.menusData}/>
		)
	}
}

export default List
