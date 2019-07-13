// jshint esversion:6
import  express from './node_modules/express';
import  path from 'path';
import  open from './node_modules/open';
import  webpack from './node_modules/webpack';

import config from '../webpack.config.dev';


const  port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('./node_modules/webpack-dev-middleware')(compiler,{
    noInfo:true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html')); //declare routing 
});

app.listen(port, function(err){ //tell express to listen to the port provided above
    if(err){  
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});