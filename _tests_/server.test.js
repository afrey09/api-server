'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('API Server', () => {
  it('handles the root path', async () => {
    const response = await mockRequest.get('/invalid');
    expect(response.status).toEqual(404);
  });

  it('handles invalid methods', async () => {
    const response = await mockRequest.post('/invalid');
    expect(response.status).toEqual(404);
  });
});
