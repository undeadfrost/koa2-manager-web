let map = {}
map.basic = {
	input: [
		{
			id: 'username',
			options: {
				rules: [],
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
				disabled: true,
				placeholder: '用户名',
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
}

map.security = {
	input: [
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
	],
}

export default map
