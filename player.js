class Player
{
    constructor()
    {
        this.name = null
        this.distance = 0;
        this.index = null;
    }

    getcount()
    {
        database.ref('playerCount').on("value",function(data){count=data.val()})
    }

    updatecount()
    {
        database.ref('/').update({playerCount:count})

    }
    
    getPlayerInfo()
    {

    }

    update()
    {
        var playerindex='players/'+this.index
       database.ref(playerindex).set({name:this.name,distance:this.distance})
    }

}