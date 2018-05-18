let argv = process.argv
let model = require('./models')
let student = model.student
let controller = require('./controller.js')

if(argv[2] == 'student'){
    if(argv[3] =='add'){
        controller.addStudent(argv[4],argv[5],argv[6],argv[7],argv[8],argv[9])
    }if(argv[3] == 'fullname'){
        controller.fullName(argv[4])
    }if(argv[3] == 'age'){
        controller.ageStudent(argv[4])
    }if(argv[3] == 'female'){
        controller.female()
    }
}