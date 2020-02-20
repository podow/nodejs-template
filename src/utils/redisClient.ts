const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient(Number(process.env.REDIS_PORT), 'redis');

module.exports = {
  ...client,
  getAsync: promisify(client.get).bind(client),
  setAsync: promisify(client.set).bind(client),
  keysAsync: promisify(client.keys).bind(client),
};