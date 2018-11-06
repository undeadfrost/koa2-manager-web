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
]

map.user = [
	{}
]

export default map
