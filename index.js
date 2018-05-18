const model = require('./models')
const {Student} = model
let argv = process.argv
let command = argv[2]


// get all students fullname
model.Student.findAll()
.then(function(students) {
    for(let i=0; i<students.length; i++){
        console.log(students[i].getFullName())
    }
  })
  .catch(function(err) {
    console.log(err)
  })

// get all students age
model.Student.findAll()
.then(function(students){
    for(let i=0; i<students.length; i++){
        console.log(students[i].getAge())
    }
})
.catch(function(err) {
  console.log(err)
})

// get all female students
model.Student.getSpecificGender()
.then(function(students){
    console.log(students)
})
.catch(function(err) {
  console.log(err)
})

// add new student
if(command === "add"){
    const obj = {}
    obj.firstName = argv[3],
    obj.lastName = argv[4],
    obj.gender = argv[5],
    obj.birthday = argv[6],
    obj.email = argv[7],
    obj.phone = argv[8],
    obj.height = argv[9]

    Student.create(obj)
    .then(students => {
        console.log(students.get({plain:true}))
    })
    .catch(function(err){
        console.log(err.message)
    })
}