const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);
const Order = require('../models/order.model');
const InputOption = require('../models/inputOptions.model');
const { priceCalc } = require('../routers/order/order.router');

const optionIDOne = mongoose.Types.ObjectId();
const optionIDTwo = mongoose.Types.ObjectId();
const orderIDOne = mongoose.Types.ObjectId();
const orderIDTwo = mongoose.Types.ObjectId();

const initialOptions = [
  {
    type: 'increment',
    optionTitle: 'Test Option',
    minVol: 0,
    price: 2,
    optionActive: false,
    product: mongoose.Types.ObjectId(),
    _id: optionIDOne,
  },
  {
    type: 'increment',
    optionTitle: 'Test Option 2',
    minVol: 0,
    price: 5,
    optionActive: false,
    product: mongoose.Types.ObjectId(),
    _id: optionIDTwo,
  },
];

const initialOrders = [
  {
    orderedItems: [
      {
        title: 'test item',
        subOption: 'Test subOption',
        optionId: optionIDOne,
        volume: 2,
      },
      {
        title: 'test item2',
        subOption: 'Test subOption2',
        optionId: optionIDTwo,
        volume: 2,
      },
    ],
    tableNumber: 1,
    totalPrice: 10,
    delivered: false,
    _id: orderIDOne,
  },
  {
    orderedItems: [
      {
        title: 'test item2',
        subOption: 'Test subOption2',
        optionId: optionIDOne,
        volume: 2,
      },
      {
        title: 'test item2',
        subOption: 'Test subOption2',
        optionId: optionIDTwo,
        volume: 3,
      },
    ],
    tableNumber: 2,
    totalPrice: 15,
    delivered: false,
    _id: orderIDTwo,
  },
];

beforeEach(async () => {
  await Order.deleteMany({});
  await InputOption.deleteMany({});

  let orderObject = new Order(initialOrders[0]);
  await orderObject.save();
  orderObject = new Order(initialOrders[1]);
  await orderObject.save();
  let optionObject = new InputOption(initialOptions[0]);
  await optionObject.save();
  optionObject = new InputOption(initialOptions[1]);
  await optionObject.save();
});

describe('/orders Route Tests', () => {
  test('orders are returned as json', async () => {
    await api
      .get('/order')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('orders get works correctly', async () => {
    const response = await api.get('/order');
    expect(response.body).toHaveLength(initialOrders.length);
  });

  test('order to match stated initial orders', async () => {
    const response = await api.get('/order');
    expect(response.body[0].totalPrice).toBe(10);
  });

  test('order without content is not added', async () => {
    const newOrder = {
      delivered: true,
    };

    await api.post('/order').send(newOrder).expect(500);

    const response = await api
      .get('/order')
      .expect(200)
      .expect('Content-Type', /application\/json/);

    expect(response.body).toHaveLength(initialOrders.length);
  });

  test('priceCalc function works correctly', async () => {
    let result = await priceCalc(initialOrders[0].orderedItems);
    expect(result).toBe(14);
    result = await priceCalc(initialOrders[1].orderedItems);
    expect(result).toBe(19);
  });

  test('Order patch works correctly', async () => {
    await api.patch(`/order/${orderIDOne}`);
    await api.patch(`/order/${orderIDTwo}`);
    const response = await api
      .get('/order')
      .expect(200)
      .expect('Content-Type', /application\/json/);

    expect(response.body[0].delivered).toBe(true);
    expect(response.body[1].delivered).toBe(true);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
