const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', hbs);
app.use(express.static(__dirname + '/img'));

app.use((req, res, next) => {
    console.log('req');
    next();
});

app.get('/', (req, res) =>  {

    res.render('root.hbs');
    console.log('home');
});
app.get('/labs', (req, res) =>  {

    res.render('labs.hbs');
    console.log('labs');
});
app.get('/owners', (req, res) =>  {

    res.render('owners.hbs');
    console.log('owners');
});


app.listen(3000);

