const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

router.get('/catagories', async(req, res) => {
    try {
        let results = await Category.findAll();
        res.status(200).json(results)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/category/:id', async(req, res) => {
    try {
        let { id } = req.params;
        let results = await Category.findByPk(id, {
            include: [{ model: Product }]
        })

        if (!product) res.status(400).send('No Category with that id');
        else res.status(200).json(results);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/category', async(req, res) => {
    try {
        let { body } = req;
        let result = await Category.create(body);
        res.status(200).send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete('/category/:id', async(req, res) => {
    try {
        let { id } = req.params;
        let results = await Category.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put('/category/:id', async(req, res) => {});

module.exports = router;