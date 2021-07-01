var database;
var form,game,player;
var count = 0
var gameState,playerCount;

function setup(){
  database = firebase.database();
  
  createCanvas(500,500);
  game= new Game();
  player=new Player();
  form=new Form();
  game.start();
  
 

}

function draw(){
  background("white");
  
  
  
 
  
   
  
}

