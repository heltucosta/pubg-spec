import handler from '@hc-matrix-stack/core/handler'
import dynamoDb from '@hc-matrix-stack/core/dynamodb'
import utils from '@hc-matrix-stack/core/utils'
import { v4 as uuid } from 'uuid'

const getAllTourneys = async () => {
	const result = await dynamoDb.scan(utils.generateScanParams('Tourneys'))
	return result.Items
}

export const get = handler(async (event) => {
	return await getAllTeams()
})

export const getTourney = handler(async (event) => {
	const { tourneyId } = event.pathParameters
	const result = await dynamoDb.get(utils.generateGetParams('Tourneys', {tourneyId}))
	return result.Item
})

export const post = handler(async (event) => {
	let data

	if (event.body) {
		data = JSON.parse(event.body)
	}

	await dynamoDb.put(utils.generatePutParams('Tourneys', {
		tourneyId: uuid(),
		...data
	}))
	return await getAllTourneys()
})

