import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 3005, // API will run on port 3005 by default
  nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;