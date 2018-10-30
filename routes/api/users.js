const express = require('express');
const User = require('../../models/User');
const router = express.Router();

// router.get('/', (req, res) => res.json({message: "Welcome to User route"}));

router.get('/', (req, res) => {
User.find()
.then(users => {
  res.json(users);
})
.catch(err => console.log(err));
});

//url /api/users/derick
router.get('/:name', (req, res) => {
  const name = req.params.name;
  User.find({ name: name })
  .then(user => res.json(user))
  .catch(err => res.status(500).json({message: err}));
});
  
module.exports = router;