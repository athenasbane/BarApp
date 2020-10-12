const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

const Product = require('../models/product.model');
const InputOption = require('../models/inputOptions.model');
const User = require('../models/user.model');

const productIDOne = mongoose.Types.ObjectId();
const productIDTwo = mongoose.Types.ObjectId();
const optionIDOne = mongoose.Types.ObjectId();
const optionIDTwo = mongoose.Types.ObjectId();
const userID = mongoose.Types.ObjectId();

const initialUser = {
  email: 'test@test.com',
  password: 'testpassword',
  _id: userID,
};

const initialOptions = [
  {
    type: 'increment',
    optionTitle: 'Test Option',
    minVol: 0,
    price: 2,
    optionActive: false,
    product: productIDOne,
    _id: optionIDOne,
  },
  {
    type: 'increment',
    optionTitle: 'Test Option 2',
    minVol: 0,
    price: 5,
    optionActive: false,
    product: productIDTwo,
    _id: optionIDTwo,
  },
];

const initialProducts = [
  {
    title: 'Test Product',
    category: 'Test Cat',
    subCategory: 'Test SubCat',
    active: true,
    _id: productIDOne,
  },
  {
    title: 'Test Product 2',
    category: 'Test Cat 2',
    subCategory: 'Test SubCat 2',
    active: true,
    _id: productIDTwo,
  },
];

const authCheckProduct = {
  title: 'Test Product Auth',
  category: 'Test Cat 2',
  subCategory: 'Test SubCat 2',
  active: true,
};

const authCheckOption = {
  type: 'increment',
  optionTitle: 'Test Option Updated',
  minVol: 0,
  price: 6,
  optionActive: false,
  product: productIDOne,
};

beforeEach(async () => {
  await Product.deleteMany({});
  await InputOption.deleteMany({});
  await User.deleteMany({});

  let orderObject = new Product(initialProducts[0]);
  await orderObject.save();
  orderObject = new Product(initialProducts[1]);
  await orderObject.save();
  let optionObject = new InputOption(initialOptions[0]);
  await optionObject.save();
  optionObject = new InputOption(initialOptions[1]);
  await optionObject.save();
  const userObject = new User(initialUser);
  await userObject.save();
});

describe('/Menu Route Tests', () => {
  test('products are returned as json', async () => {
    await api
      .get('/menu')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('returns single product correctly', async () => {
    const response = await api
      .get(`/menu/${productIDOne}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    expect(response.body.title).toBe('Test Product');
  });

  test('products post to work correctly', async () => {
    const response = await api.get('/menu');
    expect(response.body).toHaveLength(initialProducts.length);
  });

  test('get product options', async () => {
    const response = await api
      .get(`/menu/${productIDOne}/option`)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    expect(response.body[0].type).toBe(initialOptions[0].type);
  });

  test('product without auth content is not added', async () => {
    await api.post('/menu').send(initialProducts[0]).expect(403);
  });

  test('product with auth is added', async () => {
    const user = await User.findByCredentials(initialUser.email, initialUser.password);
    const token = await user.generateAuthToken();
    const product = new Product(authCheckProduct);
    await api.post('/menu').set('Authorization', `Bearer ${token}`).send(product).expect(201);
  });

  test('update a product works when authed', async () => {
    const user = await User.findByCredentials(initialUser.email, initialUser.password);
    const token = await user.generateAuthToken();
    const product = new InputOption(authCheckProduct);
    await api
      .patch(`/menu/${optionIDOne}`)
      .set('Authorization', `Bearer ${token}`)
      .send(product)
      .expect(200);
  });

  test('update a product does not work when not authed', async () => {
    const product = new Product(authCheckProduct);
    await api.patch(`/menu/${optionIDOne}`).send(product).expect(403);
  });

  test('update an option works when authed', async () => {
    const user = await User.findByCredentials(initialUser.email, initialUser.password);
    const token = await user.generateAuthToken();
    const option = new InputOption(authCheckOption);
    await api
      .patch(`/menu/option/${optionIDOne}`)
      .set('Authorization', `Bearer ${token}`)
      .send(option)
      .expect(200);
  });

  test('update option does not work when not authed', async () => {
    const option = new InputOption(authCheckOption);
    await api.patch(`/menu/option/${optionIDOne}`).send(option).expect(403);
  });

  test('delete product works when authed', async () => {
    const user = await User.findByCredentials(initialUser.email, initialUser.password);
    const token = await user.generateAuthToken();
    const product = new Product(authCheckProduct);
    await api
      .delete(`/menu/${productIDOne}`)
      .set('Authorization', `Bearer ${token}`)
      .send(product)
      .expect(200);
  });

  test('delete product does not work when not authed', async () => {
    const product = new Product(authCheckProduct);
    await api.patch(`/menu/${productIDOne}`).send(product).expect(403);
  });

  test('delete option works when authed', async () => {
    const user = await User.findByCredentials(initialUser.email, initialUser.password);
    const token = await user.generateAuthToken();
    const option = new InputOption(authCheckOption);
    await api
      .delete(`/menu/${optionIDOne}`)
      .set('Authorization', `Bearer ${token}`)
      .send(option)
      .expect(200);
  });

  test('delete option does not work when not authed', async () => {
    const option = new InputOption(authCheckOption);
    await api.patch(`/menu/${optionIDOne}`).send(option).expect(403);
  });

  afterAll(() => {
    mongoose.connection.close();
  });
});
