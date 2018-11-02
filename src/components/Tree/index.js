import React, {Component} from 'react'
import {Tree} from 'antd'

const TreeNode = Tree.TreeNode

class Trees extends Component {
	onCheck = (checkedKeys, info) => {
		this.props.onTreeCheckedKeys([...info.halfCheckedKeys, ...checkedKeys])
	}
	
	renderTreeNodes = (data) => {
		return data.map(item => {
			if (item.submenus) {
				return (
					<TreeNode title={item.name} key={item.id}>
						{this.renderTreeNodes(item.submenus)}
					</TreeNode>
				)
			} else {
				return (<TreeNode title={item.name} key={item.id}/>)
			}
		})
	}
	
	render() {
		const menusData = this.props.menusData
		return (
			<Tree
				checkable={true}
				onCheck={this.onCheck}
				defaultCheckedKeys={this.props.defaultCheckedKeys}
			>
				{this.renderTreeNodes(menusData)}
			</Tree>
		)
	}
}

export default Trees
