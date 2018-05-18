'use strict';
module.exports = (sequelize, DataTypes) => {
  var students = sequelize.define('students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      isUnique: true,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "Must be valid email"
        }

      }
    },
    phone: DataTypes.STRING
  }, {});
  students.associate = function(models) {
    // associations can be defined here
  };

  //instance method
  students.prototype.getFullName = function() {

    let str = this.first_name + ' ' + this.last_name
    return str

  }


  students.prototype.getAge = function() {
    let lahir = this.birthday
    lahir = lahir.split('-')
    return 2018 - lahir[0]

  }


  students.getFemale = function() {
    return students.findAll({
      where: {
        gender: "female"
      }


    })

  }



  return students;
};
