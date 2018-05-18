'use strict';
module.exports = (sequelize, DataTypes) => {
  var Students = sequelize.define('Students', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    phone: {
      type: DataTypes.STRING,
      validate:{
        len:{
          args: [10,13],
          msg: "Phone length must be 10-13"
        },
        not: {
          args: ["[a-z]",'i'],
          msg: "Phone must not be in letters"
        },
        isAlphanumeric: {
          args: false,
          msg: "Phone not allow alphanumeric"
        }
      }
    },
    height: {
      type: DataTypes.STRING,
      validate: {
        min:151
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
       isEmail: {
         args: true,
         msg: "Not an email"
       },
       isExist(value, callback){
        Students
          .findOne({ where: { email: value } })
          .then(function (student) {
            if (student) {
              callback("Email alrady exist");
            } else {
              callback();
            }
          });
        }
      }
    }
  }, {timestamps:false});
  Students.associate = function(models) {
    // associations can be defined here
  };

  Students.prototype.getFullName = function(){
    return (this.firstName + " " + this.lastName);
  }

  Students.prototype.getAge = function(){
    let year = "";

    for(let i = 0; i < 4; i++){
      year += this.birthday[i];
    }
    year = Number(year);

    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    let age = (Number(currentYear) - year);

    return age;
  }

  Students.getFemaleStudent = function(){
    return Students.findAll({where: {gender: "female"}});
  }

  return Students;
};