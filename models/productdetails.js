"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productDetails extends Model {
    static associate(models) {
      productDetails.belongsTo(models.brand, {
        foreignKey: "brandId",
        as: "brand",
        targetKey: "brandId",
        onDelete: "CASCADE",
      });
      productDetails.belongsTo(models.productCategories, {
        foreignKey: "productCategoryId",
        as: "category",
        targetKey: "productCategoryId",
        onDelete: "CASCADE",
      });
      productDetails.belongsTo(models.productSubCategories, {
        foreignKey: "productSubCategoryId",
        as: "subCategory",
        targetKey: "productSubCategoryId",
        onDelete: "CASCADE",
      });
      productDetails.belongsTo(models.productDiscount, {
        foreignKey: "discountId",
        as: "discount",
        targetKey: "discountId",
        onDelete: "CASCADE",
      });
      productDetails.hasMany(models.productVariants, {
        foreignKey: "productSKU",
        as: "variants",
        sourceKey: "productSKU",
        onDelete: "CASCADE",
      });
      productDetails.hasMany(models.productsPair, {
        foreignKey: "pairedProductId",
        as: "pairing",
        sourceKey: "productId",
        onDelete: "CASCADE",
      });
      productDetails.hasMany(models.productsPair, {
        foreignKey: "pairedProductId",
        as: "pairedProduct",
        sourceKey: "productId",
        onDelete: "CASCADE",
      });
      productDetails.hasMany(models.userChoices, {
        foreignKey: "productId",
        as: "Choices",
        sourceKey: "productId",
        onDelete: "CASCADE",
      });
      productDetails.hasMany(models.productTags, {
        foreignKey: "productId",
        as: "productTags",
        sourceKey: "productId",
        onDelete: "CASCADE",
      });
      productDetails.hasMany(models.wishlistItems, {
        foreignKey: "productId",
        as: "wishlistItems",
        sourceKey: "productId",
        onDelete: "CASCADE",
      });
      productDetails.hasMany(models.cartItems, {
        foreignKey: "productId",
        as: "cartItems",
        sourceKey: "productId",
        onDelete: "CASCADE",
      });
      productDetails.hasMany(models.orderItems, {
        foreignKey: "productId",
        as: "orderItems",
        sourceKey: "productId",
        onDelete: "CASCADE",
      });
      productDetails.hasMany(models.productLocation, {
        foreignKey: "productId",
        as: "productLocation",
        sourceKey: "productId",
        onDelete: "CASCADE",
      });
      productDetails.hasMany(models.productReviews, {
        foreignKey: "productId",
        as: "productReviews",
        sourceKey: "productId",
        onDelete: "CASCADE",
      });
      productDetails.hasMany(models.productViews, {
        foreignKey: "productId",
        as: "productViews",
        sourceKey: "productId",
        onDelete: "CASCADE",
      });
    }
  }
  productDetails.init(
    {
      productId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      productSKU: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      brandId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      discountId: {
        type: DataTypes.UUID,
      },
      productCategoryId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      productSubCategoryId: {
        type: DataTypes.UUID,
      },
      productName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      productDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      productPrice: {
        type: DataTypes.FLOAT,
      },
      priceCurrency: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      productAttributes: {
        type: DataTypes.JSON,
      },
      brandName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      specifications: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
      },
      productMaterial: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      searchKeywords: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        // allowNull: false,
      },
      unit: {
        type: DataTypes.TEXT,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      productDisplayImage: {
        type: DataTypes.TEXT,
        // allowNull: false,
      },
      thumbnailImage: {
        type: DataTypes.TEXT,
        // allowNull: false,
      },
      imageURL: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      minOrderQTY: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxOrderQTY: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shippingWeight: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      shippingWeightUOM: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      itemDimensions: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      isDigitalAsset: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "productDetails",
      tableName: "productDetails",
    }
  );
  return productDetails;
};
