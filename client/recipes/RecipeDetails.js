Template.RecipeDetails.onCreated(function () {
  let self = this;
  self.autorun(() => {
    self.subscribe('recipes', Meteor.userId());
  });
});

Template.RecipeDetails.helpers({
  recipe: () => {
    let recipeId = FlowRouter.getParam('id');
    return Recipes.findOne({_id: recipeId});
  }
});
