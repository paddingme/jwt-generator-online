var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');

// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/index.html', express.static('index.html'))



app.post('/token', function(req, res) {



    var payload = JSON.parse(req.body.payload);
    var privateKey = req.body.privateKey;
    var expiresIn = '' +req.body.expiresIn;
    var token;



    if(expiresIn && typeof payload === 'object') {
      token = jwt.sign(payload, privateKey, { expiresIn: expiresIn });
    } else {
      token = jwt.sign(payload, privateKey);
    }

    res.json({ token: 'bearer ' + token })
})



app.listen(2651, function() {
    console.log('jwt generator app is listening on port 2651!');
});
