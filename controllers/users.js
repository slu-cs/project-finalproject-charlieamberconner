const User = require('../models/users');


module.exports.index = function(request, response) {
  response.redirect('/users/charlestirrell99')
};

module.exports.retrieve = function(request, response) {
  const query = User.findById(request.params.id);

  Promise.all(query).then(function(user) {
    if (user) {
      response.render('users/index', {user: user});
    } else {
      next(); // No such course
    }
  }).catch(error => next(error));
};
