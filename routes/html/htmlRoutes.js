const { json } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {});

router.get('/item/:id', (req, res) => {});

router.get('', (req, res) => {});

router.get('*', (req, res) => {});

module.exports = router;