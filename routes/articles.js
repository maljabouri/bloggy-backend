// Require necessary NPM Packages
const express = require('express')

// Require Mongoose Model
const Article = require('./../models/article')

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

/**
 * Action:        INDEX
 * Method:        GET
 * URI:           /api/articles
 * Description:   Get All Articles
 */
router.get('/api/articles',(req, res) => {
  Article.find()
  // Return all Articles as an Array
  .then((articles) => {
    res.status(200).json({ articles: articles })
  })
  // Catch any errors that might occur
  .catch((error) => {
    res.status(500).json({ error: error })
  })
})


/**
 * Action:        SHOW
 * Method:        GET
 * URI:           /api/articles/5d664b8b68b4f5092aba18e9
 * Description:   Get an Article by Article ID * 
 */

/**
 * Action:        DESTROY
 * Method:        DELETE
 * URI:           /api/articles/5d664b8b68b4f5092aba18e9
 * Description:   Delete an Article by Article ID
 */


/**
 * Action:        UPDATE
 * Method:        PATCH/PUT
 * URI:           /api/articles/5d664b8b68b4f5092aba18e9
 * Description:   Update an Article by Article ID
 */

/**
 * Action:        CREATE
 * Method:        POST
 * URI:           /api/articles
 * Description:   Create a new Article
 */

router.post('/api/articles', (req, res) => {
  Article.create(req.body.article)
  // On a successfull `create` action, respond with 201
  // HTTP status and the conent of the new Article.
  .then((newArticle) => {
    res.status(201).json({ article: newArticle });
  })
  // Catch any error that might occur
  .catch((error) => {
    res.status(500).json({ error: error });
  });
});


// Export the Router so we can use it in the `server.js` file
module.exports = router;