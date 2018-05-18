const Model = require('./models');


Model.Student.findAll({
  raw: true
}).then(studentData => {
  studentData.forEach(function(dataStudents) {
    // console.log(dataStudents);
  })
})
//
Model.Student.findAll().then(fullNameStudent=>{
  fullNameStudent.forEach(student =>{
    // console.log(student.getFullName());
  })
})
//
//
Model.Student.findAll().then(age =>{
  age.forEach(studentAge =>{
    // console.log(`Name : ${studentAge.getFullName()}  Age : ${studentAge.getAge()}`);
  })
})

Model.Student.findAll().then(all=>{
  all.forEach(femaleStudent =>{
    if (femaleStudent.gender === 'female') {
      // console.log(`${femaleStudent.getFullName()} ${femaleStudent.gender}`);
    }
  })
})


Model.Student.getFemaleStudent().then(female =>{
  // console.log(female);
  female.forEach(femaleStudent =>{
    console.log(femaleStudent.id)
    console.log(femaleStudent.firstName);
    console.log(femaleStudent.lastName);
    console.log(femaleStudent.getFullName());
  })
})
