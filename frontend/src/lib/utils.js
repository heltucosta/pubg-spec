const validateEmail = email => {
	return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase())
}

const validatePassword = password => {
	return /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=.*[!#$%&? "]).{8,})\S$/.test(String(password))
}

const parseNoteTitle = note => note.content.split('\n')[0]

const parseNoteDate = note => {
	const date = new Date(note.createdAt)
	const day = date.getDay()
	const month = date.getMonth()
	const year = date.getFullYear()
	return `${day}/${month}/${year}`
}

export {
	validateEmail,
	validatePassword,
	parseNoteTitle,
	parseNoteDate
}
