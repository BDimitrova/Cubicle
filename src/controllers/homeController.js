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

const renderSearch = (req, res) => {
    let search = req.query.search;
    let from = Number(req.query.from);
    let to = Number(req.query.to);

    let cubes = cubeServices.search(search, from, to);

    res.render('index', {
        title: 'SEARCH',
        search,
        from,
        to,
        cubes
    });
}

router.get('/', renderHome);
router.get('/about', renderAbout);
router.get('/search', renderSearch);

module.exports = router;