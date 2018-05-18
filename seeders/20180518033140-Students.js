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

    return queryInterface.bulkInsert("Students", [
      {
        firstName: "Nikolas",
        lastName: "Friesen",
        gender: "female",
        birthday: "1998-12-24",
        email: "agustina_braun@wintheiser.info",
        phone: "449.897.7415"
      },{
        firstName: "Randi",
        lastName: "Halvorson",
        gender: "male",
        birthday: "1997-01-29",
        email: "heber.upton@bechtelarwisozk.biz",
        phone: "(697)436-2633"
      },{
        firstName: "Sally",
        lastName: "Buckridge",
        gender: "female",
        birthday: "1997-10-30",
        email: "nora@treutel.name",
        phone: "1-351-672-6358x02502"
      },{
        firstName: "Morris",
        lastName: "Swift",
        gender: "male",
        birthday: "1995-06-27",
        email: "cordell@sandfordkuhlman.org",
        phone: "(600)142-5639x9380"
      },{
        firstName: "Sidney",
        lastName: "Ortiz",
        gender: "male",
        birthday: "1997-04-04",
        email: "erling@davis.name",
        phone: "554.170.3265"
      },{
        firstName: "Reid",
        lastName: "Skiles",
        gender: "male",
        birthday: "1994-11-19",
        email: "mike_harvey@nikolaus.com",
        phone: "(543)511-2123"
      },{
        firstName: "Violet",
        lastName: "Dickens",
        gender: "female",
        birthday: "1994-11-19",
        email: "rubye_olson@collins.biz",
        phone: "1-410-486-1411x5058"
      },{
        firstName: "Marguerite",
        lastName: "Flatley",
        gender: "female",
        birthday: "1995-05-28",
        email: "wanda_okon@hane.name",
        phone: "572.978.5828x07860"
      },{
        firstName: "Cary",
        lastName: "Schoen",
        gender: "male",
        birthday: "1996-07-31",
        email: "fay@runolfon.biz",
        phone: "1-828-134-7828x66958"
      },{
        firstName: "Mazie",
        lastName: "Gibson",
        gender: "female",
        birthday: "1995-09-23",
        email: "doug@roberts.biz",
        phone: "144.038.7351x24117"
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete("Students", null, {});
  }
};
