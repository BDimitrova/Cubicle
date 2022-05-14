const Cube = require('../models/Cube');

const cubeDb = [
    {
        name: 'Mirror Cube',
        description: 'Fun!',
        imageUrl: 'https://m.media-amazon.com/images/I/41KNQRXAYvL._AC_.jpg',
        difficulty: '4'
    }
];

const getAll = () => cubeDb.slice();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty);

    cubeDb.push(cube);
}

const cubeServices = {
    create,
    getAll
};

module.exports = cubeServices;
