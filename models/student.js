'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail : {
          args: true,
          msg : "Please insert your valid email!"
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate : {
        not: {
          args : ["[a-z]",'i'],
          msg : "Phone not allow letter"
        },
        isNumeric: {
          args : true,
          msg : "Phone not allow alphanumeric"
        },
        len : {
          args : [10,13],
          msg : "Phone length must be 10-13"
        } 
      }
    },
    height: DataTypes.INTEGER
  }, {});
  
  Student.associate = function(models) {
    // associations can be defined here
  };

    Student.prototype.getFullName = function(){
      return this.firstName +" "+ this.lastName
    }

    Student.prototype.getAge = function(){
      let year = new Date()
      let thisYear = year.getFullYear()
      return  (thisYear - this.birthday.slice(0,4))
    }

    Student.getSpecificGender = function () {
      // return new Promise(function(resolve, reject){
       return Student.findAll({where: {gender: 'female'}})
        .then(function(students){
          for(let i=0; i<students.length; i++){
              console.log(students[i].getFullName())
          }
        })
        .catch(function(err) {
          console.log(err)
        }) 

      // })
      // return Student.findAll({raw:true, where: { gender: 'female' }, })
    }

    // var all = db.getFemaleStudent(function(students){
    //   students.forEach(function (students) {
    //     console.log(Students.getFullName())
    //   });
    // })

  return Student;

};