'use strict';


function router(app) {
  app.get('/',  (req, res, next) => {
    res.render('index');
  });
}

module.exports = router;
