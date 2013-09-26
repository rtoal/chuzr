module.exports = function (app) {

  app.get('/', function(req, res) {
    res.render('login', {title: 'Login'});
  });
  
  app.get('/home', function(req, res) {
    res.render('index', {title: 'Chuzr Home'});
  });
  
}
