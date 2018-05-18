const Model = require('./models');
const Student = Model.Student;

class Controller {
  static getFullName(id = 0) {
    if (id > 0) {
      Student.findById(id)
       .then(function(student) {
        console.log(student.getFullName());
      });
    } else {
      Student.findAll()
       .then(function(students) {
        students.forEach(function(student) {
          console.log(student.id, student.getFullName());
        });
      });
    }
  }

  static getAge(id) {
    Student.findById(id)
     .then(function(student) {
      console.log(student.getAge());
    });
  }

  static getFemaleStudents() {
    Student.getFemaleStudents()
     .then(function(femaleStudents) {
      femaleStudents.forEach(function(student) {
        console.log(student.id);
        console.log(student.firstName);
        console.log(student.lastName);
        console.log(student.fullName);
        console.log(student.getAge());
      });
    });
  }
}

// Controller.getFemaleStudents();
// Controller.getFullName();
// Controller.getAge(1);

Student.create({
        firstName: 'Michael',
        lastName: 'Cangcianno',
        gender: 'male',
        birthday: '1995-08-19',
        email: 'mike_harvey@wsnssas.com',
        phone: '+123456789012',
        createdAt: new Date(),
        updatedAt: new Date(),
        height: 152
      }).then(student => {
      console.log(student.phone.length);
      console.log(student.get({raw: true}));
    });

