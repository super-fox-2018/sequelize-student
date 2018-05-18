'use strict';
module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define('student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});

  //Instance method
  student.prototype.getFullName = function(){
    return this.first_name+' '+this.last_name
  }
  student.prototype.getAge = function(){
    let age = Number(this.birthday.split('-')[0])
    let currentYear = 2018
    return currentYear-age
  }

  //Class Method 
   student.getFemaleStudent = function (callback){
    student.findAll({
      where:{
        gender:'female'
      }
    })
    .then(female_students=>{
      for(let i=0;i<female_students.length;i++){
        female_students[i].full_name = female_students[i].getFullName()
      }
        callback(female_students)
    })
  }
  student.associate = function(models) {
    // associations can be defined here
  };
  return student;
};
