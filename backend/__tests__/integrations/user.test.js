import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able to login', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'admin@gympoint.com',
        password: '123456',
      });

    expect(response.body).toHaveProperty('user');
  });
});
