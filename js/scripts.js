window.onload = function () {
  const canvas = document.getElementById('canvas');
    const startPage = document.getElementById('start-page');
  const gamePage=document.getElementById('gameScreen')
  const startButton = document.getElementById('start');
  
  startButton.onclick = function () {
    startPage.style = "display: none";
    gamePage.style="display:flex"
    canvas.classList.remove('hidden');
    const game=new Game();
    game.start()
  }
}