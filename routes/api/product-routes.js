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
        // let result = await Product.create(body);
        // res.status(200).json(result);
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
        res.status(200).json(product);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put('/product/:id', async(req, res) => {
    try {
        let { id } = req.params;
        let { body } = req;

    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;