const { Post } = require('../models');

const postData = [
  {
    title: 'Printemps',
    description: 'April 20, 2021 07:00:00',
  },
];

const seedposts = () => Post.bulkCreate(postData);

module.exports = seedposts;
