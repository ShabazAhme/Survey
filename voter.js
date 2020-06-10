class Voter {
    constructor(){
      this.index = null;
      this.e = null;
      this.name = null;
    }
  
    getCount(){
      var voterCountRef = database.ref('voterCount');
      voterCountRef.on("value",(data)=>{
        voterCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        voterCount: count
      });
    }
  
    update(){
      var voterIndex = "voters/voter" + this.index;
      database.ref(voterIndex).set({
        name:this.name,
        email:this.e
      });
    }
  
    static getVoterInfo(){
      var voterInfoRef = database.ref('voters');
      voterInfoRef.on("value",(data)=>{
        allvoters = data.val();
      })
    }
  }