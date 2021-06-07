class Form {

    constructor(){
            this.input=createInput();
            this.playButton=createButton("play");
            this.title=createElement('h2');
            this.greeting=createElement('h3');
}

display(){
            this.input.position(350,160);
            this.playButton.position(350,200);
            this.title.position(350,0);
            this.title.html("car race game")
            this.playButton.mousePressed(()=>{
                    myPlayer.index=myPlayerCount+1;
                    myPlayerCount=myPlayerCount+1;
                    myPlayer.updatePlayerCount();
                    myPlayer.name=this.input.value()
                    myPlayer.updatePlayerInfo();
                    this.greeting.html("Welcome"+myPlayer.name )
                    this.greeting.position(350,300);
            });
}











}