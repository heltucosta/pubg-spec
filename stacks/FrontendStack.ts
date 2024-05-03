import { StaticSite, use, StackContext } from 'sst/constructs'
//import { NotesApiStack } from './NotesApi'
//import { DynamoStack } from './DynamoStack'
//import { AuthStack } from './AuthStack'
import { ApiStack } from './ApiStack'

export const FrontendStack = ({ stack, app}: StackContext) => {
//	const { notesApi } = use(NotesApiStack)
//	const { uploadsBucket } = use(DynamoStack)
//	const { auth } = use(AuthStack)
	const { api } = use(ApiStack)

	const site = new StaticSite(stack, 'ReactSite', {
		path: 'frontend',
		buildOutput: 'build',
		buildCommand: 'npm run build',
		environment: {
			REACT_APP_API_URL: api.customDomainUrl || api.url,
      REACT_APP_REGION: app.region,
		}
	})

	stack.addOutputs({
		SiteUrl: site.url || 'https://localhost:3000'
	})
}
