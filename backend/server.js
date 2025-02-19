const express = require('express')
const app=express()
const mongoose = require('mongoose');
const Event = require('./models/event');// the event.js file

// Replace <username>, <password>, and <dbname> with your actual credentials
const dbURL = 'mongodb://localhost:27017/FirstDB?retryWrites=true&w=majority';

app.set('view engine', 'ejs');

app.get('/',(req,res) =>{
    res.send("Hello world!");
});


app.get('/events-create', (req, res) => {
        res.render('form', { title: 'All event'});
  })

app.post('/submit-event', (req, res) => {
    console.log(req.body); 
    const event = new Event(req.body);
    event.save()
      .then((result) => {
        res.redirect('/');
      })
      .catch((err) => {
        console.error(err);
      });
  });



mongoose
  .connect(dbURL)
  .then((result) => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB:', err);
  });

  var db = mongoose.createConnection('localhost', 'test');

  app.get('/home',(req,res) =>{
    var schema = mongoose.Schema({ name: 'string' });
    var Cat = db.model('Cat', schema);
    module.exports = Cat; // this is what you want

    res.send("This home page");
});

app.listen(4300, () => {
    console.log('Server started on port 4300');
});

