import React, {Component} from 'react'
import {Table} from 'antd'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {updateRoute} from "../../redux/route/actions";

const mapStateToProps = state => ({routeData: state.routeData})

const mapDispatchToProps = dispatch => bindActionCreators({updateRoute}, dispatch)

class MenuTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			columns: [{
				title: 'ID',
				dataIndex: 'id',
				key: 'id',
			}, {
				title: '名称',
				dataIndex: 'name',
				key: 'name',
			}, {
				title: 'Address',
				dataIndex: 'address',
				width: '30%',
				key: 'address',
			}]
		}
	}
	
	render() {
		const dataSource = this.props.routeData
		return (
			<Table columns={this.state.columns} dataSource={dataSource}/>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuTable)
