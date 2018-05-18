const Controller = require('./controller')
let argv = process.argv
let table = argv[2];
let command = argv[3];
let param = argv.slice(4)

if (table == 'student') {
    if (command == 'add') {
        Controller.addStudent(param)
    }
    if (command == 'findById') {
        Controller.findById(param)
    }
    if (command == 'findFemale') {
        Controller.findFemale()
    }
}

