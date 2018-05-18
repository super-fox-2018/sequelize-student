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
        isEmail:{
          args: true,
          msg: "Email not Valid!"
        },
        async isFindEmail(email) {
          const students = await Student.findAll({ where : { email } });
          if (students.length > 0) throw new Error('Email Already Exist!');
        }

      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: "Phone length must be 10-13"
        },
        isNumeric: {
          args: true,
          msg : 'Phone Not Allow alphanumeric'
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 151,
          msg: "Height should be > 150"
        }
      }
    }
  }, {});

  Student.associate = function (models) {
    // associations can be defined here
  };

  //instance methode
  Student.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName
  }

  Student.prototype.getAge = function () {
    let currentYear = (new Date()).getFullYear();
    let birthYear = Number(this.birthday.split('-')[0]);
    return currentYear - birthYear;
  }
  //class method
  Student.getFemaleStudent = function () {
    return Student.findAll({
      where: {
        gender: 'female'
      }
    })
  }
  return Student;
};