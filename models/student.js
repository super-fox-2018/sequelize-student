'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    height: {
      type : DataTypes.INTEGER,
      validate : {
        isTallEnough(height) {
          if (height <= 150) throw new Error('Height must be above 150 cm');
        }
      }
    },
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        async isEmailUnique(email) {
          const students = await Student.findAll({ where : { email } });
          if (students.length > 0) throw new Error('Email has already been added');
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate : {
        validatePhone(phone) {
          const regex = /^(\+\d{2}|0)\d{9,12}$/;
          if (!regex.test(phone)) throw new Error('Invalid phone number');
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};