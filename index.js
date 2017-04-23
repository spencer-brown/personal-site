const express = require('express');
const app = express();
const notebook = require('./src/server/utils/notebook')(app);


// Set up templating.
app.set('views', `${process.cwd()}/src/server/views`);
app.set('view engine', 'pug');
app.locals.moment = require('moment');

// Set up static file serving.
app.use(express.static('public'));

// Require routes.
require('./src/server/routes')(app);
notebook.setPostRoutes();

// Set up environment variables.
const args = process.argv.slice(2);
// TODO: Figure out a better way to do this with grunt-nodemon.
process.env.ENVIRONMENT = args[0].split('=')[1];

// Set locals for pug.
app.locals.env = {};
app.locals.env[process.env.ENVIRONMENT] = true;

// Start the app.
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('app started. listening on', port);
});
