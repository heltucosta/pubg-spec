import { Table, StackContext, use } from 'sst/constructs'
import { PlayersTableStack } from './PlayersTableStack'

const TeamsTableStack = ({ stack }: StackContext) => {
	const TeamsTable = new Table(stack, 'Teams', {
		fields: {
			teamId: 'string',
			name: 'string',
			logo: 'string',
			picture: 'string',
			players: [
				'string'
			],
			tourneys: [
				'string'
			]
		},
		primaryIndex: {
			partitionKey: 'teamId'
		}
	})

	return {
		TeamsTable
	}
}

export {
	TeamsTableStack
}

