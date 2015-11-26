Meteor.publish('recipes', (userId) => {
  return Recipes.find({author: userId});
});
