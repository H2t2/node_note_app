const fs = require('fs')

const getNotes = function(){
}

const addNote = function(title, body) {
	const notes = loadNotes()
	notes.push({
		title: title, 
		body: body
	})
	saveNotes(notes)
}

const saveNotes = function(notes) {
	const dataString = JSON.stringify(notes)
	fs.writeFileSync('notesData.json', dataString)
}

const loadNotes = function() {
	try {
		const databuffer = fs.readFileSync('notesData.json')
		const dataString = databuffer.toString()
		return JSON.parse(dataString)
	} catch (e) {
		return []
	}
}

module.exports = {
	addNote: addNote,
	getNotes: getNotes,
}
