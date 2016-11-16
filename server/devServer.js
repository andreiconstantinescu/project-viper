const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack.config.dev.js')

new WebpackDevServer(webpack(config), {
  contentBase: './src',
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  quiet: true
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at localhost:3000')
})
