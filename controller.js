const model = require('./models');
const View = require('./view');
const Student = model.Student;

class Controller {
    static addStudent(param) {
        let firstName = param[0];
        let lastName = param[1];
        let gender = param[2];
        let birthday = param[3];
        let email = param[4];
        let phone = param[5];
        let height = param[6];

        // console.log(firstName, lastName, gender, birthday, email, phone, height)
        Student.create({
            firstName: firstName, lastName: lastName,
            gender: gender, birthday: birthday, email: email, phone: phone,
            height: height
        })
            .then(function (student) {
                View.display(student.get({ plain: true }))
            })
            .catch((err) => {
                View.display(err.message)
            })
            .then(function () {
                process.exit()
            })
        // .then(function () {
        //     process.exit()
        // })
    }
    static findById(param) {
        let id = param[0]
        Student.findById(id)
            .then((student) => {
                View.display(student.get({ plain: true }));
                let fullName = student.getFullName();
                let age = student.getAge();
                View.display(`Full Name: ${fullName} and Age: ${age}`);
            })
            .catch((err) => {
                View.display(err);
            })
            .then(function () {
                process.exit()
            })
    }
    static findFemale() {
        Student.getFemaleStudent()
            .then(function (females) {
                females.forEach(function (female) {
                    View.display(`id: ${female.id}`)
                    View.display(`first name : ${female.firstName}`)
                    View.display(`last name: ${female.lastName}`)
                    View.display(`full name: ${female.getFullName()}`)
                    View.display(`Age: ${female.getAge()}`)
                })
            })
            .catch(
                function (err) {
                    View.display(err)
                }
            )
            .then(function () {
                process.exit();
            })
    }
}

module.exports = Controller;