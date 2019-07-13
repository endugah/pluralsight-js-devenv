// jshinnt esversion:6
import  webpack from 'webpack';
import path from 'path';

export default {
  debug: true,  //enable debugging info as we run our build
  devtool: 'inline-source-map',
  noInfo: false, //turned off since it adds alot of noise during development
  entry: [   
    path.resolve(__dirname, 'src/index') //you can pass webpack in array of entry points
  ],
  target: 'web', //we are targeting the web
  output: {  
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [], //define plugins to enhance webpack power,e.g hot-reloading,linting e.t.c
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
};