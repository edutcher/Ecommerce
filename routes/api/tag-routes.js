const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

router.get('/tags', (req, res) => {});

router.get('/tags/:id', (req, res) => {});

router.post('/tag', (req, res) => {});

router.delete('/tag/:id', (req, res) => {});

router.put('/tag/:id', (req, res) => {});

module.exports = router;