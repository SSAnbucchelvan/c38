class Game{
 constructor(){

}


getGameState() { 
    var gameStateRef= database.ref("gamestate");
    gameStateRef.on("value", function(data) 
    { myGameState=data.val();
        console.log("get game state value : " + data.val());   })
    console.log("get game state value : " + myGameState); 
}            

updateGameState(){
    
}

start(){
        
            myPlayer=new Player();
            myPlayer.getPlayerCount();
            myForm=new Form();
            myForm.display();
        

}

}