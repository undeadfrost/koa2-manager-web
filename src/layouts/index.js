import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchGetRoute} from '../api/index'
import {updateMenu} from '../redux/menu/actions'
import PageLoading from '../components/Loading/PageLoading'
import BasicLayout from '../layouts/BasicLayout'

const mapStateToProps = state => ({
	menusData: state.menusData
})

const mapDispatchToProps = dispatch => bindActionCreators({
	updateMenu
}, dispatch)

class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
		}
	}
	
	componentDidMount = async () => {
		const welcome = {
			description: "欢迎页",
			icon: "user",
			id: 0,
			name: "欢迎页",
			orderNum: 0,
			parent: 0,
			route: "/admin/welcome",
			type: 1
		}
		if (this.props.menusData.navList.length === 0) {
			const menusData = await fetchGetRoute()
			menusData.navList.unshift(welcome)
			this.props.updateMenu({...menusData})
		}
		this.setState({isLoading: false})
	}
	
	render() {
		let isLoading = this.state.isLoading
		const navsData = this.props.menusData.navList
		return (
			isLoading
				? <PageLoading/>
				: <BasicLayout navsData={navsData}/>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
