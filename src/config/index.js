import { devConfig } from './dev.js';
import { proConfig } from './pro.js';
const config = {};
if (process.env.NODE_ENV === 'development') {
  Object.assign(config, devConfig);
} else if (process.env.NODE_ENV === 'production') {
  Object.assign(config, proConfig);
}

export { config };
