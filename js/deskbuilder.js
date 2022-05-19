class DeskBuilder{
    constructor(){
      this.typeOfCards=[0,0,0];
      this.cardArray=[];
    }
    shuffleCards() {
  
      while(this.cardArray.length<12)
      {
        let randomCard=Math.floor(Math.random()*4);
        if(randomCard===0&&this.typeOfCards[0]<4){
          this.cardArray.push(cardAssets[0]);
          this.typeOfCards[0]++;
        } 
        
        else if(randomCard===1&&this.typeOfCards[1]<4){
          this.cardArray.push(cardAssets[1]);
          this.typeOfCards[1]++;
  
        } 
        
        else if(randomCard===2&&this.typeOfCards[2]<4){
          this.cardArray.push(cardAssets[2]);
          this.typeOfCards[2]++;
  
        }
      }
    }
  }