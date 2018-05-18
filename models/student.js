'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail: true,
        isUnique(emailString, callback){
          Student.find({raw:true,where:{email:emailString}})
          .then(result =>{
            if(result !== null){
              callback('email tidak unik')
            } else {
              callback()
            }
          })
          .catch(error =>{
            console.log(error);
          })
        }
      }
    },
    phone: {
      type:DataTypes.STRING,
      validate:{
        isbetween10to13(phoneStr){
          let status = true
          if(phoneStr[0] === '+'){
            if(phoneStr.length>15 || phoneStr.length<13) status = false
          }else{
            if(phoneStr.length>13 || phoneStr.length<10) status = false
          }
          if(!status) throw new Error('nomor harus antara 10 - 13');
        },
        isNumbers(phoneStr){
          let status = true
          if(phoneStr[0] === '+'){
            phoneStr = phoneStr.split('+')
            if(isNaN(+phoneStr[1])) status = false
          }else{
            if(isNaN(+phoneStr)) status = false
          }
          if(!status) throw new Error('nomor harus dalam bentuk angka')
        }
      }
    },
    height: {
      type:DataTypes.INTEGER,
      validate:{
        isAbove150(heightValue){
          if(heightValue<=150) throw new Error('tinggi harus di atas 150 cm')
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  Student.getFemaleGenders = function(){
    return new Promise((resolve,reject)=>{
      Student.findAll({raw:true,where:{gender:'female'}})
      .then(students =>{
          students.forEach(function(student){
            student.full_name = `${student.first_name} ${student.last_name}`
          })
        resolve(students)
      })
      .catch(err =>{
          reject(err)
      });
    })
  }
  Student.prototype.getFullName = function(){
    console.log(`${this.first_name} ${this.last_name}`)
  }
  Student.prototype.getAge = function(){
    let date = new Date()
    console.log( date.getFullYear() - +this.birthday.split('-')[0])
  }
  return Student;
};