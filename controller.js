const model= require("./models")

class Student {

	static createUser() {
		model.Student.create({
			first_name:"aldo",
			last_name:"prakoso",
			gender:"male",
			birthday:"1998-12-24",
			email:"alprak1@gmail.com",
			phone:"567889898798",
			Height:155
		})
		.catch(err=>{
			console.log(err.message)
		})
	}
	
	static showFullName() {
		model.Student.findAll()
		.then(students => {
			for(let i=0;i<students.length;i++) {
				console.log(students[i].getFullName())
			}
		})	
	}

	static showAge() {
		model.Student.findAll()
		.then(dataStudents =>{
			dataStudents.forEach(dataStudent=>{
				console.log(dataStudent.getAge())
			})
		})
	}
		
	static showFemaleStudents() {
		model.Student.getFemaleStudents()
		.then(femaleStudents=>{
			femaleStudents.forEach(femaleStudent=>{
				console.log(femaleStudent.id)
				console.log(femaleStudent.first_name)
				console.log(femaleStudent.last_name)
				console.log(femaleStudent.getFullName())
						
			})
			
		})
	}

}

// Student.showFullName()
Student.createUser()
