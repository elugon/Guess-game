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

  /*_initiateCards(){

    let allCards=document.getElementsByClassName('card');
    let cards = [...allCards];
    let desk=this.cardArray;
    let pickOne="";
    cards.forEach((ele,i,arr) =>{ele.onclick=function(){
      ele.innerText=(desk[i].content);
      ele.style=` background-image: url(${desk[i].image})`;
      pickOne=desk[i].content;
      console.log(pickOne)
      if(arr[i-1]!==undefined){
      if(pickOne==arr[i-1].innerText){
        console.log('yeah')
        pickOne="";
      }}
    }});

  }
  */

   _initiateCards(){

    let allCards=document.getElementsByClassName('card');
    let cards = [...allCards];
    let desk=this.cardArray;
    let pickUser=[];
    let clicksByUser=0;
    cards.forEach((ele,i) =>{ele.onclick=function(){
      ele.innerText=(desk[i].content);
      ele.style=` background-image: url(${desk[i].image})`;
      pickUser.push(desk[i].content);
      clicksByUser++
      console.log(clicksByUser);
      console.log(cards)
   }
  })
 



}
  
   

  start(){
    this.shuffleCards();
    this._initiateCards();
  }
}
