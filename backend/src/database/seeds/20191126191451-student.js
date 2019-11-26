const faker = require('faker');

module.exports = {
  up: QueryInterface => {
    const students = [];
    for (let index = 0; index < 10; index++) {
      students.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        age: faker.random.number({ min: 18, max: 80 }),
        weight: faker.random.number({ min: 40, max: 150 }),
        height: faker.random.number({ min: 100, max: 200 }),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    return QueryInterface.bulkInsert('students', students, {});
  },

  down: QueryInterface => {
    return QueryInterface.bulkDelete('students', null, {});
  },
};
