var express = require('express');

var app = express();


app.get('/', function(req, res){
    console.log('Request on /');
    res.send('helloworld');
})

app.listen(3000, function(){
    console.log('Server listening for connectins on port 3000');
})