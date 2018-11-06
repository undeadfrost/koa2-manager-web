let map = {}
map.input = [
	{
		id: 'username',
		options: {
			rules: [
				{
					required: true,
					message: 'Please enter roleName!',
				},
			],
		},
		formItemParams: {
			label: '用户名',
			labelCol: {
				xs: {span: 24},
				sm: {span: 4},
			},
			wrapperCol: {
				xs: {span: 24},
				sm: {span: 18},
			},
		},
		props: {
			type: 'text',
			placeholder: '用户名',
		}
	},
	{
		id: 'password',
		options: {
			rules: [],
		},
		formItemParams: {
			label: '密码',
			labelCol: {
				xs: {span: 24},
				sm: {span: 4},
			},
			wrapperCol: {
				xs: {span: 24},
				sm: {span: 18},
			},
		},
		props: {
			type: 'password',
			placeholder: '密码',
		}
	},
	{
		id: 'confirmPassword',
		options: {
			rules: [],
		},
		formItemParams: {
			label: '确认密码',
			labelCol: {
				xs: {span: 24},
				sm: {span: 4},
			},
			wrapperCol: {
				xs: {span: 24},
				sm: {span: 18},
			},
		},
		props: {
			type: 'password',
			placeholder: '确认密码',
		}
	},
	{
		id: 'mobile',
		options: {
			rules: [],
		},
		formItemParams: {
			label: '手机号',
			labelCol: {
				xs: {span: 24},
				sm: {span: 4},
			},
			wrapperCol: {
				xs: {span: 24},
				sm: {span: 18},
			},
		},
		props: {
			type: 'tel',
			placeholder: '手机号',
		}
	},
]

map.switch = [
	{
		id: 'status',
		options: {
			valuePropName: 'checked'
		},
		formItemParams: {
			label: '状态',
			labelCol: {span: 4},
			wrapperCol: {span: 14},
		},
		props: {
			checkedChildren: '启用',
			unCheckedChildren: '禁用'
		}
	},
]

map.select = {
	id: 'role',
	options: {
		rules: [
			{
				required: true,
				message: 'Please enter roleName!',
			},
		],
	},
	formItemParams: {
		label: '角色',
		labelCol: {
			xs: {span: 24},
			sm: {span: 4},
		},
		wrapperCol: {
			xs: {span: 24},
			sm: {span: 18},
		},
	},
}

export default map
