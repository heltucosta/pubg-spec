import { Api, StackContext, use} from 'sst/constructs'
import { PlayersTableStack } from './database/PlayersTableStack'
import { TeamsTableStack } from './database/TeamsTableStack'
import {TourneysTableStack} from './database/TourneysTableStack'

const apiHandlersPath = 'packages/functions/src/'

export const ApiStack = ({ stack }: StackContext) => {
	const { PlayersTable } = use(PlayersTableStack)
	const { TeamsTable } = use(TeamsTableStack)
	const { TourneysTable } = use(TourneysTableStack)

	const api = new Api(stack, 'api', {
		defaults: {
			function: {
				bind: [
					PlayersTable,
					TeamsTable,
					TourneysTable
				]
			}
		},
		cors: true,
		routes: {
			'GET /teams': `${apiHandlersPath}teams.get`,
			'POST /teams': `${apiHandlersPath}teams.post`
		}
	})

	stack.addOutputs({
		ApiEndpoint: api.url
	})

	return {
		api
	}
}

