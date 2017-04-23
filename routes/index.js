function router(app) {
  app.get('/',  (req, res, next) => {
    res.render('index');
  });

  // TODO: Use some actual blogging software.
  app.get('/htwfip', (req, res, next) => {
    res.render('htwfip');
  });
}

module.exports = router;
