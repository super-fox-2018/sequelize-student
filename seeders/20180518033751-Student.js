'use strict';

const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    let seedInput = fs.readFileSync('data.csv','utf-8').split('\n')
    let arrayInput = []
    for(let i = 0; i < seedInput.length; i++){
      seedInput[i] = seedInput[i].split(',')
      let newObj = {
        first_name:seedInput[i][0],
        last_name:seedInput[i][1],
        gender:seedInput[i][2],
        height: +seedInput[i][6],
        birthday:seedInput[i][3],
        email:seedInput[i][4],
        phone:seedInput[i][5]
      }
      arrayInput.push(newObj)
    }
    return queryInterface.bulkInsert('Students', arrayInput, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Students', null, {});
  }
};
