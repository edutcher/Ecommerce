const Category = require('./Category');
const Tag = require('./Tag');
const Product = require('./Product');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

Tag.belongsToMany(Product, { through: ProductTag, unique: false });
Product.belongsToMany(Tag, { through: ProductTag, unique: false });

module.exports = { Product, Tag, Category, ProductTag };