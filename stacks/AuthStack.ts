import * as iam from 'aws-cdk-lib/aws-iam'
import { Cognito, use, StackContext} from 'sst/constructs'
import { DynamoStack } from './DynamoStack'
import { NotesApiStack } from './NotesApi'

export const AuthStack = ({ stack, app }: StackContext) => {

	const { uploadsBucket } = use(DynamoStack)
	const { notesApi } = use(NotesApiStack)

	const auth = new Cognito(stack, 'Auth', {
		login: ['email']
	})

	auth.attachPermissionsForAuthUsers(stack, [
		notesApi,
		new iam.PolicyStatement({
			actions: ['s3:*'],
			effect: iam.Effect.ALLOW,
			resources: [
				uploadsBucket.bucketArn + '/private/${cognito-identity.amazonaws.com:sub}/*',
			]
		})
	])

	stack.addOutputs({
		Region: app.region,
		UserPoolId: auth.userPoolId,
		IdentityPoolId: auth.cognitoIdentityPoolId,
		UserPoolClientId: auth.userPoolClientId
	})

	return {
		auth
	}
}

