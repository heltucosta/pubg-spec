import { Table, StackContext, Bucket } from "sst/constructs";

const DynamoStack = ({ stack }: StackContext) => {
	const NotesTable = new Table(stack, "Notes", {
		fields: {
			userId: 'string',
			noteId: 'string',
			content: 'string', 
		},
		primaryIndex: { partitionKey: 'userId', sortKey: 'noteId' }
	})

  const uploadsBucket = new Bucket(stack, 'Uploads', {
		cors: [
			{
				maxAge: '1 day',
				allowedOrigins: ['*'],
				allowedHeaders: ['*'],
				allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD']
			}
		]
	})

	return {
		NotesTable,
		uploadsBucket
	}
}

export {
	DynamoStack
}
