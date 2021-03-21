const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');

router.get('/', async(req, res) => {
    try {
        let products = await Product.findAll({ include: [{ model: Tag, through: ProductTag }, { model: Category }] });
        res.status(200).json(products)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/:id', async(req, res) => {
    try {
        let { id } = req.params;
        let product = await Product.findByPk(id, {
            include: [{ model: Tag, through: ProductTag }, { model: Category }],
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

router.post('/', async(req, res) => {
    try {
        let { body } = req;
        let product = await Product.create(body);
        if (body.tags) {
            let productTags = [];
            for (let tag of body.tags) {
                let newProdTag = { product_id: product.id, tag_id: tag.id }
                productTags.push(newProdTag);
            }
            await ProductTag.bulkCreate(productTags);
        }
        res.status(200).json(product);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/search', async(req, res) => {});

router.delete('/:id', async(req, res) => {
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

router.put('/:id', async(req, res) => {
    try {
        let { id } = req.params;
        let { body } = req;
        let product = await Product.update(body, {
            where: {
                id: req.params.id
            }
        });
        if (body.tags) {
            let productTags = [];
            for (let tag of body.tags) {
                let newProdTag = { product_id: id, tag_id: tag.id }
                productTags.push(newProdTag);
            }
            await ProductTag.destroy({
                where: {
                    product_id: id
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