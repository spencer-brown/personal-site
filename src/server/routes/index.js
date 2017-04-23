const notebook = require('../utils/notebook')();


function router(app) {
  app.get('/',  (req, res, next) => {
    res.render('index', {
      posts: notebook.getPostData()
    });
  });
}

module.exports = router;
