'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email invalid',
        },
        async isFindEmail(email) {
          const Student = await Student.findAll({where : {email}});
          if(Student.length > 0) throw new Error('Email already exist~');
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: 'Phone length must beetween 10 - 13'
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 151,
          msg: 'Height must be more than 150~'
        }
      }
    }
  }, {});

  //instance method
  Student.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
  };

  Student.prototype.getAge = function() {
    let birth = this.birthday.split(0,4);
    let currentYear = (new Date()).getFullYear();
    return currentYear - birth;
  };
  
  Student.prototype.getFemale = function() {
    return Student.findAll({
      where: {
        gender: 'female'
      }
    })
    return Student;
  }

  // associate
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};