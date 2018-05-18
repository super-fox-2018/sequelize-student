'use strict';

const fs = require('fs');
const studentsString = fs.readFileSync(__dirname + '/../students.csv', 'utf8');

const students = studentsString.split('\n').reduce((acc, string) => {
  if (string !== '') {
    const student = string.split(',');
    acc.push({
      first_name: student[0],
      last_name: student[1],
      gender: student[2],
      height: student[3],
      birthday: student[4],
      email: student[5],
      phone: student[6]
    });
  }
  return acc;
}, []);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', students, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Students', null, {});
  }
};
