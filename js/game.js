const startPage = document.getElementById('start-page');
const gamePage=document.getElementById('gameScreen')
const startButton = document.getElementById('start');
const winningPage=document.getElementById('winning-page');

window.onload = function () {
    startButton.onclick = function () {
    startPage.style = "display: none";
    gamePage.style="display:flex"
    const game=new Game();
    game.start()
  }
}

class deskBuilder{
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


class Game extends deskBuilder{
  constructor() {
    super()
    this.cards=document.getElementsByClassName("card");
    this.clickedCards=[];
    this.finishedCards=[];
    this.time=document.getElementById("timeLeft");
  }

  timeGoes(){
  let counter=50;
  this.time.innerText=`${counter} s`;
  
    setInterval(function () {
      counter-=1;
  
      console.log(counter)}, 1000);
  }

   _initiateCards(){

    let allCards=document.getElementsByClassName('card');
    let cards = [...allCards];
    let desk=this.cardArray;
    cards.forEach((ele,i) =>{ele.onclick=()=>{
      ele.innerText=(desk[i].content);
      ele.style=` background-image: url(${desk[i].image})`;
      if(this.clickedCards.length === 0){
      this.clickedCards.push(ele);
      
      } else{
       if (this.finishedCards.length < 10){    
        if(this._compareCards(ele.innerText)){
          this.finishedCards.push(this.clickedCards[0])
          this.finishedCards.push(ele)
          this.clickedCards=[];
        } else {
          const current = this.clickedCards[0];
          setTimeout(()=>{
            current.innerText='';
            current.style=` background-image: url('/images/stockCard.jpg')`;
            ele.style=` background-image: url('/images/stockCard.jpg')`;
            ele.innerText='';
          }, 500);
        this.clickedCards=[];
      }}
        else{
          this._showWinPage();
        }  
      }
              
   }
  })  
}
  _showWinPage(){
    setTimeout(() => {
    gamePage.style = "display: none";
    winningPage.style="display: flex";
    }, 500);
      }
_compareCards(currentCard) {
  
  return this.clickedCards.find((elem) => {
    return elem.innerText === currentCard
  });
}

  start(){
    this.shuffleCards();
    this._initiateCards();
    this._compareCards();
    this.timeGoes();
  }
}
