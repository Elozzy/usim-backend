let express = require('express');
let router = express.Router();
let fetch = require('node-fetch');

router.post('/register', (req, res, next) => {
    fetch('https://serene-bryce-canyon-32519.herokuapp.com/staff/new-staff', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {'Content-Type' : 'application/json'}
    })
    .then(res => res.json())
    .then (json => console.log(json));
  });