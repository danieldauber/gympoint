import faker from 'faker';
import { factory } from 'factory-girl';

import Student from '../src/app/models/Student';

factory.define('Student', Student, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  age: faker.random.number({ min: 18, max: 80 }),
  weight: faker.random.number({ min: 40, max: 150 }),
  height: faker.random.number({ min: 100, max: 200 }),
  created_at: new Date(),
  updated_at: new Date(),
});

export default factory;
