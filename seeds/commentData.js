const { Comment } = require('../models');

const commentData = [
  {
    description:
      'Branches with pink apricot blossoms against a blue background.',
  },
];

const seedcomments = () => Comment.bulkCreate(commentData);

module.exports = seedcomments;
