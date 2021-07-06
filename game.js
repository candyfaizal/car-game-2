class Game
{
    constructor()
    {

    }
    getstate()
    {
      database.ref('gameState').on("value",function(data){state=data.val()})
    }
    
    updateState(state)
    {
       database.ref('/').update({gameState:state})
    }
    
    start()
    {
        game.getstate();
        player.getcount();
        form.display();
               

    }

    play()
    {
        form.hide()
        textSize(25)
        text("game started",100,20)
    }

    end()
    {

    }
}