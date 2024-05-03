import handler from '@hc-matrix-stack/core/handler'
import boilers from '../boilers'

const teams = boilers.teams


export const get = handler(async (event) => {
	return teams
})

export const post = handler(async (event) => {
	let data

	if (event.body) {
		data = JSON.parse(event.body)
	}

	teams.push(data)

	return teams
})
