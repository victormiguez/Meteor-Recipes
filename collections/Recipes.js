Recipes = new Mongo.Collection('recipes');

Recipes.allow({
  insert: (userId, doc) => {
    return !!userId;
  }
});

RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  description: {
    type: String,
    label: 'Description'
  },
  author: {
    type: String,
    label: 'Author',
    autoValue: () => {
      return Meteor.userId();
    },
    autoform: {
      type: 'hidden'
    }
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: () => {
      return new Date();
    },
    autoform: {
      type: 'hidden'
    }
  }
});

Recipes.attachSchema(RecipeSchema);
