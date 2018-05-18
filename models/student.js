'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type:DataTypes.STRING,
      validate:{
        isAlpha:{
          args:false,
          msg: 'not allow letters'
        },
        isAlphanumeric:{
          args:false,
          msg:'not allow alphanumeric'
        },
        isPhoneLength:function(phoneNum,cb){
          if (phoneNum.length >= 10 && phoneNum.length <= 13) {
            cb()
          }
          else {
            cb('invalid phone number')
          }
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: "height min above 150"
        }
      }
    }
  }, {});

  Student.prototype.getFullName = function() {
    let fullName = `${this.firstName} ${this.lastName}`
    return fullName;
  }

  Student.prototype.getAge = function() {
    let splitBirthday = this.birthday.split('-')
    let fullAge = 2018 - splitBirthday[0]
    return fullAge;
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
