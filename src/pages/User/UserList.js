import React, {Component, Fragment} from 'react'
import {fetchGetUserList} from '../../api/index'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateUser} from '../../redux/user/actions'
import UserTable from './UserTable'
import UserModal from './UserModal'
import UserActionBar from '../../components/ActionBar/user'

const mapStateToProps = state => ({
	userList: state.userData.userList
})

const mapDispatchToProps = dispatch => bindActionCreators({updateUser}, dispatch)

class Info extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userModalVisible: false,
			userModalTitle: '',
			userId: ''
		}
	}
	
	async componentDidMount() {
		let userListRes = await fetchGetUserList()
		let userList = userListRes.filter(item => (item.key = item.id))
		this.props.updateUser({userList: userList})
	}
	
	setUserModalData = (userModalVisible, userModalTitle, userId) => {
		this.setState({
			userModalVisible: userModalVisible,
			userModalTitle: userModalTitle,
			userId: userId
		})
	}
	
	setUserModalVisible = (visible) => {
		console.log(visible)
		this.setState({userModalVisible: visible})
	}
	
	render() {
		return (
			<Fragment>
				<UserActionBar/>
				<UserTable setUserModalData={this.setUserModalData}/>
				{
					this.state.userModalVisible && <UserModal
						visible={this.state.userModalVisible}
						title={this.state.userModalTitle}
						setVisible={this.setUserModalVisible} userId={this.state.userId}/>
				}
			</Fragment>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
