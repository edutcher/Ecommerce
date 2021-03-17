const { Product } = require('../models');

const productData = [{
        product_name: "C'Thulhu Onesie",
        price: 44.99,
        stock: 14,
        category_id: 1,
        description: "C'Thulhu sleeps... and so shall your little one.",
        image_url: "https://i.pinimg.com/originals/6b/92/b0/6b92b07e820a3e3bdf8dc8bb2b841b2d.jpg"
    },
    {
        product_name: "Nub Shiggurath's Pascifier",
        price: 11.99,
        stock: 25,
        category_id: 2,
        description: "",
    },
    {
        product_name: "Wilbur Whateley's Wine",
        price: 22.99,
        stock: 12,
        category_id: 3,
        description: "",
    },
    {
        product_name: "Azathoth's Special Secretions",
        price: 12.99,
        stock: 50,
        category_id: 3,
        description: "",
    },
    {
        product_name: "Yog-Sothoth's Dream Projector",
        price: 29.99,
        stock: 22,
        category_id: 4,
        description: "",
    },
    {
        product_name: "Nyarlathotep Morphing Toy",
        price: 29.99,
        stock: 22,
        category_id: 5,
        description: "",
    }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;