Meteor.subscribe('recipes', Meteor.userId());

Template.Recipes.helpers({
  recipes: () => {
    return Recipes.find({});
  }
});
