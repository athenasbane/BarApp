const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;
let MONGO_URI = process.env.MONGO_URI;

if (process.env.NODE_ENV === 'test') {
    MONGO_URI = process.env.MONGO_URI_TEST;
} 

module.exports = {
    PORT,
    MONGO_URI,
    JWT_SECRET
}