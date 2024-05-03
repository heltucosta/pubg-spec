const getUserId = event => event.requestContext.authorizer?.iam.cognitoIdentity.amr[2].split(':')[2]

export {
	getUserId
}
