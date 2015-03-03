acquit-example
==============

This is an example of using acquit to generate a README

<img src="http://i.imgur.com/ZddDl4c.jpg" />


## /user

#### It returns username if name param is a valid user


In addition to parsing the test contents and code, acquit
also pulls the comments out for you. Comments can use
_markdown_.


```javascript
    
    users.list = ['test'];
    superagent.get('http://localhost:3000/user/test').end(function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, status.OK);
      var result = JSON.parse(res.text);
      assert.deepEqual({ user: 'test' }, result);
      done();
    });
  
```

#### It returns 404 if user named `params.name` not found


Acquit also has a handy `acquit.trimEachLine()` function that
strips out the asterisks and extra spacing in JSDoc-style
comments. That way, your comments can be readable in code as
well as in markdown, jade, or whatever your output format of
choice is.


```javascript
    
    users.list = ['test'];
    superagent.get('http://localhost:3000/user/notfound').end(function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, status.NOT_FOUND);
      var result = JSON.parse(res.text);
      assert.deepEqual({ error: 'Not Found' }, result);
      done();
    });
  
```

