const request = require('supertest');
const app = require('../app');

describe('test user routes function as expected', () => {
    it('should have a get "/user"', (done) => {
        request(app).get('/user')
        .expect(200, done)
    });
    it('should have a post "/user"', (done) => {
        request(app).post('/user')
        .expect(200, done)
    });
});