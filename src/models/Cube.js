const uniqId = require('uniqid');

class Cube {
    static cubes = [
        {
            id: '1gtvmbbmkl38h34ts',
            name: 'Mirror Cube',
            description: 'Fun!',
            imageUrl: 'https://m.media-amazon.com/images/I/41KNQRXAYvL._AC_.jpg',
            difficulty: '4'
        },
        {
            id: '1dd8mbehcl38hvwmd',
            name: 'Nine-Colour Cube',
            description: 'Variant where each piece has just one of nine colours.',
            imageUrl: 'https://www.jaapsch.net/puzzles/images/cube9col.jpg',
            difficulty: '3'
        }
    ];

    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqId(),
            this.name = name,
            this.description = description,
            this.imageUrl = imageUrl,
            this.difficulty = difficulty
            // this.canonicalName = name.replace(/ /g, '-').toLowarCase() - Make URL make-url-like-this
    };

    static getAll() {
        return Cube.cubes.slice();
    };

    static add(cube) {
        Cube.cubes.push(cube);
    };

}

module.exports = Cube;