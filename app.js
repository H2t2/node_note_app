const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of note to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        console.log('Listing all notes');
    }
})

yargs.command({
    command: 'read', 
    describe: 'Read a single note', 
    handler() {
        console.log('Reading note')
    }
})

yargs.parse()

