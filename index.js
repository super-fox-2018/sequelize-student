const Model = require('./models');
const {Student} = Model

Student.find({where:{first_name:"Groot"}})
.then(result =>{
    result.getFullName()
    result.getAge()
})
.catch(err =>{
    console.log(err)
})

Student.getFemaleGenders()
.then(result =>{
    console.log(result)
})
.catch(err=>{
    console.log(err)
})

Student.create({first_name:'wow',last_name:'wewe',birthday:'1999-10-12',height:151,email:'lololol@gmail.com',gender:'female',phone:'+89123412345111'})
.then(result=>{
    console.log(result)
})
.catch(error=>{
    console.log(error)
})