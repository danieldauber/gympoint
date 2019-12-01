import request from 'supertest';
import redis from 'redis-mock';
import app from '../../src/app';

import truncate from '../util/truncate';
import factory from '../factories';

describe('Student', () => {
  beforeEach(async () => {
    await truncate();

    const bruteStore = redis.createClient();
  });

  it('should be able to create a new student', async () => {
    const student = await factory.attrs('Student');

    const response = await request(app)
      .post('/student')
      .set(
        'Authorization',
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTU3NDgwMjIwOCwiZXhwIjoxNTc1NDA3MDA4fQ.y6hcTzYWhfUlGk-lUEk8oR5sUXkmP_bGT1mYTUPqql4`
      )
      .send(student);

    expect(response.body).toHaveProperty('id');
  });
});
