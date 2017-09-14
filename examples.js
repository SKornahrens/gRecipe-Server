db("user")
.select("ingredient.name as ingredient", "user.name")
.join("review", "user.id", "review.user_id")
.join("recipe", "recipe.id", "review.recipe_id")
.join("recipe_ingredient", "recipe.id", "recipe_ingredient.recipe_id")
//below grabs just the ingredient and the user
.then((data) => {
  var user = {}
  data.forEach((row) => {
    if (!users[row.user]) {
      users[row.user] = []
    }
    user[row.user].push(row.ingredient)
  })
  for (var user in users) {
    console.log(user, users[user])
    users[user] = _.uniq(users[user])
  }
})

.then((data) => {
  console.log(data);
})

_. is lodash, must be npm installed

Promise.all([
  db("recipe"),
  db("step"),
])
  .then((data) => {
    var recipes = data[0]
    var steps = data[1]
    var recipeswithsteps = {}
    for (var recipe of recipes) {
      for (var step of steps) {
        if (recipe.id === step.recipe_id) {
          recipe.steps.push(step)
        }
      }
    }
    console.log(recipes);
  })
