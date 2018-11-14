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
		const navList = this.props.navList
		return (
			<Tree
				checkable={true}
				onCheck={this.onCheck}
				defaultCheckedKeys={this.props.defaultCheckedKeys}
			>
				{this.renderTreeNodes(navList)}
			</Tree>
		)
	}
}

export default Trees
