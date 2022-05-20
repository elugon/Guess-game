const startPage = document.getElementById('start-page');
const gamePage=document.getElementById('gameScreen')
const startButton = document.getElementById('start');
const winningPage=document.getElementById('winning-page');
const leftLed=document.getElementById('leftLed');
const rightLed=document.getElementById('rightLed');
const looserPage=document.getElementById('looser-page');



window.onload = function () {
    startButton.onclick = function () {
    startPage.style = "display: none";
    gamePage.style="display:flex"
    const game=new Game();
    game.start();
  }
}

class Game extends DeskBuilder{
  constructor() {
    super()
    this.cards=document.getElementsByClassName("card");
    this.clickedCards=[];
    this.finishedCards=[];
    this.time=document.getElementById("timeLeft");
  }

  timeGoes(){
  let counter=30;
  this.time.innerText=`${counter} s`;
  let timmer=setInterval(()=> {
    counter-=1;
    this.time.innerText=`${counter} s`;
    if(counter%2!==0){
    leftLed.style='background-color: blue;';
    rightLed.style='background-color: blue;';
    } if(counter%2==0){
    leftLed.style='background-color: red;';
    rightLed.style='background-color: red;';
    }
    if(counter==0&&this.finishedCards.length < 10){
    gamePage.style="display:none"
    looserPage.style = "display: flex";
      clearInterval(timmer)};
    }, 1000);
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
