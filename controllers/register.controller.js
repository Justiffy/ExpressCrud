const UserAuth = require('../models/userAuth.model');

exports.register = (req, res, next) => {
  const user = new UserAuth({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  user.save((err) => {
    if (err) {
      if (err.name === 'ValidationError') {
        return res.status(422).send(err);
      }
      return next(err);
    }
    res.send('User register succssfully');
  });
};
