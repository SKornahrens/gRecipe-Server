const express = require('express');

const router = express.Router();
const queries = require('../db/recipesteps_queries')

function isValidID(req, res, next ) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid recipestep'));
}

function validRecipestep(recipestep) {
  const hasRecipeId = typeof recipestep.recipe_id == 'number';
  const hasStepNum = typeof recipestep.step_num == 'number';
  const hasStepDirection = typeof recipestep.step_direction == 'string' && recipestep.step_direction.trim() != '';
  return hasRecipeId && hasStepNum && hasStepDirection;
}

router.get('/', (req, res) => {
  queries.getAll().then(recipestep => {
    res.json(recipestep)
  });
});

router.get('/:id', isValidID, (req, res, next) => {
    queries.getOne(req.params.id).then(recipestep => {
      if(recipestep) {
        res.json(recipestep);
      }
      else {
        res.status(404);
        next();
      }
  });
});

router.post('/', (req, res, next) => {
  if(validRecipestep(req.body)) {
    queries.create(req.body).then(recipestep => {
      res.json(recipestep[0])
    })
  } else {
    next(new Error('Invalid recipestep'));
  }
})

router.put('/:id', isValidID, (req, res, next) => {
  if(validRecipestep(req.body)) {
    queries.update(req.params.id, req.body).then(recipestepDetails => {
      res.json(recipestepDetails[0])
    })
  } else {
    next(new Error('Invalid recipestep'));
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
