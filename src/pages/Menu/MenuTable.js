import React, {Component} from 'react'
import {Table, Icon, Tag, Divider, Popconfirm} from 'antd'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {updateMenu} from "../../redux/menu/actions"
import {fetchDelMenu, fetchGetMenu} from "../../api/index"
import {formatRoutes} from '../../common/utils'

const icon = <Icon type="question-circle-o" style={{color: 'red'}}/>

const mapStateToProps = state => ({menusList: state.menusData.menusList})

const mapDispatchToProps = dispatch => bindActionCreators({updateMenu}, dispatch)

class MenuTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			columns: [{
				title: '名称',
				dataIndex: 'name',
			}, {
				title: '图标',
				dataIndex: 'icon',
				render: (text, record, index) => (<Icon type={text}/>)
			}, {
				title: '类型',
				dataIndex: 'type',
				render: (text, record, index) => (text ? <Tag color="green">菜单</Tag> : <Tag color="blue">目录</Tag>)
			}, {
				title: '菜单URL',
				dataIndex: 'route'
			}, {
				title: '权限',
				dataIndex: 'permission'
			}, {
				title: '操作',
				key: 'action',
				width: 120,
				fixed: 'right',
				render: (text, record, index) => (<span>
					<a onClick={() => {
						this.roleRowConfiguration(record)
					}}>配置</a>
					<Divider type="vertical"/>
					<Popconfirm title="是否删除该菜单?" cancelText={'取消'} okText={'确定'}
											icon={icon} onConfirm={this.delConfirm.bind(this, record.id)}>
					<a href="#">删除</a>
					</Popconfirm>
				</span>)
			}]
		}
	}
	
	delConfirm = async (menuId) => {
		const delMenuRes = await fetchDelMenu({menuId: menuId})
		if (delMenuRes.code === 0) {
			let menusRes = await fetchGetMenu()
			this.props.updateMenu({menusList: formatRoutes(menusRes)})
		}
	}
	
	render() {
		const dataSource = this.props.menusList
		return (
			<Table columns={this.state.columns} dataSource={dataSource} scroll={{x: 1000}}/>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuTable)
