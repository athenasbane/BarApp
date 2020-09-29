const request = require('supertest');
const app = require('../app');
describe('Test menu routes', () => {
    it('has the endpoint get "/menu"', (done) => {
        request(app).get('/menu')
        .expect(200, done)
    });
    it('has end point post "/menu"', (done) => {
        request(app).post('/menu')
        .expect(200, done)
    });
});
