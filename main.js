import fetch from 'node-fetch';
import fs from 'fs';
import request from 'request';

//*****CallBacks*****//

setTimeout
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


//*************Async/Await*******************/

// load file with async/await
const loadFile = async () => {
    try {
        const data = await fs.promises.readFile('./test.txt', { encoding: 'utf8' });
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
loadFile();

//fetch pokemon with async/await without error handling
const fetchPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};
fetchPokemon();


//external URL callbacks
 const getData = (callback) => {
    var url = "http://pokeapi.co/api/v2/pokemon/ditto";
    request(url, function(err, response, body) {
      if(err) { 
        console.log(err); 
        return callback(err);
      } 
      const obj = JSON.parse(body);
      callback(obj);
    });
};

function print(data){
    console.log(data);
}
getData(print);