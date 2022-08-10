import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  request: {},
  initialState: {},
  model: {},
  layout: {
    locale: true,
    ...defaultSettings,
  },
  locale: {
    default: 'en-US',
    antd: true,
    baseNavigator: true,
  },
  targets: {},
  routes,
  access: {},
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  fastRefresh: true,
  presets: ['umi-presets-pro'],
  analytics: {
    ga: 'G-1TNQLBFGEE',
  }
});
