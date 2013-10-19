var express = require('express'),
    http = require('http'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    cors = require('cors');

console.log('Configuring the Chuzr API');
var env = process.env.NODE_ENV || 'development',
    config = require('./config/config')[env],
    app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(cors());
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

// if(app.get('env') === 'test') {
//   app.use(express.basicAuth(function(user, pass) {
//     return user === 'testUser' && pass === 'testPass';
//   }));
// }

console.log('Connecting to Mongo at %s', config.db)
mongoose.connect(config.db);

console.log('Loading models')
fs.readdirSync(__dirname + '/models').forEach(function (file) {
  if (file.match('.js$')) {
    require(__dirname + '/models/' + file);
  }
});

console.log('Loading controllers')
fs.readdirSync(__dirname + '/controllers').forEach(function (file) {
  if (file.match('.js$')) {
    require(__dirname + '/controllers/' + file)(app);
  }
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Chuzr API running on port %s, environment=%s', app.get('port'), env);
});
