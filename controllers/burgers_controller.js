var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {

  // SOLUTION:
  // =========
  // use the Cat model to find all cats,
  // and use the include option to grab info from the User model.
  // This will let us show the cat and it's owner.
  models.Burger.findAll({
    include: [ models.User ]
  })
  // connect the findAll to this .then
  .then(function(burgers) {
    // grab the user info from our req.
    // How is it in our req?
    // This info gets saved to req via the users_controller.js file.
    res.render('index', {
      user_id: req.session.user_id,
      email: req.session.user_email,
      logged_in: req.session.logged_in,
      burgers: burgers
    })
  })
});