var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/conn_data');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=> {
  res.render('landing');
});

app.get('/connectify', (req, res)=> {
  var connectify = [
    { name: 'Aman', image: 'https://farm6.staticflickr.com/5205/5364423851_bd43f15163.jpg' },
    { name: 'Vivek', image: 'https://farm7.staticflickr.com/6162/6248576331_1736ee24d9.jpg' },
    { name: 'Prasun', image: 'https://farm4.staticflickr.com/3772/11980735844_b4d0c9b898.jpg' },
    { name: 'Prasun', image: 'https://farm7.staticflickr.com/6216/6280927629_9c56d970b8.jpg' },

  ];
  res.render('connectify', { connectify });
});

app.post('/connectify', (req, res)=> {
  res.send('hi this is post route');
});

app.get('/connectify/new', (req, res)=> {
  res.render('new');
});

app.listen('3000', ()=> {
  console.log('app is running on port 3000');
});
