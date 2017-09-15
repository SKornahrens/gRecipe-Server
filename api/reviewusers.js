const express = require('express');

const router = express.Router();
const queries = require('../db/reviewuser_queries')

function isValidID(req, res, next ) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid review-user'));
}

function validReviewUser(review) {
  const hasUserID = typeof review.user_id == 'number';
  const hasReviewID = typeof review.review_id == 'number';
  return hasUserID && hasReviewID;
}

router.get('/', (req, res) => {
  queries.getAll().then(review => {
    res.json(review)
  });
});

router.get('/:id', isValidID, (req, res, next) => {
    queries.getOne(req.params.id).then(review => {
      if(review) {
        res.json(review[0]);
      }
      else {
        res.status(404);
        next();
      }
  });
});

router.post('/', (req, res, next) => {
  if(validReviewUser(req.body)) {
    queries.create(req.body).then(review => {
      res.json(review[0])
    })
  } else {
    next(new Error('Invalid review'));
  }
})

router.put('/:id', isValidID, (req, res, next) => {
  if(validReviewUser(req.body)) {
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
