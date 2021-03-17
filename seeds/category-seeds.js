  const { Category } = require('../models');

  const categoryData = [{
          category_name: 'Apparel',
      },
      {
          category_name: 'Accessories',
      },
      {
          category_name: 'Food/Drink',
      },
      {
          category_name: 'Technology',
      },
      {
          category_name: 'Toys',
      },
  ];

  const seedCategories = () => Category.bulkCreate(categoryData);

  module.exports = seedCategories;