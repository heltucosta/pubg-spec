import handler from '@hc-matrix-stack/core/handler'
import dynamoDb from '@hc-matrix-stack/core/dynamodb'
import utils from '@hc-matrix-stack/core/utils'
import boilers from '../boilers'
import { v4 as uuid } from 'uuid'

const teams = boilers.teams

const getAllTeams = async () => {
	const result = await dynamoDb.scan(utils.generateScanParams('Teams'))
	return result.Items
}

export const get = handler(async (event) => {
	return await getAllTeams()
})

export const getTeam = handler(async (event) => {
	const { teamId } = event.pathParameters
	const result = await dynamoDb.get(utils.generateGetParams('Teams', {teamId}))
	return result.Item
})

export const post = handler(async (event) => {
	let data

	if (event.body) {
		data = JSON.parse(event.body)
	}

	await dynamoDb.put(utils.generatePutParams('Teams', {
		teamId: uuid(),
		...data
	}))
	return await getAllTeams()
})
