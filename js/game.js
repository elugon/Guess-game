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
    this.cardArray=[];
    this.cardOne=document.getElementById(`card${this.cardId}`);
  }

  
  shuffleCards() {

    while(this.cardArray.length<12)
    {
      let randomCard=Math.floor(Math.random()*4);
      if(randomCard===0&&this.chamelon<4){
        this.cardArray.push(cardAssets[0]);
        this.chamelon++;
        this.cardId++;
      } 
      
      else if(randomCard===1&&this.seal<4){
        this.cardArray.push(cardAssets[1]);
        this.seal++;
        this.cardId++;

      } 
      
      else if(randomCard===2&&this.elephant<4){
        this.cardArray.push(cardAssets[2]);
        this.elephant++;
        this.cardId++;

      }
    }
    console.log(this.cardArray)
  }

  _initiateCards(){

    let allCards=document.getElementsByClassName('card');
    let cards = [...allCards];
    let desk=this.cardArray;
    cards.forEach((ele,i) =>{ele.onclick=function(){console.log(desk[i])}});
    cards.forEach((ele,i) =>{ele.onclick=function(){ele.setAttribute('background-image',`url(${desk[i].image})`)}});

  }
  

  start(){
    this.shuffleCards();
    this._initiateCards();
  }
}
