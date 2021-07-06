var database;
var form,game,player;
var count = 0
var gameState,playerCount;
var state;
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
  if(count===2)
  {
    game.updateState(1)
  }
  
  if(state===1)
 {
   game.play()
 }
  
   
  
}

