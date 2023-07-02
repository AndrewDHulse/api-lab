var express = require('express');
var router = express.Router();

const API_URL = `https://api.chucknorris.io/jokes`


//api request setup
router.get('/', async function(req, res, next){
  const chuckData = await fetch(`${API_URL}/random`)
    .then (res => res.json())
    res.render('index',{chuckData});
});


module.exports = router;
