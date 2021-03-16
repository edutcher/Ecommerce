const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

router.get('/products', (req, res) => {});

router.get('/product/:id', (req, res) => {});

router.get('/products/category/:id', (req, res) => {});

router.get('/products/tag/:id', (req, res) => {});

router.post('/product', (req, res) => {});

router.post('/product/search', (req, res) => {});

router.delete('/product/:id', (req, res) => {});

router.put('/product/:id', (req, res) => {});

module.exports = router;