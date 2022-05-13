const cardOne=document.getElementById(`card${this.cardId}`);
const allCards=document.getElementsByClassName('card');
let cardArray=[];

class Game{
  constructor(context) {
    this.ctx = context;
    this.cards=document.getElementsByClassName("card");
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.chamelon=0;
    this.seal=0;
    this.elephant=0;
    this.cardId=1;
  }

  _initiateCards(){
    const cards = [...allCards];
    cards.forEach(ele => {
      ele.onclick=function(){console.log('hola mundo')
  
        
    }});
    
  }

  shuffleCards() {

    while(this.chamelon!==4&&this.seal!==4&&this.elephant!==4)
    {
      let randomCard=Math.floor(Math.random()*3);
      if(randomCard===1&&this.chamelon<=4)
      {
        cardArray.push(cardAssets[0][0]);
        this.chamelon++;
        this.cardId++;
      } else if(randomCard===2&&this.seal<=4)
      {
        cardArray.push(cardAssets[1][1]);
        this.seal++;
        this.cardId++;
      } else if(randomCard===1&&this.elephant<=4)
      {
        cardArray.push(cardAssets[2][2]);
        this.elephant++;
        this.cardId++;
      }
    }
    console.log(cardArray)
  }


  start(){
    
    this._initiateCards();
    this.shuffleCards();
  }
}
