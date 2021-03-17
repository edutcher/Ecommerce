const { Tag } = require('../models');

const tagData = [{
        tag_name: 'Cold Comfort',
    },
    {
        tag_name: 'Madness Manifest',
    },
    {
        tag_name: 'Insane Infants',
    },
    {
        tag_name: 'Nightmarish Nourishment',
    },
    {
        tag_name: 'Yog-Sothoth',
    },
    {
        tag_name: "C'Thulhu",
    },
    {
        tag_name: 'Nub-Shiggurath',
    },
    {
        tag_name: 'Azathoth',
    },
    {
        tag_name: 'Nyarlathotep',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;