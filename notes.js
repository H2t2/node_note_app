const fs = require('fs')

const getNotes = function(){
}

const addNote = function(title, body) {
	const notes = loadNotes()
	const duplicateNotes = notes.filter((note) => note.title === title)
	if (duplicateNotes.length === 0){		
		notes.push({
			title: title, 
			body: body
		})
		saveNotes(notes)
		console.log('Added ' + title)
	} else {
		console.log("Note Title Taken")
	}
}
const removeNote = function(title) {
	const notes = loadNotes()
	const newNotes = notes.filter((note) => note.title !== title)
	if (newNotes.length === notes) {
		console.log("Note: " + title + " not found");
	} else {
		saveNotes(newNotes)
		console.log(title + ' removed')
	}
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
	removeNote: removeNote,
	getNotes: getNotes,
}
