
const cardOne=document.getElementById('card1');
cardOne.onclick=function(){console.log('hola mundo')}
const allCards=document.getElementsByClassName('card');


class Game{
  constructor(context) {
    this.ctx = context;
    this.cards=document.getElementsByClassName("card");
  }

  _initiateCards(){
    
    const cards = [...allCards];
    cards.forEach(ele => {
      console.log("ele is", ele)
      ele.onclick=function(){console.log('hola mundo', ele)
    }});
    
  }

  start(){
    
    this._initiateCards();
  }
}