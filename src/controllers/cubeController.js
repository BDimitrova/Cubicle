const express = require('express');

const cubeServices = require('../services/cubeServices');
const router = express.Router();

const viewCreate = (req, res) => {
    let cubes = cubeServices.getAll();
    console.log(cubes);
    
    res.render('create');
}

const createCube = (req, res) => {
    let {name, description, imageUrl, difficulty} = req.body;

    cubeServices.create(name, description, imageUrl, difficulty);

    res.redirect('/');
}

router.get('/create', viewCreate);
router.post('/create', createCube);

module.exports = router;