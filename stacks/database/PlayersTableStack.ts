import { Table, StackContext } from 'sst/constructs'

const PlayersTableStack = ({ stack }: StackContext) => {
	const PlayersTable = new Table(stack, 'Players', {
		fields: {
			userId: 'string',
			name: 'string',
			nickname: 'string',
			avatar: 'string',
			teamId: 'string'
		},
		primaryIndex: {
			partitionKey: 'userId'
		}
	})

	return {
		PlayersTable
	}
}

export {
	PlayersTableStack
}
