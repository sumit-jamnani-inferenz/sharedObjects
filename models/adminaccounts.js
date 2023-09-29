"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class adminAccounts extends Model {
    static associate(models) {
      adminAccounts.belongsTo(models.roles, {
        foreignKey: "roleId",
        as: "role",
        targetKey: "roleId",
      });
      adminAccounts.belongsTo(models.brand, {
        foreignKey: "brandId",
        as: "brand",
        targetKey: "brandId",
      });
      adminAccounts.hasMany(models.shippingAddress, {
        foreignKey: "accountId",
        as: "shippingAddress",
        sourceKey: "adminAccountId",
      });
      // userAccounts.hasMany(models.userActivity, {
      //   foreignKey: "accountId",
      //   as: "userActivity",
      //   sourceKey: "accountId",
      // });
      // userAccounts.hasMany(models.productsPair, {
      //   foreignKey: "accountId",
      //   as: "productsPair",
      //   sourceKey: "accountId",
      // });
      // userAccounts.hasMany(models.userAnswers, {
      //   foreignKey: "accountId",
      //   as: "userAnswer",
      //   sourceKey: "accountId",
      // });
      // userAccounts.hasMany(models.userChoices, {
      //   foreignKey: "accountId",
      //   as: "userChoice",
      //   sourceKey: "accountId",
      // });
      // userAccounts.hasOne(models.userPreferences, {
      //   foreignKey: "accountId",
      //   as: "userPreferences",
      //   sourceKey: "accountId",
      // });
      // userAccounts.hasOne(models.userAvatars, {
      //   foreignKey: "accountId",
      //   as: "userAvatars",
      //   sourceKey: "accountId",
      // });
      // userAccounts.hasMany(models.userWishlists, {
      //   foreignKey: "accountId",
      //   as: "userWishlists",
      //   sourceKey: "accountId",
      // });
      // userAccounts.hasMany(models.cartItems, {
      //   foreignKey: "accountId",
      //   as: "cartItems",
      //   sourceKey: "accountId",
      // });
      // userAccounts.hasMany(models.archivedCartItems, {
      //   foreignKey: "accountId",
      //   as: "archivedCartItems",
      //   sourceKey: "accountId",
      // });
      // userAccounts.hasMany(models.consumerOrders, {
      //   foreignKey: "accountId",
      //   as: "consumerOrders",
      //   sourceKey: "accountId",
      // });
      // userAccounts.hasMany(models.userLobby, {
      //   foreignKey: "accountId",
      //   as: "userLobby",
      //   sourceKey: "accountId",
      // });
      // userAccounts.hasMany(models.lobbyInfo, {
      //   foreignKey: "accountId",
      //   as: "lobbyInfo",
      //   sourceKey: "accountId",
      // });
      // userAccounts.hasMany(models.productReviews, {
      //   foreignKey: "accountId",
      //   as: "productReviews",
      //   sourceKey: "accountId",
      // });
      // userAccounts.hasMany(models.productViews, {
      //   foreignKey: "accountId",
      //   as: "productViews",
      //   sourceKey: "accountId",
      // });
      // userAccounts.hasMany(models.returnReplacementOrders, {
      //   foreignKey: "accountId",
      //   as: "returnReplacementOrders",
      //   sourceKey: "accountId",
      // });
    }
  }
  adminAccounts.init(
    {
      adminAccountId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      roleId: {
        type: DataTypes.UUID,
      },
      mappedUserId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      rzp_customerId: {
        type: DataTypes.TEXT,
      },
      brandId: {
        type: DataTypes.UUID,
      },
      accountName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      accountEmail: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      accountContact: {
        type: DataTypes.TEXT,
      },
      accountWallet: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      profileImage: {
        type: DataTypes.TEXT,
      },
      thumbnailImage: {
        type: DataTypes.TEXT,
      },
      accountAvatar: {
        type: DataTypes.TEXT,
      },
      isLoggedIn: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      misc: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "adminAccounts",
      tableName: "adminAccounts",
    }
  );
  return adminAccounts;
};
