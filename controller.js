const model = require('./model');
const view = require('./view');
const Student = model.Student;

class Controller {

    static fullName() {
        Student.findByID(id)
        .then((Student) => {
            view.name(Student.getFullName());
        })
        .catch((err) => {

        })
    }

    static age() {
        Student.findById(id)
        .then((Student) => {
            view.age(Student.getAge());
        })
        .catch((err) => {

        })
    }

    static femaleStudent() {
        Student.getFemale()
        .then(function(female) {
            female.forEach(function(female) {
                view.display(`id: ${female.id}`);
                view.display(`firstName: ${female.firstName}`);
                view.display(`lastName: ${female.lastName}`);
                view.display(`fullname: ${female.getFullName()}`);
                view.display(`age: ${female.getAge()}`);
            })
        })
        .catch(function(err) {
            view.display(err);
        })
        .then(function() {
            process.exit();
        }) 
    }

    static addStudent(firstName, lastName, gender, birthday, email, phone) {
        Student.create({
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            birthday: birthday,
            email: email,
            phone: phone
        })
        .then((Student) => {
            view.display(Student.get({plain:true}))
        })
        .catch((err) => {
            view.display(err.message)
        })
        .then(function() {
            process.exit();
        })
    }

}

module.exports = Controller;