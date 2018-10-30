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
		if (!this.props.menusData) {
			const menusData = await fetchGetRoute()
			this.props.updateMenu(menusData)
		}
		this.setState({isLoading: false})
	}
	
	render() {
		let isLoading = this.state.isLoading
		const menusData = this.props.menusData
		return (
			isLoading
				? <PageLoading/>
				: <BasicLayout menusData={menusData}/>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
