module.exports = function(sequelize, DataTypes) {
  // Add code here to create a Post model
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining
  var Post = sequelize.define("Todo", {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    category: DataTypes.STRING
  });
  return Post;
};

var Post2 = sequelize.define("Todo", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 260]
    }
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [1, 1000]
    }
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: Miscellaneous,
    validate: {
      len: [0, 100]
    }
  }
});
return Post2;

