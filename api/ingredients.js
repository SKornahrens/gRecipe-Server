const express = require('express');

const router = express.Router();
const queries = require('../db/ingredient_queries')

function isValidID(req, res, next ) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ingredient'));
}

function validIngredient(ingredient) {
  const hasID = typeof ingredient.ingredient_id == 'integer' && ingredient.ingredient_id.trim() != '';
  const hasName = typeof ingredient.name == 'string' && ingredient.name.trim() != '';
  return hasID && hasName;
}

router.get('/', (req, res) => {
  queries.getAll().then(ingredient => {
    res.json(ingredient)
  });
});

router.get('/:id', isValidID, (req, res, next) => {
    queries.getOne(req.params.id).then(ingredient => {
      if(ingredient) {
        res.json(ingredient);
      }
      else {
        res.status(404);
        next();
      }
  });
});

router.post('/', (req, res, next) => {
  if(validIngredient(req.body)) {
    queries.create(req.body).then(ingredient => {
      res.json(ingredient[0])
    })
  } else {
    next(new Error('Invalid ingredient'));
  }
})

router.put('/:id', isValidID, (req, res, next) => {
  if(validIngredient(req.body)) {
    queries.update(req.params.id, req.body).then(ingredientDetails => {
      res.json(ingredientDetails[0])
    })
  } else {
    next(new Error('Invalid ingredient'));
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
