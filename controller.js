let model = require('./models')
let Student = model.student
let view = require('./view.js')

class Controller{
    constructor(){

    }
    static addStudent(first_name,last_name,gender,birthday,email,phone){
        Student.create({
            first_name : first_name,
            last_name : last_name,
            gender : gender,
            birthday : birthday,
            email : email,
            phone : phone
        })
        .then((student)=>{
            view.studentAdd(student.get({plaint : true}))
        })
        .catch((err)=>{
            view.errStudent(err.message,err)
        })
    }

    static fullName(id){
        Student.findById(id)
        .then((student)=>{
            view.name(student.getFullName())
            
        })
        .catch((err)=>{

        })
    }

    static ageStudent(id){
        Student.findById(id)
        .then((student)=>{
            view.age(student.getAge())
        })
        .catch((err)=>{

        })
    }

    static female(){
        Student.getFemale()
        .then((student)=>{
            student.forEach(function(student){
                view.allF(student.get({plain : true}))
                view.allF(student.id)
                view.allF(student.first_name + '' + student.last_name)   
            })
        })
        
    }
}

module.exports = Controller