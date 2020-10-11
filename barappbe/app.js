const express = require('express');
const app = require('express')();
const mongoose = require('mongoose');
const productRouter = require('./routers/product/product.router');
const userRouter = require('./routers/user/user.router');
const tablesRouter = require('./routers/table/table.router');
const orderRouter = require('./routers/order/order.router').router;
const { PORT, MONGO_URI } = require('./constants');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.set('socketio', io);

app.use(express.json());
app.use(productRouter, userRouter, tablesRouter, orderRouter);

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database Connected');
});

if(!module.parent) {
    server.listen(PORT, () => console.log(`Express is up on Port: ${PORT}`));
}

module.exports = app;