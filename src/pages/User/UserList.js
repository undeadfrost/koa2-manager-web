import React, {Component, Fragment} from 'react'
import {fetchGetUserList} from '../../api/index'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateUser} from '../../redux/user/actions'
import UserTable from './UserTable'
import UserModal from './UserModal'

const mapStateToProps = state => ({
	userList: state.userData.userList
})

const mapDispatchToProps = dispatch => bindActionCreators({updateUser}, dispatch)

class Info extends Component {
	async componentDidMount() {
		let userListRes = await fetchGetUserList()
		let userList = userListRes.filter(item => (item.key = item.id))
		this.props.updateUser({userList: userList})
	}
	
	render() {
		return (
			<Fragment>
				<UserTable/>
				<UserModal/>
			</Fragment>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
