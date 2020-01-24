// add reusable dependencies
// use this module to configure
//  common files and dependencies
const dependable = require('dependable');
const path = require('path');

const container = dependable.container();
const customModules = [
    ['_','lodash'],
    ['mongoose','mongoose'],
    ['passport','passport']
];
customModules.forEach(function(val){
    container.register(val[0],function(){
        return require(val[1]);
    });
});

container.load(path.join(__dirname,'/controllers'));
container.load(path.join(__dirname,'/helpers'));

container.register('container',function(){
    return container;
});

module.exports = container;