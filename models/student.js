'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
     type: DataTypes.STRING,
     validate: {
      isEmail:{
        args: true,
        msg: 'email gak boleh gak ada @ sama .'
      },
      isUnique: function(input,cb) {
        Student.findOne({
          where:{
            email: input
          }
        })
        .then(dataStudent =>{
          if(dataStudent == undefined) {
            cb()
          }else{
            cb("email sudah ada")
          }
        })
      }
     }
    }, 
    phone: {
      type:DataTypes.STRING,
      validate:{
        isAlphanumeric:{
          args:false,
          msg:"phone tidak bole alphanuemeric"
        },
        isPhoneLength: function(input,cb) {
          //console.log(input.length)
          if(input.length>=10 && input.length<=13) {
            cb()
          }else{
            cb("length must be 10-13 ")
          }
        }
      }
    },
    Height: {
      type:DataTypes.INTEGER,
      validate:{
        min:150
      }
    }  
  }, {});

  Student.prototype.getFullName = function(){
    return `${this.first_name} ${this.last_name}`
  };

  Student.prototype.getAge = function(){
    return `${2018 - this.birthday.getFullYear()}`
  };

  Student.getFemaleStudents = function() {
     return Student.findAll({
      where: {
        gender:"female"
      }
    })
  }



  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};