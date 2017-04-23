const Notebook = require('express-notebook');


/**
 * A wrapper around express-notebook.
 *
 * @param {Object} [app] - An Express app object. Optional - only needed when loading routes.
 */
module.exports = (app) => {
  return new Notebook({
    app,

    // Look for posts and data.json here. A directory relative to the project root directory.
    postsDir: 'posts',

    // The URL path where we'll make posts available.
    urlPath: '/posts',

      /**
       * The template where we'll dump the post HTML. Should contain a `post` variable that's rendered
       * unescaped.
       */
    template: 'post'
  });
};
