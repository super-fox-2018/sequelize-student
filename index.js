const model = require('./models');
let models = model.students

let argv = process.argv
let input = process.argv[2];






// show  record with full name with specific ID
if (input === 'find') {
  models.findAll({
      where: {
        id: argv[3]
      }
    })
    .then(dataStudents => {
      dataStudents.forEach(data => {
        console.log(data.getFullName())
      })
    })
}



// adding data record
if (input === 'add') {

  models.create({
      first_name: argv[3],
      last_name: argv[4],
      gender: argv[5],
      birthday: argv[6],
      email: argv[7],
      phone: argv[8]

    })
    .then(function(dataStudents) {
      console.log(dataStudents.get({
        plain: true
      }))
    })
    .catch(function(err) {
      console.log(err.message)
    })


}

//show age with specific ID
if (input === 'getAge') {
  models
    .findAll({
      where: {
        id: argv[3]
      }
    })
    .then(data => {
      data.forEach(isi => {
        console.log(isi.getAge())
      })

    })
}



if (input === 'female') {
  let obj = {}
  models.getFemale().then(data => {

    for (let i = 0; i < data.length; i++) {
      obj.id = data[i].id
      obj.first_name = data[i].first_name
      obj.last_name = data[i].last_name
      obj.birthday = data[i].birthday
      obj.full_name = data[i].getFullName()

      console.log(obj)

    }


  })



}
