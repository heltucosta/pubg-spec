import { Table, StackContext, use } from 'sst/constructs'
import { PlayersTableStack } from './PlayersTableStack'

const statsField = {
	placements: [
		{
			teamId: 'string', 
			placement: 'number',
			points: 'number'
		}
	],
	players: [
		{
			playerId: 'string',
			kills: 'number',
			damage: 'number',
			assists: 'number'
		}
	]
}

const TourneysTableStack = ({ stack }: StackContext) => {
	const TourneysTable = new Table(stack, 'Tourneys', {
		fields: {
			tourneyId: 'string',
			name: 'string',
			logo: 'string',
			rounds: 'number',
			format: 'string',
			stats: statsField
		},
		primaryIndex: {
			partitionKey: 'tourneyId'
		}
	})

	return {
		TourneysTable
	}
}

export {
	TourneysTableStack
}


