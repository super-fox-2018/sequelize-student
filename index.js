let Model = require('./models')
let Student = Model.Student;

// Student.findAll()
// .then(function(students) {
//   console.log(students)
// })
Student.create({
  firstName: 'Lena',
  lastName: 'Oxton',
  gender: 'female',
  birthday: '2001-09-13',
  email: 'tracer@overwatch.com',
  phone: '628118@888823448'
})
.then((student) => {
  console.log(`Data inputted!`)
  console.log(student.get({ plain: true }))
})
.catch((err) => {
  console.log('errors ==>')
  console.log(err);
  process.exit();
});

Student.getFemaleStudent()
.then(function(students) {
  console.log(`Female students:`)
  students.forEach(student => {
    console.log(`ID:`, student.id);
    console.log(`Name:`, student.getFullName());
    console.log(`Age:`, student.getAge(), `\n`);
  })
  // console.log(students) 
})
.catch(function(err) {
  console.log(err)
})
// .then(() => process.exit())
