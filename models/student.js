'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    height: {
      type : DataTypes.INTEGER,
      validate : {
        min : {
          args: 151,
          msg: 'Validation error: Height must be above 150 cm'
        }
      }
    },
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Validation error: Email is not valid'
        },
        async isEmailUnique(email) {
          const students = await Student.findAll({ where : { email } });
          if (students.length > 0) throw new Error('Validation error: Email has already been added');
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate : {
        isNumeric: {
          args: true,
          msg : 'Validation error: Phone not allow letters or alphanumeric'
        },
        validatePhone(phone) {
          if (phone[0] === '+' && (phone.length < 12 || phone.length > 15)) {
            throw new Error('Validation error: phone length must be 10 - 13');
          } else if (phone[0] === '0' && (phone.length < 10 || phone.length > 15)) {
            throw new Error('Validation error: phone length must be 10 - 13');
          }
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.getFemaleStudent = function() {
    return Student.findAll({ where : { gender : 'female' }})
      .then(students => students.map(student => {
        const full_name = student.getFullName();
        Object.defineProperty(student, 'full_name', {
          value : full_name
        });
        return student;
      }));
  }
  
  Student.prototype.getFullName = function () {
    return `${this.first_name} ${this.last_name}`;
  }
  
  Student.prototype.getAge = function () {
    const now = new Date();
    const ageDate = new Date(now - this.birthday);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age;
  }
  
  return Student;
};