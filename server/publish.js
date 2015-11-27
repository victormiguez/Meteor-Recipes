Meteor.publish('recipes', (userId) => {
  return Recipes.find({author: userId});
});

Meteor.publish('singleRecipe', (recipeId) => {
  check(recipeId, String);
  return Recipes.find({_id: recipeId});
});
