// const request = require('supertest');
// const app = require('../app');
// describe('Test menu routes', () => {
//     it('has the endpoint get "/menu"', (done) => {
//         request(app).get('/menu')
//         .expect(200, done)
//     });
//     it('has end point post "/menu"', (done) => {
//         request(app).post('/menu')
//         .expect(403, done)
//     });
// });

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

describe('order route', () => {
    describe('GET /order', () => {
        it('should get all product records', done => {
            chai.request(app)
                .get('/order')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    })
})
