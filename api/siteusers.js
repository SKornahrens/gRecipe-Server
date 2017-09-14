const express = require('express');

const router = express.Router();
const queries = require('../db/siteuser_queries')

function isValidID(req, res, next ) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

function validSiteuser(siteuser) {
  const hasFirst = typeof siteuser.first_name == 'string' && siteuser.first_name.trim() != '';
  const hasLast = typeof siteuser.last_name == 'string' && siteuser.last_name.trim() != '';
  return hasFirst && hasLast;
}

router.get('/', (req, res) => {
  queries.getAll().then(user => {
    res.json(user)
  });
});

router.get('/:id', isValidID, (req, res, next) => {
    queries.getOne(req.params.id).then(user => {
      if(user) {
        res.json(user);
      }
      else {
        res.status(404);
        next();
      }
  });
});

router.post('/', (req, res, next) => {
  if(validSiteuser(req.body)) {
    queries.create(req.body).then(user => {
      res.json(user[0])
    })
  } else {
    next(new Error('Invalid siteuser'));
  }
})

router.put('/:id', isValidID, (req, res, next) => {
  if(validSiteuser(req.body)) {
    queries.update(req.params.id, req.body).then(userDetails => {
      res.json(userDetails[0])
    })
  } else {
    next(new Error('Invalid siteuser'));
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
