'use strict';
module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define('student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isUnique : function(email,cb){
          student.findOne({where:{email : email}})
          .then((tes)=>{
            if(tes == undefined){
              cb()
            }
            else{
              cb('email has already taken')
            }
          })
        },
        isEmail:{
          args : true,
          msg :'email is not valid'
        }  
      }
    },
    phone: DataTypes.STRING
  }, {});

  // instance Method
  student.prototype.getFullName = function(){
    return this.first_name + " " + this.last_name
    
  }
  student.prototype.getAge = function(){
    let age = this.birthday.slice(0,this.birthday.length-6)
    let ageNow = 2018 - Number(age)
    return ageNow
  }

  //class method
  student.getFemale =function(){
   return student.findAll({
      where :{
        gender :'female'
      }
    })
  }




  student.associate = function(models) {
      // associations can be defined here
  
    
    };
    return student;


  }





