'use strict';

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

    return queryInterface.bulkInsert('students', [{
        first_name: 'Nikolas',
        last_name: 'Friesen',
        gender: 'female',
        birthday: '1998-12-24',
        email: 'agustina_braun@winthesier.info',
        phone: '449.897.7415',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        first_name: 'Randi',
        last_name: 'Halvorson',
        gender: 'male',
        birthday: '1997-01-29',
        email: 'heber.upton@bechtelarwisozk.biz',
        phone: '(697)436-2633',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Sally',
        last_name: 'Buckridge',
        gender: 'female',
        birthday: '1997-10-30',
        email: 'nora@treutel.name',
        phone: '1-351-672-6358x02502',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Morris',
        last_name: 'Swift',
        gender: 'male',
        birthday: '1995-06-27',
        email: 'cordell@sanfordkuhlman.org',
        phone: '(600)142-5639x9380',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        first_name: 'Sidney',
        last_name: 'ortiz',
        gender: 'male',
        birthday: '1997-04-04',
        email: 'agustina_braun@winthesier.info',
        phone: '449.897.7415',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        first_name: 'Reid',
        last_name: 'Skiles',
        gender: 'male',
        birthday: '1994-10-13',
        email: 'mike_harvey@nikolaus.com',
        phone: '(543)511-2123',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        first_name: 'Violet',
        last_name: 'Dickens',
        gender: 'female',
        birthday: '1994-11-19',
        email: 'rubye_olson@collins.biz',
        phone: '1-410-486-1411x5058',
        createdAt: new Date(),
        updatedAt: new Date()
      }




    ], {});



  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
