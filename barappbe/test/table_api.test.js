const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const Table = require('../models/table.model');
const User = require('../models/user.model');

const tableIDOne = mongoose.Types.ObjectId();
const tableIDTwo = mongoose.Types.ObjectId();
const userID = mongoose.Types.ObjectId();

const initialUser = {
    email: 'test@test.com',
    password: 'testpassword',
    _id: userID
};

const initialTable = [
    {
        tableNum: 1,
        tableActive: true,
        _id: tableIDOne
    },
    {
        tableNum: 2,
        tableActive: true,
        _id: tableIDTwo
    },
];

beforeEach(async () => {
    await Table.deleteMany({})
    await User.deleteMany({});
    let tableObject = new Table(initialTable[0]);
    await tableObject.save();
    tableObject = new Table(initialTable[1]);
    await tableObject.save();
    let userObject = new User(initialUser);
    await userObject.save();
});

describe('/table route', () => {
    test('gets tables in JSON correctly', async () => {
        const response = await api
            .get('/tables')
            .expect(200)
            .expect('Content-Type', /application\/json/);

        expect(response.body[0].tableNum).toBe(1);
    });

    test('set tables works when authed', async () => {
        const user = await User.findByCredentials(initialUser.email, initialUser.password);
        const token = await user.generateAuthToken();
        const response = await api
            .post('/tables/set')
            .set('Authorization', `Bearer ${token}`)
            .send(initialTable)
            .expect(201)
            .expect('Content-Type', /application\/json/);

        expect(response.body[0].tableNum).toBe(1)
    });

    test('set tables does not work when not authed', async () => {
        await api
            .post('/tables/set')
            .send(initialTable)
            .expect(403)
            .expect('Content-Type', /application\/json/);
    });

    afterAll(() => {
        mongoose.connection.close();
    });
})