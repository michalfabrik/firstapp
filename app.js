//  --Path Module--
/*
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj); 
*/


//  --OS Module--
/*
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`); 
*/


//  --File System Module--¨
/*
const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', function(err, files) {
    if(err) console.log('error', err);
    else console.log('Result', files);
});
*/


// --Events Module--
/*
const EventEmitter = require('events');     //  first letter of every world is uppercase => it is a class

const Logger = require('./logger');
const logger = new Logger();

//register listener
logger.on('messageLogged', (arg) => {  //  e, eventArg
    console.log('Listener called', arg);
});

logger.log('message');
*/

// --HTTP Module--
const  htttp = require('http');

const server = htttp.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');