const isProd = process.env.NODE_ENV === 'production'
const withOptimizedImages = require('next-optimized-images');

module.exports =  withOptimizedImages({
  assetPrefix: isProd ? '/clubs/' : ''
})


