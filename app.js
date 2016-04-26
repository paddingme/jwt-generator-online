var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use('/index.html', express.static('index.html'))



app.post('/token', function(req, res) {

    console.log('hahahah')


    var payload = req.body.payload;
    var privateKey = req.body.privateKey;
    var expiresIn = req.body.expiresIn;

    console.log(payload + '0000')
    var token = jwt.sign(payload, privateKey, { expiresIn: expiresIn });

    console.log(token + 'token')
    res.json({ token: 'bearer ' + token })
})



app.listen(4002, function() {
    console.log('jwt generator app is listening on port 4002!');
});
