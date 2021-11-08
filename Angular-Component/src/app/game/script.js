function init() {
  const playerTitle = document.querySelector(".playerTitle");
  const rematchBtn = document.querySelector(".rematch");
  const items = document.querySelectorAll(".item");
  const gridArray = Array.from(items);
  console.log(gridArray);
  let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  items.forEach((item) =>
    item.addEventListener("click", (e) => {
      // Player Move
      const index = gridArray.indexOf(e.target);
      if (
        items[index].classList.contains("playerX") ||
        items[index].classList.contains("computer")
      ) {
        return;
      }

      items[index].classList.add("playerX");
      const spliceNr = board.indexOf(index + 1);

      board.splice(spliceNr, 1);

      if (winCheck("playerX", items)) {
        playerTitle.innerHTML = "PlayerX Win this game";
        document.body.classList.add("over");
        return;
      }

      if (board.length === 0) {
        playerTitle.innerHTML = "tae";
        document.body.classList.add("over");
        console.log("Nothing Left");
        return;
      }

      console.log("computer move");
      const random = Math.floor(Math.random() * board.length);
      console.log(
        "Random :",
        "board.length",
        board.length,
        "Math.random",
        Math.random(),
        "random*board.length",
        Math.random() * board.length,
        "random",
        random
      );

      const computerIndex = board[random];
      items[computerIndex-1].classList.add("computer");
      console.log(
        "computerIndex",
        computerIndex,
        "computerIndex",
        items[computerIndex - 1]
      );

      board.splice(random, 1);

      // win check for the computer
      if (winCheck("computer", items)) {
        playerTitle.innerHTML = "Computer Win This game";
        document.body.classList.add("over");
        return;
      }
    })
  );
  //reset
  rematchBtn.addEventListener("click", () => {
    location.reload();
  });
}

// win check function
function winCheck(player, items) {
  // let allItems = items;
  function check(pos1, pos2, pos3) {
    console.log(items);
    if (
      items[pos1].classList.contains(player) &&
      items[pos2].classList.contains(player) &&
      items[pos3].classList.contains(player)
    ) {
      return true;
    } else {
      return false;
    }
  }
  if (check(0, 3, 6)) return true;
  else if (check(1, 4, 7)) return true;
  else if (check(2, 5, 8)) return true;
  else if (check(0, 1, 2)) return true;
  else if (check(3, 4, 5)) return true;
  else if (check(6, 7, 8)) return true;
  else if (check(0, 4, 8)) return true;
  else if (check(2, 4, 6)) return true;
}

// initializing the game
init();
