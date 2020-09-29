const mongoose = require('mongoose');
const { MONGO_URI_TEST } = require('../constants');
mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect(MONGO_URI_TEST);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection Error'));
    db.once('open', () => {
        console.log('Database Connected');
        done();
    });
});

after((done) => {
    mongoose.connection.db.dropDatabase(() => {
        mongoose.connection.close(done)
    });
});

