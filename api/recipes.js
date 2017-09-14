const express = require('express');

const router = express.Router();
const queries = require('../db/recipe_queries')

function isValidID(req, res, next ) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid Recipe'));
}

function validRecipe(recipe) {
  const hasName = typeof recipe.name == 'string' && recipe.name.trim() != '';
  const hasDescription = typeof recipe.description == 'string' && recipe.description.trim() != '';
  return hasName && hasDescription;
}

router.get('/', (req, res) => {
  queries.getAll().then(recipe => {
    res.json(recipe)
  });
});

router.get('/:id', isValidID, (req, res, next) => {
    queries.getOne(req.params.id).then(recipe => {
      if(recipe) {
        res.json(recipe);
      }
      else {
        res.status(404);
        next();
      }
  });
});

router.post('/', (req, res, next) => {
  if(validRecipe(req.body)) {
    queries.create(req.body).then(recipe => {
      res.json(recipe[0])
    })
  } else {
    next(new Error('Invalid recipe'));
  }
})

router.put('/:id', isValidID, (req, res, next) => {
  if(validRecipe(req.body)) {
    queries.update(req.params.id, req.body).then(recipeDetails => {
      res.json(recipeDetails[0])
    })
  } else {
    next(new Error('Invalid recipe'));
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
