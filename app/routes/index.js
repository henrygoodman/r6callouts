var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/map_selected', (req, res) => {
  var imagePath = [];
  fs.readdir('public/images', function (err, files) {
    if (err) {
      return console.log("error");
    }
    files.forEach(function (file) {
      if (file.includes(req.body.map)) {
        imagePath.push("images/" + file);
      }
    });
    res.render('index', {map: req.body.map, images: imagePath, floorCount: imagePath.length})
  });
});


module.exports = router;
