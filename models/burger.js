'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    burgerName: DataTypes.STRING,
    devoured: 
      {
        type: DataTypes.BOOLEAN,
        defaultValue: false;
      }
  }, {

    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true,
    freezeTableName: true,

    // define the table's name
    tableName: 'burgers',

    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Burger.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }          
        })
      }
    }
  });
  return Burger;
};