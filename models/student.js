'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  // class method
  // Student.getAllStudents() = function() {
  //   return Student.findAll();
  // }

  Student.getFemaleStudent = function() {
    // console.log(Student.findAll({ where: { gender: 'female' }}))
    return Student.findAll({ where: { gender: 'female' }});
  }
  
  // instance method
  Student.prototype.getFullName = function() {
    let fullName = `${this.firstName} ${this.lastName}`
    return fullName;
  }

  Student.prototype.getAge = function() {
    let currentYear = 2018;
    let birthYear = Number(this.birthday.slice(0,4));
    let age = currentYear - birthYear;

    return age;
  }
  return Student;
};