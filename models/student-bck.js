'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull : false,
      validate:{
        isEmail : true
      }
    },
    phone: DataTypes.STRING,
    height: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  //instance methode
  Student.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName
  }

  Student.prototype.getAge = function() {
    let currentYear = (new Date()).getFullYear();
    let birthYear = Number(this.birthday.split('-')[0]);
    return currentYear - birthYear;
  }
  Student.getFemaleStudent = function() {
    return Student.findAll({
      where: {
        gender:'female'
      }
    })
  }
  return Student;
};