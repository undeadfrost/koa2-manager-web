import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import RouteTable from './MenuTable'
import {fetchgetMenu} from '../../api/index'
import {updateRoute} from '../../redux/route/actions'

const mapStateToProps = state => ({routeData: state.routeData})

const mapDispatchToProps = dispatch => bindActionCreators({updateRoute}, dispatch)

class Route extends Component {
	getRoutes = async () => {
		let routesRes = await fetchgetMenu()
		this.props.updateRoute(routesRes)
	}
	
	async componentDidMount() {
		await this.getRoutes()
	}
	
	render() {
		return (
			<Fragment>
				<h1>Route</h1>
				<RouteTable/>
			</Fragment>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Route)
