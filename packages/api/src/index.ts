import app from './app';
import config from './config';

const { port, nodeEnv } = config;

app.listen(port, () => {
  console.log(`API Server is running on http://localhost:${port} in ${nodeEnv} mode`);
});