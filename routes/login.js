let express = require('express');
let router = express.Router();

//Get Login page

router.get('/', (req, res, next) => {
    res.render('login', {title: 'login'})
} );



nodule.exports = router;