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

    return queryInterface.bulkInsert('Students', [{
        first_name: 'Nikolas',
        last_name: 'Friesen',
        gender:'female',
        birthday:'1998-12-24',
        email:'agustina_braun@wintheiser.info',
        phone:'449.8977415',
        createdAt: new Date,
        updatedAt:new Date
      },{
        first_name: 'Randi',
        last_name: 'Halvorson',
        gender:'male',
        birthday:'1997-01-29',
        email:'agustina_braun@wintheiser.info',
        phone:'449.8977415',
        createdAt: new Date,
        updatedAt:new Date
      },{
        first_name: 'Sally',
        last_name: 'Buckridge',
        gender:'female',
        birthday:'1997-10-30',
        email:'agustina_braun@wintheiser.info',
        phone:'449.8977415',
        createdAt: new Date,
        updatedAt:new Date
      },{
        first_name: 'Moris',
        last_name: 'Swift',
        gender:'male',
        birthday:'1995-06-27',
        email:'agustina_braun@wintheiser.info',
        phone:'449.8977415',
        createdAt: new Date,
        updatedAt:new Date
      },{
        first_name: 'Sidney',
        last_name: 'Ortiz',
        gender:'male',
        birthday:'1997-04-04',
        email:'agustina_braun@wintheiser.info',
        phone:'449.8977415',
        createdAt: new Date,
        updatedAt:new Date
      },{
        first_name: 'Reid',
        last_name: 'Skiles',
        gender:'male',
        birthday:'1994-10-13',
        email:'agustina_braun@wintheiser.info',
        phone:'449.8977415',
        createdAt: new Date,
        updatedAt:new Date
      },{
        first_name: 'Violet',
        last_name: 'Dickens',
        gender:'female',
        birthday:'1994-11-19',
        email:'agustina_braun@wintheiser.info',
        phone:'449.8977415',
        createdAt: new Date,
        updatedAt:new Date
      },{
        first_name: 'Marguerite',
        last_name: 'Friesen',
        gender:'female',
        birthday:'1998-12-24',
        email:'agustina_braun@wintheiser.info',
        phone:'449.8977415',
        createdAt: new Date,
        updatedAt:new Date
      },{
        first_name: 'Cary',
        last_name: 'Schoen',
        gender:'male',
        birthday:'1998-12-24',
        email:'agustina_braun@wintheiser.info',
        phone:'449.8977415',
        createdAt: new Date,
        updatedAt:new Date
      },{
        first_name: 'Mazie',
        last_name: 'Gibson',
        gender:'female',
        birthday:'1998-12-24',
        email:'agustina_braun@wintheiser.info',
        phone:'449.8977415',
        createdAt: new Date,
        updatedAt:new Date  
      }], {});


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
