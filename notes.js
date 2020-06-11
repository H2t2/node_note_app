const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
}

const addNote = (title, body) => {
	const notes = loadNotes()
	const duplicateNote = notes.find((note) => note.title === title)
	if (!duplicateNote){		
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

const listNotes = () => {
	const notes = loadNotes()
	notes.forEach((note) => {
		console.log(chalk.bold.underline(note.title))
		console.log(note.body)
	})
}

const readNote = (title) => {
	const notes = loadNotes()
	const desiredNote = notes.find((note) => note.title === title)
	if (!desiredNote) {
		console.log(chalk.red.inverse('"' + title +'" not found'))
	} else {
		console.log(chalk.bold.underline(desiredNote.title))
		console.log(desiredNote.body)
	}
}

const removeNote = (title) => {
	const notes = loadNotes()
	const newNotes = notes.filter((note) => note.title !== title)
	if (newNotes.length === notes) {
		console.log("Note: " + title + " not found")
	} else {
		saveNotes(newNotes)
		console.log(title + ' removed')
	}
}

const saveNotes = (notes) => {
	const dataString = JSON.stringify(notes)
	fs.writeFileSync('notesData.json', dataString)
}

const loadNotes = () => {
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
	listNotes: listNotes,
	readNote: readNote,
	removeNote: removeNote,
	getNotes: getNotes,
}
