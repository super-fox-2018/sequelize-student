let model = require("./models")
let Student = model.student;

const argv = process.argv;

if (argv[2]=="create") {
    // "author add -> author add <firstname> <lastname> <religion> <gender> <age>"
    Student.create({
      first_name : argv[3],
      last_name : argv[4],
      gender : argv[5],
      birthday : argv[6],
      email : argv[7],
      phone : argv[8]
    })
    .then(student=>{
      console.log("****************");
      console.log(student.get({plain:true}));
      console.log("****************");
    })
    .catch((err)=>{
      console.log(err);
    })
}

if (argv[2]=="fullName") {
  Student.findById(argv[3])
  .then((dataStudent)=>{
    var dataFullName = dataStudent.getFullName()
    var data = dataStudent.get({plain:true})
    data.fullName = dataFullName
    //   console.log(data);
    console.log(data);
  })
}

if (argv[2]=="getAge") {
  Student.findById(argv[3])
  .then((dataStudent)=>{
    var dataAge = dataStudent.getAge()
    var data = dataStudent.get({plain:true})
    data.Age = dataAge
    console.log(data);
  })
}

if (argv[2]=="getFemaleStudent") {
  Student.getFemaleStudent()
  .then((data)=>{
    var arrStudents = [];
    for (var i = 0; i < data.length; i++) {
      var objStudent = {first_name:"",last_name:"",birthday:"",fullName:""}
      objStudent.first_name = data[i].first_name;
      objStudent.last_name = data[i].last_name;
      objStudent.birthday = data[i].birthday;
      objStudent.fullName = data[i].getFullName();
      arrStudents.push(objStudent)
    }
    console.log(arrStudents);
  })
}
