var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');

// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/index.html', express.static('index.html'))



app.post('/token', function(req, res) {


    var payload = req.body.payload;
    var privateKey = req.body.privateKey;
    var expiresIn = req.body.expiresIn;
    var token;

    if(expiresIn) {
      token = jwt.sign(payload, privateKey, { expiresIn: expiresIn });
    } else {
      token = jwt.sign(payload, privateKey);
    }

    res.json({ token: 'bearer ' + token })
})



app.listen(4002, function() {
    console.log('jwt generator app is listening on port 4002!');
});
