const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

router.get('/catagories', (req, res) => {});

router.get('/category/:id', (req, res) => {});

router.post('/category', (req, res) => {});

router.delete('/category/:id', (req, res) => {});

router.put('/category/:id', (req, res) => {});

module.exports = router;