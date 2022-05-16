const express = require('express');

const cubeServices = require('../services/cubeServices');
const router = express.Router();

const viewCreate = (req, res) => {
    cubeServices.getAll();

    res.render('create');
}

const createCube = (req, res) => {
    let { name, description, imageUrl, difficulty } = req.body;

    cubeServices.create(name, description, imageUrl, difficulty);

    res.redirect('/');
}


const cubeDetails = (req, res) => {
    let cube = cubeServices.getOne(req.params.cubeId);
    res.render('details', { ...cube });

}

router.get('/create', viewCreate);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);

module.exports = router;