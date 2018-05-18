let argv = process.argv;
let model = require('./models');
let student = model.student;
let controller = require('./controller.js');

if(argv[2] == 'student') {
    if(argv[3] == 'add') {
        controller.addStudent(argv[4],argv[5],argv[6],argv[7],argv[8],argv[9]);
    } else if(argv[3] == 'fullname') {
        controller.getFullName(argv[4]);
    } else if(argv[3] == 'age') {
        controller.getAge(argv[4]);
    } else if(argv[3] == 'getFemale'){
        controller.getFemaleStudent();
    }
} else {
    console.log('unknown input...')
}