const express = require('express');

const router = express.Router();
const queries = require('../db/ingredientrecipe_queries')

function isValidID(req, res, next ) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ingredientrecipe'));
}

function validIngredientRecipe(ingredientrecipe) {
  const hasrecipeID = typeof ingredientrecipe.recipe_id == 'number';
  const hasingredientID = typeof ingredientrecipe.ingredient_id == 'number';
  return hasrecipeID && hasingredientID;
}

router.get('/', (req, res) => {
  queries.getAll().then(ingredientrecipe => {
    res.json(ingredientrecipe)
  });
});

router.get('/:id', isValidID, (req, res, next) => {
    queries.getOne(req.params.id).then(ingredientrecipe => {
      if(ingredientrecipe) {
        res.json(ingredientrecipe);
      }
      else {
        res.status(404);
        next();
      }
  });
});

router.post('/', (req, res, next) => {
  if(validIngredientRecipe(req.body)) {
    queries.create(req.body).then(ingredientrecipe => {
      res.json(ingredientrecipe[0])
    })
  } else {
    next(new Error('Invalid ingredientrecipe'));
  }
})

router.put('/:id', isValidID, (req, res, next) => {
  if(validIngredientRecipe(req.body)) {
    queries.update(req.params.id, req.body).then(ingredientrecipe => {
      res.json(ingredientrecipe[0])
    })
  } else {
    next(new Error('Invalid ingredientrecipe'));
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
