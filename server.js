var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/store', function (req, res, next) {
    console.log('Jestem pośrednikiem przy żądaniu do/store');
    next();

});

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

app.get('/first-template', function (req, res) {
    res.render('first-template');
});

app.get('/header', function (req, res) {
    res.render('header');
})

app.get('/content', function (req, res) {
    res.render('content');
});

app.get('/auth/google', function (req, res) {
    res.render('login');
});

app.get('/logged', function (req, res) {

    res.render('logged', {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    });

});

app.get('/dynamic-view', function (req, res) {
    res.render('dynamic', {
        name: "Moja dynamiczna strona",
        url: "http://www.google.com"
    });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, ale nie znaleźliśmy tego czego żądasz');
});