var fs = require('fs');

//monta o objeto contendo todos os módulos de node_modules/ para serem ignorados na criação do index.js
var nodeModules = {"fs": "fs"};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = mod;
    });

module.exports = nodeModules;