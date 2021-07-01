class Form
{
    constructor()
    {
        this.input=createInput("");
        this.button=createButton("Play");
        this.greeting=createElement("h2");
        this.title=createElement("h1");
    }

    display()
    {
        this.title.position(500,10);
        this.title.html("CAR RACING GAME");
        this.input.position(700,250);
        this.button.position(700,300);

        this.button.mousePressed(()=>
        {
            this.input.hide();
            this.button.hide();
            this.greeting.position(500,250);
            this.greeting.html("Welcome "+this.input.value());
            count=count+1;
            player.updatecount();
            player.name=this.input.value();
            player.index="player"+count;
            player.update();
        });
    }

    hide()
    {
        this.input.hide();
        this.button.hide();
    }

    
}