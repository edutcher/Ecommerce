const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');

router.get('/', async(req, res) => {
    try {
        let results = await Tag.findAll({
            include: [{ model: Product, through: ProductTag }]
        });
        res.status(200).json(results)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/:id', async(req, res) => {
    try {
        let { id } = req.params;
        let results = await Tag.findByPk(id, {
            include: [{ model: Product, through: ProductTag }],
            where: {
                id: id
            }
        })

        if (!results) res.status(400).send('No Category with that id');
        else res.status(200).json(results);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/', async(req, res) => {
    try {
        let { body } = req
        let result = await Tag.create(body)
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete('/:id', async(req, res) => {
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

router.put('/:id', async(req, res) => {
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