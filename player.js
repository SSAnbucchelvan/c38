class Player{
    constructor(){
        this.name=null;
        this.index=null;
        this.distance=0;
   }
   
   
   getPlayerCount(){
            var playerCountRef=database.ref('playerCount');
            playerCountRef.on("value",function(data){
            myPlayerCount=data.val();
               
            });

   
   }
   
   updatePlayerCount(){
       database.ref("/").update({
           playercount:myPlayerCount
       });

   }
   updatePlayerInfo(){
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
    });

}

   
   }