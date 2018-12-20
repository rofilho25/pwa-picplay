var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);
const request = require('request');
var fila = [];
const api = '1867f61baa228323cefe3f8697601a0f';
total_pages = 993;
total_item = 20;


var page = function(){
    return Math.floor((Math.random() * total_pages ) + 1);
}



var item = function(){
   return Math.floor((Math.random() * total_item ) + 1);
} 

app.use(express.static(__dirname));  

app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});


function getMovie(){
    return new Promise((resolve,reject)=>{
        console.log(page())
        request('https://api.themoviedb.org/3/movie/popular?api_key='+api+'&language=en-US&page='+page(), { json: true }, (err, res, body) => {
            if (err) { 
                return reject(err); 
            }
            let movie = mountMovie(body.results)
            resolve(movie);
          });
    })
}

function getSimilarMovie(id){
    return new Promise((resolve,reject)=>{
        request('https://api.themoviedb.org/3/movie/'+id+'/similar?api_key='+api+'&language=en-US&page=1', { json: true }, (err, res, body) => {
            if (err) { 
                return reject(err); 
            }
            let similares = mountSmiliarMovies(body.results)
 
            resolve(similares);
            
          });
    })
}


function mountMovie(obj){
    try{
        return obj[item()];
    }catch(e){
        mountMovie(obj);
    }
}

function mountSmiliarMovies(obj){
    let arrySimilar = []
    let cont = 0;
    for (let index = 0; index < obj.length; index++) {  
        if(index<5){
            arrySimilar.push({name:obj[index].original_title});   
        }    
    } 
    return arrySimilar;
}

function mountChallenger(movie,similiarMovie){
    let challenger = {};
    similiarMovie.push({name:movie.original_title});
    challenger['opcoes'] = similiarMovie;
    challenger['right']  = movie.original_title;
    challenger['image']  = "https://image.tmdb.org/t/p/w500/"+movie.backdrop_path;
    return challenger;
}

function start(){
    getMovie().then(movie=>{
        if(movie==undefined){
            return start();
        }
        getSimilarMovie(movie.id).then(similar=>{
            if(similar.length!=5){
                start(); 
            }else{
                let challenger = mountChallenger(movie,similar);
                if(fila.length<=10){
                    fila.push(challenger);
                }   
                //console.log(fila)
                start();         
            }
        })
    })
}

start();

io.on('connection', function(client) {  
    
    client.on('join', function(data) {
        console.log(data);
    });
})

sendChallenger();
function sendChallenger(){
    setInterval(function(){
        if(fila.length>0){
            fila.shift();
        }
        io.emit('desafio',fila[0]);
    },10000)
}

server.listen(4200);  