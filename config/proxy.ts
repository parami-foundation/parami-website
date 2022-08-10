
export default {
  dev: {
    '/api/': {
      target: 'https://parami.io',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  test: {
    '/api/': {
      target: 'https://parami.io',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'https://parami.io',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
