let map = {}
map.role = [
	{
		id: 'roleName',
		options: {
			rules: [
				{
					required: true,
					message: 'Please enter roleName!',
				},
			],
		},
		formItemParams: {
			label: '角色名'
		},
		props: {
			type: 'text',
			placeholder: '请输入角色名',
		}
	},
	{
		id: 'remark',
		options: {
			rules: [
				{
					message: 'Please enter remark!',
				},
			],
		},
		formItemParams: {
			label: '备注'
		},
		props: {
			type: 'text',
			placeholder: '请输入备注',
		}
	},
]

map.user = {
	input: [
		{
			id: 'username',
			options: {
				rules: [
					{
						required: true,
						message: 'Please input your username!',
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
				rules: [
					{
						required: true,
						message: 'Please input your password!',
					},
				],
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
			id: 'confirm',
			options: {
				rules: [
					{
						required: true,
						message: 'Please confirm your password!',
					},
				],
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
	],
	switch: [
		{
			id: 'status',
			options: {
				valuePropName: 'checked',
				initialValue: false
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
	],
	select: {
		id: 'roles',
		options: {
			rules: [
				{
					required: true,
					message: 'Please select your roleName!',
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
}

export default map
