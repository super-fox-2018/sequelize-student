const Model = require('./models');
const student = Model.student;

const argv = process.argv;
const command = argv[2];

if(command==="add"){
    student
    .create({
        first_name: argv[3],
        last_name: argv[4],
        gender: argv[5],
        birthday: argv[6],
        email: argv[7],
        phone: argv[8]
    })
    .then(function(student){
        console.log(student.get({plain:true}))
    })
    .catch(function(){
        console.log('data invalid')
    })
}

if(command==='get_full_name'){
    student
    .findAll()
    .then(function(student){
        student.forEach(element => {
            element.getFullName();
        });      
    })
}

if(command==='find_female_student'){
    student
    .getFemale()
}