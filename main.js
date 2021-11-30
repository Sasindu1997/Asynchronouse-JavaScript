import fetch from 'node-fetch';
import fs from 'fs';
//*****CallBacks*****//

//setTimeout
setTimeout(() => {
    console.log('Waited 1 sec.');
}, 1000);

//nested setTimeouts
setTimeout(() => {
    console.log('3');
    setTimeout(() => {
        console.log('2')
        setTimeout(() => {
            console.log('1')
        }, 1000);
    }, 1000);
},1000);

//button event handler in browser javascript
const btn;
btn.addEventListner('click', () => {

})

//error first callback
fs.readFile('./test.txt', { encoding: 'utf8'}, (err, data) => {
    if(err) {
        console.error('ERROR : ' + err);
    } else {
        console.log('DATA : ' + data)
    }
}) 

//***Promises***//
//Create a promise
const promise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);
    if(rand === 0) {
        resolve();
    } else {
        reject();
    }
});

promise.then(() => {
    console.log('SUCCESS');
}).catch(err => {
    console.error('ERROR');
})

//fs readFile with Promises
fs.promises
    .readFile('./test.txt', { encoding: 'utf8' })
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

//fetch with promises
fetch('http://pokeapi.co/api/v2/pokemon/ditto')
    .then((data) => console.log(data))
    .catch((err) => console.error(err));