const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');

router.get('/tags', async(req, res) => {
    try {
        let results = await Tag.findAll();
        res.status(200).json(results)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/tags/:id', async(req, res) => {
    try {
        let { id } = req.params;
        let results = await Tag.findByPk(id, {
            include: [{ model: Product, through: ProductTag, as: 'tagged_products' }],
            where: {
                id: id
            }
        })

        if (!product) res.status(400).send('No Category with that id');
        else res.status(200).json(results);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/tag', async(req, res) => {
    try {
        let { body } = req
        let result = await Tag.create(body)
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete('/tag/:id', async(req, res) => {
    try {
        let { id } = req.params;
        let result = await Tag.destroy({
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

router.put('/tag/:id', async(req, res) => {
    try {
        let { id } = req.params;
        let { body } = req;
        let result = await Tag.update(body, {
            where: {
                id: id
            }
        });
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;