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
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing note');
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log('Listing all notes');
    }
})

yargs.command(
    'read', 
    'Read a single note', 
    function(){
        console.log('Reading note');
    }
)
yargs.parse()

