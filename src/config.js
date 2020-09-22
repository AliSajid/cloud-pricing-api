const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });
dotenv.config();

const pino = require('pino');

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  prettyPrint: process.env.NODE_ENV !== 'production',
});

const config = {
  logger,
  port: process.env.PORT || 4000,
  mongoDbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/cloudPricing',
};

module.exports = config;
