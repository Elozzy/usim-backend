var express = require('express');
var router = express.Router();

let passort = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let fetch = require('node-fetch');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', (req, res, next) => {
  fetch('https://serene-bryce-canyon-32519.herokuapp.com/staff/new-staff', {
    method: 'post',
    body: JSON.stringify(body),
    headers: {'Content-Type' : 'application/json'}
  })
  .then(res => res.json())
  .then (json => console.log(json));
});




module.exports = router;
