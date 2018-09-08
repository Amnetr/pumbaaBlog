module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index/index', { title: 'PumbaaBlog' });
  });
  app.get('/reqTest', function (req, res) {
    res.send('This is PumbaaBlog');
  });
};