'use strict';
module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define('student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      validate:{
        isEmail: true,
      },
    },
    phone: DataTypes.STRING
  }, {});

  student.associate = function(data) {
    // associations can be defined here 
   
    
  };
  
  student.getFemale = function(){
    student
      .findAll({
        where:{
          gender : "female",
        },
      })
      .then(function(student){
        student.forEach(element =>{
          element.getFullName();
        });
      })
  }

  student.prototype.getFullName = function(){
    console.log(this.first_name+' '+this.last_name);

  };


  return student;
};