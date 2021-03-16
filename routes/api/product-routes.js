const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');

router.get('/products', async(req, res) => {
    try {
        let products = await Product.findAll();
        res.status(200).json(products)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/product/:id', async(req, res) => {
    try {
        let { id } = req.params;
        let product = await Product.findByPk(id, {
            include: [{ model: Tag, through: ProductTag, as: 'product_tags' }, { model: Category }],
            where: {
                id: id
            }
        })

        if (!product) res.status(400).send('No product with that id');
        else res.status(200).json(product);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/product', async(req, res) => {
    try {
        let { body } = req;
        console.log(body);
        let product = await Product.create(body);
        if (body.tags) {
            let tags = await Tag.findAll();
            let newTags = body.tags.filter((curTag) => !tags.includes(curTag));
            if (newTags) {
                let result = await Tag.bulkCreate(newTags);
            }
            let productTags = [];
            for (let tag of body.tags) {
                let newProdTag = { product_id: product.id, tag_id: tag.id }
                productTags.push(newProdTag);
            }
            let results = await ProductTag.bulkCreate(productTags);
        }
        res.status(200).json(product);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/product/search', async(req, res) => {});

router.delete('/product/:id', async(req, res) => {
    try {
        let { id } = req.params;
        let result = await Product.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put('/product/:id', async(req, res) => {
    try {
        let { id } = req.params;
        let { body } = req;
        let product = await Product.update(id, body);
        if (body.tags) {
            let tags = await Tags.findAll();
            let newTags = body.tags.filter((curTag) => !tags.includes(curTag));
            if (newTags) {
                await Tag.bulkCreate(newTags);
            }
            let productTags = [];
            for (let tag of body.tags) {
                let newProdTag = { product_id: product.id, tag_id: tag.id }
                productTags.push(newProdTag);
            }
            await ProductTag.destroy({
                where: {
                    product_id: product.id
                }
            })
            await ProductTag.bulkCreate(productTags);
        }
        res.status(200).send(product)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;