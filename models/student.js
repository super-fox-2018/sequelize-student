'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    phone: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: {
          args: true,
          msg: 'Phone number must be numeric'
        },
        validatePhone(phone) {
          if (phone.length < 10 || phone.length > 14) {
            throw new Error('Phone number should be 10 to 13 characters')
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email is not valid!'
        },
        isUnique(value, callback) {
          // loop each record in database
          // if found email with the same value, return false
          Student.findOne({
            where: { email: value }
          })
          .then(function(student) {
            if (student) {
              // throw new Error('Email already exists!');
              callback('Email already exists!');
            }
            else {
              callback()
            }
          })
        }
      }
    },
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  // class method
  // Student.getAllStudents() = function() {
  //   return Student.findAll();
  // }

  Student.getFemaleStudent = function() {
    return Student.findAll({ where: { gender: 'female' }});
  }
  
  // instance method
  Student.prototype.getFullName = function() {
    let fullName = `${this.firstName} ${this.lastName}`
    return fullName;
  }

  Student.prototype.getAge = function() {
    // let currentYear = 2018;
    // let birthYear = Number(this.birthday.slice(0,4));
    let birthday = new Date(this.birthday);
    let currentDate = new Date();
    let birthYear = birthday.getFullYear();
    let currentYear = currentDate.getFullYear();

    let age = currentYear - birthYear;
    return age;
  }
  return Student;
};