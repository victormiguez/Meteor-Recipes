
Template.RecipeDetails.onCreated(function () {
  let self = this;
  self.autorun(() => {
    let recipeId = FlowRouter.getParam('id');
    self.subscribe('singleRecipe', recipeId);
  });
});

Template.RecipeDetails.helpers({
  recipe: () => {
    let recipeId = FlowRouter.getParam('id');
    return Recipes.findOne({_id: recipeId});
  }
});
