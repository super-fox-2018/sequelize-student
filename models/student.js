'use strict';
module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define('student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
              type : DataTypes.STRING,
              validate : {
                            isEmail:{
                                      args:true,
                                      msg:"wrong email"
                                    }
                          }
            },
    phone: DataTypes.STRING
  }, {});
  student.associate = function(models) {
    // associations can be defined here
  };
  student.prototype.getFullName = function(){
    return this.first_name + " " + this.last_name;
  }
  student.prototype.getAge = function(){
    var splitBirthday = this.birthday.split('-');
    var IntBirthday = parseInt(splitBirthday[0]);
    var age = 2018 - IntBirthday;
    return age;
  }


  //class method
  student.getFemaleStudent = function(){
    return student.findAll({
      where : {
                gender:"female"
              }
    });
  }

  return student;
};
