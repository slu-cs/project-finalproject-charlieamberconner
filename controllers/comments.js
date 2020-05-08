const Comment = require('../models/comments');

module.exports.retrieve = function(request, response, next) {
  Comment.find({ list: request.query.list})
    .then(lists => response.render('lists/comments', {comments: comments}))
    .catch(error => next(error));
};
