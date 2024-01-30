const router = require('express').Router();

const User = require('../model/user.model');
const {passwordHash, jwt_token} = require('../functions/sercurityFunctions');

//* registration API
router.route('/add').post(async (req, res) => {
  const name = req.body.name;
  const password = await passwordHash(req.body.password);

  console.log('this req is hitting: ', name, password);

  try {
    const userNameExists = await User.findOne({name});

    // check duplicate user
    if (!userNameExists) {
      const newUser = new User({
        name,
        password,
      });

      console.log('sending to server: ', newUser);

      const token = jwt_token(newUser._id);

      await newUser
        .save()
        .then(() => res.json({token: token}))
        .catch(error =>
          res.status(401).json('error adding new user: ', error.message),
        );
    } else {
      res.status(401).json('duplicate user!');
    }
  } catch (error) {
    console.log('error finding duplicate user!', error);
  }
});

module.exports = router;
