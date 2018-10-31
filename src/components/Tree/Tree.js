import React, {Component} from 'react'
import {Tree} from 'antd'

const TreeNode = Tree.TreeNode

class Trees extends Component {
	onSelect = (selectedKeys, info) => {
		console.log('selected', selectedKeys, info);
	}
	
	onCheck = (checkedKeys, info) => {
		console.log('onCheck', checkedKeys, info);
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
				onSelect={this.onSelect}
				onCheck={this.onCheck}
				defaultCheckedKeys={['2']}
			>
				{this.renderTreeNodes(menusData)}
			</Tree>
		)
	}
}

export default Trees
