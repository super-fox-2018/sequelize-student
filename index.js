const models = require('./models');
const { Student } = models;

// Student.getFemaleStudent()
//   .then(femaleStudents => femaleStudents.forEach(femaleStudent => {
//     console.log(femaleStudent.full_name);
//   }))
//   .then(() => process.exit());


Student.create({ 
  first_name: 'Oliver',
  last_name: 'Queen',
  gender: 'male',
  height: 151,
  birthday: '1975-07-07',
  email: 'mcqueenmail@mailer.com',
  phone: '127777777777'
}).then(result => {})
  .catch(err => console.log(err.errors[0].message))
  .then(() => process.exit());
  