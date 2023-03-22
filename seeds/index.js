const sequelize = require('../config/connection');
const seedposts = require('./postData');
const seedcomments = require('./commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedposts();

  await seedcomments();

  process.exit(0);
};

seedAll();
