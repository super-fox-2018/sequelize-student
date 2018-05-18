let model = require('./models')
// let student = model.student

class Controller{
	constructor(){

	}
	static getFullName(){
		model.student.findAll()
		.then((dataStudent)=>{
			dataStudent.forEach(data=>{
				console.log(data.getFullName())
			})
			
		})
	}
	static getAge(){
		model.student.findAll()
		.then((dataStudent)=>{
			dataStudent.forEach(data=>{
				console.log(data.getFullName()+ ' umur ' +data.getAge())
			})
		})
	}
	static getFemale(){
		model.student.getFemaleStudent(function (female_students) {
	   		female_students.forEach(female_student=>{
		        console.log(female_student.id)
		        console.log(female_student.first_name)
		        console.log(female_student.last_name)
		        console.log(female_student.full_name)
	   		})
		})
	}
}

// Controller.getFullName()
// Controller.getAge()
Controller.getFemale()