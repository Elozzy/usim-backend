let express = require("express");
let router = express.Router();
let fetch = require("node-fetch");

router.post("/", (req, res) => {
  const newData = {
    "staff_name": "Danladi Usman",
    "staff_email": "abc@mailer.com",
    "staff_mobile_no": "09089283893",
    "staff_address": "anywhere on earth",
    "staff_role": "Teacher",
    "subjects": ["english", "CRK"],
    "class": "Pry 1",
    "state_of_origin": "Kano",
    "staff_lga": "Kubuwa",
    "password": "password2"
};
  fetch("https://serene-bryce-canyon-32519.herokuapp.com/staff/new-staff", {
    method: "POST",
    body: JSON.stringify(newData),
    headers: { "Content-Type": "application/json" }
  }).then(_res => _res.json())
    .then(json => {
      console.log(json);
      res.json(json);
    }).catch(err=>console.log(err));
});


//you need to name the felid in other other to use req.body.name

module.exports = router;
