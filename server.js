var express = require('express');
var status = require('http-status');
var users = require('./users');

var createServer = function(port) {
  var app = express();

  app.get('/user/:user', function(req, res) {
    if (users.list.indexOf(req.params.user) === -1) {
      return res.status(status.NOT_FOUND).json({ error: 'Not Found' });
    }
    res.json({ user: req.params.user });
  });

  return app.listen(port);
};

module.exports = createServer;