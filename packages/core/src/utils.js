import { Table } from 'sst/node/table'
const getUserId = event => event.requestContext.authorizer?.iam.cognitoIdentity.amr[2].split(':')[2]

const generatePutParams = (table, data) => {
	return {
		TableName: Table[table].tableName,
		Item: {
			...data
		}
	}
}

const generateGetParams = (table, pk, sk = undefined) => {
	const key = Object.keys(pk)[0].toString()
	const keyValue = pk[key]
	return {
		TableName: Table[table].tableName,
		Key: {
			[key]: keyValue
		}
	}
}

const generateScanParams = (table) => {
	return {
		TableName: Table[table].tableName
	}
}

export default {
	getUserId,
	generateGetParams,
	generatePutParams,
	generateScanParams
}
