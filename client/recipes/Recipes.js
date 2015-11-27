Template.Recipes.onCreated(function () {
  let self = this;
  self.autorun(() => {
    self.subscribe('recipes', Meteor.userId());
  });
});

Template.Recipes.helpers({
  recipes: () => {
    return Recipes.find({});
  }
});
