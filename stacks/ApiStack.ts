import { Api, StackContext} from 'sst/constructs'

const apiHandlersPath = 'packages/functions/src/'

export const ApiStack = ({ stack }: StackContext) => {

	const api = new Api(stack, 'api', {
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

