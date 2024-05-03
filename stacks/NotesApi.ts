import { Api, use, StackContext} from 'sst/constructs'
import { DynamoStack } from './DynamoStack'

export const NotesApiStack = ({ stack }: StackContext) => {

	const { NotesTable } = use(DynamoStack)

	const notesApi = new Api(stack, 'notes', {
		defaults: {
			authorizer: 'iam',
			function: {
				bind: [NotesTable]
			}
		},
		cors: true,
		routes: {
			'POST /notes': 'packages/functions/src/notes.create',
			'GET /notes/{id}': 'packages/functions/src/notes.get',
			'GET /notes': 'packages/functions/src/notes.list',
			'PUT /notes/{id}': 'packages/functions/src/notes.update',
			'DELETE /notes/{id}': 'packages/functions/src/notes.remove'
		}
	})

	stack.addOutputs({
		ApiEndpoint: notesApi.url
	})

	return {
		notesApi
	}
}
