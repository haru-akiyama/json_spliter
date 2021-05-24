const { readdirSync, rename, existsSync, mkdirSync, readdir, writeFile } = require('fs');
const { resolve } = require('path');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

if (!existsSync('./outputs')){
    mkdirSync('./outputs');
}

const outDirPath = resolve(__dirname, 'outputs');

const data = require('./data.json')

readline.question('Enter attr name : \n', name => {
    
    name = name.trim()

    data.forEach(element => {
        let str = element.toString()
        writeFile(('outputs/'+(element[name].replace(/[^\w\s]/gi, '')).split(' ').join('_')+".js").toLowerCase(), str, (err) => {})
    });
    
    readline.close();
});
