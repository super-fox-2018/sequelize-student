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

	static addStudent(obj){
		model.student.create({
			first_name: obj.first_name,
			last_name: obj.last_name,
			gender: obj.gender,
			birthday: obj.birthday,
			email: obj.email,
			phone: obj.phone,
			height: obj.height,
			createdAt: obj.createdAt,
			updatedAt: obj.updatedAt
		})
		.catch(function(err) {
			console.log('err',err.message)
		})
	}
}
let obj = {
        first_name: 'Nikolas',
        last_name: 'Friesen',
        gender: 'female',
        birthday: '1998-12-24',
        email: 'agustina_brafw@afnwintheiser.info',
        phone: '449.897.7415',
        height: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      }
// Controller.getFullName()
// Controller.getAge()
// Controller.getFemale()

Controller.addStudent(obj)