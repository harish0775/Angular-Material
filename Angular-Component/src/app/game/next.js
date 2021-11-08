function int(){
    const playerTitle = document.querySelector(".playerTitle");
    const rematchBtn = document.querySelector(".rematch");
    const items = document.querySelector(".item");
    const gridArray = Array.from(iteams);
    let board = [1,2,3,4,5,6,7,8,9];
    let currentPlayer = "playerX";

    iteams.forEach((item)=>
    item.addEventListener("click",(e)=>{
       const index = gridArray.indexOf(e.target);
     if (
        items[index].classList.contains("playerX") ||
        items[index].classList.contains("computer")
      ) {
        return;
      }
      items[index].classList.add("playerX");
      const spliceNr = board.indexOf(index+1);
      board.splice(spliceNr,1);
      if(winCheck("playerX",items)){
          playerTitle.innerHTML = "Palyerx Win this game";
          document.body.classList.add("over");
          return;
      }
      if(board.length === 0){
          playerTitle.innerHTML = "Rematch";
          playerTitle.innerHTML = "tae";
          document.body.classList.add("over");
          console.log("Nothing left");
          return;
      }
      console.log("computer move");
      const random = Math.floor(Math.random()*board.length);
      const computerIndex = board[random];
      items[computerIndex-1].classList.add("computer");
      board.splice(random, 1);
      if(winCheck("computer",items)){
          playerTitle.innerHTML = "Computer win this game";
          document.body.classList.add("over")
          return;
      }
    }));
    rematchBtn.addEventListener("click",()=>{
        location.reload();
    });
}

function winCheck(palyer,items){
    
}