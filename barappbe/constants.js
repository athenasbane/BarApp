const { PORT } = process.env;
const { JWT_SECRET } = process.env;
let { MONGO_URI } = process.env;

if (process.env.NODE_ENV === 'test') {
  MONGO_URI = process.env.MONGO_URI_TEST;
}

module.exports = {
  PORT,
  MONGO_URI,
  JWT_SECRET,
};
