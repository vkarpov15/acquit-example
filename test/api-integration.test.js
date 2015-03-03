var assert = require('assert');
var superagent = require('superagent');
var server = require('../server');
var users = require('../users');
var status = require('http-status');

describe('/user', function() {
  var app;

  before(function() {
    app = server(3000);
  });

  after(function() {
    app.close();
  });

  /**
   *  In addition to parsing the test contents and code, acquit
   *  also pulls the comments out for you. Comments can use
   *  _markdown_.
   */
  it('returns username if name param is a valid user', function(done) {
    users.list = ['test'];
    superagent.get('http://localhost:3000/user/test').end(function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, status.OK);
      var result = JSON.parse(res.text);
      assert.deepEqual({ user: 'test' }, result);
      done();
    });
  });

  /**
   *  Acquit also has a handy `acquit.trimEachLine()` function that
   *  strips out the asterisks and extra spacing in JSDoc-style
   *  comments. That way, your comments can be readable in code as
   *  well as in markdown, jade, or whatever your output format of
   *  choice is.
   */
  it('returns 404 if user named `params.name` not found', function(done) {
    users.list = ['test'];
    superagent.get('http://localhost:3000/user/notfound').end(function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, status.NOT_FOUND);
      var result = JSON.parse(res.text);
      assert.deepEqual({ error: 'Not Found' }, result);
      done();
    });
  });
});
