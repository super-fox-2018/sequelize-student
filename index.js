const model = require ("./models");
const Student = model.Students;
const argv = process.argv;

Student.findAll()
  .then(function(student){
    for(let i = 0; i < student.length; i++){
      console.log("full name: " + student[i].getFullName());
      console.log("age: " + student[i].getAge());
    }
  })
  .catch(function(err){
    console.log(err);
  })

Student.getFemaleStudent()
  .then(function(student){
    for(let i = 0; i < student.length; i++){
      console.log(student[i].get({plain:true}));
      console.log("full name: " + student[i].getFullName());
    }
  })
  .catch(function(err){
    console.log(err);
  });



Student.create({
  firstName: argv[2],
  lastName: argv[3],
  gender: argv[4],
  birthday: argv[5],
  email: argv[6],
  phone: argv[7],
  height: argv[8]
})
.then(function(student){
  console.log(student.get({plain:true}));
})
.catch(function(err){
  console.log(err.message);
})