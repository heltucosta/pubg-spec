const handler = lambda => {
	return async (event, context) => {
		let body, statusCode

		try {
			body = await lambda(event, context)
			statusCode = 200
		} catch (e) {
			console.error(e)
			body = { error: e.message }
			statusCode = 500
		}

		return {
			statusCode,
			body: JSON.stringify(body),
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': true
			}
		}
	}
}

export default handler
