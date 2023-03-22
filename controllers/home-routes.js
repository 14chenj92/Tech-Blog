const router = require('express').Router();
const { Post, Comment } = require('../models');

// homepage route
router.get('/', async (req, res) => {
  try {
    const postdata = await Post.findAll({
      include: [
        {
          model: Comment,
          attributes: ['description'],
        },
      ],
    });

    const posts = postdata.map((post) =>
      post.get({ plain: true })
    );
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post
router.get('/post/:id', async (req, res) => {
  try {
    const postIDdata = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'description',
            'user_id',
            'post_id',
          ],
        },
      ],
    });
    const post = postIDdata.get({ plain: true });
    res.render('post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post
router.get('/post/:id', async (req, res) => {
  try {
    const postIDdata = await Post.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });
    res.render('painting', { painting, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
