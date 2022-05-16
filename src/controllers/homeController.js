const express = require('express');

const cubeServices = require('../services/cubeServices');

const router = express.Router();

const renderHome = (req, res) => {
    let cubes = cubeServices.getAll();

    res.render('index', { cubes });
}

const renderAbout = (req, res) => {
    res.render('about');
}

router.get('/', renderHome);
router.get('/about', renderAbout);

module.exports = router;