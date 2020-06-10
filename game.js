class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        voter = new Voter();
        var voterCountRef = await database.ref('voterCount').once("value");
        if(voterCountRef.exists()){
          voterCount = voterCountRef.val();
          voter.getCount();
        }
        form = new Form()
        form.display();
      }
    }
  
    play(){
      form.hide();
      textSize(30);
      text("Game Start", 120, 100)
      Voter.getVoterInfo();
  
      if(allVoters !== undefined){
        var display_position = 130;
        for(var plr in allVoters){
          if (plr === "voter" + voter.index)
            fill("red")
          else
            fill("black");
  
          display_position+=20;
          textSize(15);
          text(allVoters[plr].name + ": " + allVoters[plr].distance, 120,display_position)
        }
      }
  
      if(keyIsDown(UP_ARROW) && voter.index !== null){
        voter.distance +=50
        voter.update();
      }
    }
  }