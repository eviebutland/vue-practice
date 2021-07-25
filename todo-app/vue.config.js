module.exports = {
  devServer: {
    // create a proxy so that it will swap 'api' for correct path name on dev server
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/'}
      }
    }
  }
}