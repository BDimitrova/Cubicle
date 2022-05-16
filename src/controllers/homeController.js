const express = require('express');

const cubeServices = require('../services/cubeServices')

const router = express.Router();

const renderHome = (req, res) => {
    let cubes = cubeServices.getAll();

    res.render('index', { cubes });
}

router.get('/', renderHome);

module.exports = router;