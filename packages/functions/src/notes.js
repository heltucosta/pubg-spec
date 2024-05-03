import { Table } from 'sst/node/table'
import handler from '@hc-matrix-stack/core/handler'
import dynamoDb from '@hc-matrix-stack/core/dynamodb'
import { getUserId } from '../../core/src/utils'

export const create = handler(async (event) => {
	let data = {
		content: '',
		attachment: ''
	}

	if (event.body) {
		data = JSON.parse(event.body)
	}

	const userId = getUserId(event)

	const params = {
		TableName: Table.Notes.tableName,
		Item: {
			userId,
			noteId: data.attachment,
			content: data.content,
			createdAt: Date.now()
		}
	}

	await dynamoDb.put(params)

	const getParams = {
		TableName: Table.Notes.tableName,
		KeyConditionExpression: 'userId = :userId',
		ExpressionAttributeValues: {
			':userId': userId
		}
	}

	const result = await dynamoDb.query(getParams)

	return result.Items
})

export const get = handler(async (event) => {
	const userId = getUserId(event)
	let data = null
	if (event.body) {
		data = JSON.parse(body)
	}

	const params = {
		TableName: Table.Notes.tableName,
		Key: {
			userId,
			noteId: data ? data : event.pathParameters.id
		}
	}

	const result = await dynamoDb.get(params)
	if (!result.Item) {
		throw new Error('Item not found.')
	}

	return result.Item
})

export const list = handler(async (event) => {
	const userId = getUserId(event)
	const params = {
		TableName: Table.Notes.tableName,
		KeyConditionExpression: 'userId = :userId',
		ExpressionAttributeValues: {
			':userId': userId
		}
	}

	const result = await dynamoDb.query(params)
	console.log('GET /notes result', result.Items)

	return result.Items
})

export const update = handler(async (event) => {
	const data = JSON.parse(event.body)
	const params = {
		TableName: Table.Notes.tableName,
		Key: {
			userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
			noteId: event.pathParameters.id
		},
		UpdateExpression: 'SET content = :content, attachment = :attachment',
		ExpressionAttributeValues: {
			':attachment': data.attachment || null,
			':content': data.content || null
		},
		ReturnValues: 'ALL_NEW'
	}

	await dynamoDb.update(params)

	return { status: true }
})

export const remove = handler(async (event) => {
	const userId = getUserId(event)

	const params = {
	  TableName: Table.Notes.tableName,
		Key: {
			userId,
			noteId: event.pathParameters.id
		}
	}

	console.log('params', params)

	await dynamoDb.delete(params)

	const getParams = {
		TableName: Table.Notes.tableName,
		KeyConditionExpression: 'userId = :userId',
		ExpressionAttributeValues: {
			':userId': userId
		}
	}

	const result = await dynamoDb.query(getParams)

	return result.Items
})
