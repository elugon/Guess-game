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
         console.log(this.finishedCards)
      
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
              //_showWinPage() esconder game page y mostrar win page 
      }
              
   }
  })  
}
  _showWinPage(){
    setTimeout(() => {
      console.log('juego terminado');
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
