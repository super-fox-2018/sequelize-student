let Model = require('./models')
let Student = Model.Student;

Student.findAll()
.then(function(students) {
  console.log(students)
})

Student.getFemaleStudent()
.then(function(students) {
  console.log(`Female students:`)
  students.forEach(student => {
    console.log(`ID:`, student.id);
    console.log(`Name:`, student.getFullName());
    console.log(`Age:`, student.getAge(), `\n`);
    //console.log()
  })
  // console.log(students) 
})
.catch(function(err) {
  console.log(err)
})
.then(() => process.exit())