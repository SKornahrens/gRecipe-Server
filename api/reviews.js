const express = require('express');

const router = express.Router();
const queries = require('../db/review_queries')

function isValidID(req, res, next ) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid review'));
}

function validReview(review) {
  const hasID = typeof review.review_id == 'integer' && review.review_id.trim() != '';
  const hasContent = typeof review.content == 'string' && review.content.trim() != '';
  return hasID && hasContent;
}

router.get('/', (req, res) => {
  queries.getAll().then(review => {
    res.json(review)
  });
});

router.get('/:id', isValidID, (req, res, next) => {
    queries.getOne(req.params.id).then(review => {
      if(review) {
        res.json(review);
      }
      else {
        res.status(404);
        next();
      }
  });
});

router.post('/', (req, res, next) => {
  if(validReview(req.body)) {
    queries.create(req.body).then(review => {
      res.json(review[0])
    })
  } else {
    next(new Error('Invalid review'));
  }
})

router.put('/:id', isValidID, (req, res, next) => {
  if(validReview(req.body)) {
    queries.update(req.params.id, req.body).then(reviewDetails => {
      res.json(reviewDetails[0])
    })
  } else {
    next(new Error('Invalid review'));
  }
})

router.delete('/:id', isValidID, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      delete: true
    })
  })
})

module.exports = router;
