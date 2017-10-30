const notebook = require('../utils/notebook')();


function router(app) {
  app.get('/',  (req, res) => {
    res.render('index', {
      posts: notebook.getPostData()
    });
  });
}

module.exports = router;
