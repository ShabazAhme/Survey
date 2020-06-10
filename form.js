class Form {

    constructor() {
      this.input = createInput("Name");
      this.e = createInput("E-mail id");
      this.button = createButton('Continue');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h1')
      title.html("Survey Of Change");
      title.position(80, 0);
  
      this.input.position(130, 140);
      this.e.position(130,170);
      this.button.position(250, 200);

      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.e.hide();
        voter.name = this.input.value();
        voter.email = this.e.value(); 
        voterCount+=1;
        voter.index = voterCount;
        voter.update();
        voter.updateCount(voterCount);
        this.greeting.html("Hello " + voter.name)
        this.greeting.position(130, 100);
      });
  
    }
  }
  