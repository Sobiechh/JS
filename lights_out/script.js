//autor Piotr Sobieszczyk

window.onload = function () {
  //wyswietlanie stanu gry
  let boardDiv = document.getElementById("board");
  let restartButton = document.getElementById("restart");
  let newBoardButton = document.getElementById("newboard");
  let createGameForm = document.forms["createGameForm"];
  let attemps = document.getElementById("attempts");

  let boardContainer = [];
  
  //obecna pozycja
  let x;
  let y;

  //licznik
  let counter = 0;

  //flaga czy czy gra skonczona
  let boardCompleted = false;

  //flaga na podpowiedz
  let hintAlert = false;

  //schowanie przyciskow
  restartButton.style.display = 'none';
  newBoardButton.style.display = 'none';

  //przcyciski forumalrza
  createGameForm.onsubmit = e => newGame(e);
  restartButton.onclick = e => restartGame(e);
  newBoardButton.onclick = e => showGameForm(e);

  //nowa gra
  function newGame(e) {
    e.preventDefault();

    x = createGameForm["width"].value;
    y = createGameForm["height"].value;

    createGame();

    createGameForm.style.display = 'none';
    restartButton.style.display = 'inline';
    newBoardButton.style.display = 'inline';
    attemps.style.display = 'block'; 
  }

  //powrot do menu
  function showGameForm(e) {
    e.preventDefault();

    while (boardDiv.hasChildNodes()) {
      boardDiv.removeChild(boardDiv.lastChild);
    }

    createGameForm.style.display = 'inline';
    attemps.style.display = 'none';
    restartButton.style.display = 'none';
    newBoardButton.style.display = 'none';
  }

  //restart
  function restartGame(e) {
    e.preventDefault();

    createGame();
  }

  //tworzenie nowej gry
  function createGame() {
    boardContainer = createBoard(x, y);

    counter = 0;
    attemps.innerHTML = `Ilość prób: ${counter}`;

    boardCompleted = false;

    displayBoard(boardContainer);
  }

  //klikniecie
  function userClick(x, y) {
    if (!boardCompleted) { 
      counter++;
      attemps.innerHTML = `Ilość prób: ${counter}`;

      updateBoard(boardContainer, x, y);

      if (checkBoardCompleted(boardContainer)) {

        boardCompleted = true;
        attemps.innerHTML = `Gratulacje! Ukończyłeś grę w ${counter} ruchach. Kliknij restart i zagraj jeszcze raz lub stwórz inną planszę`;
      }

      displayBoard(boardContainer);
    }
  }

  //wyseitl tablice
  function displayBoard(board) {

    while (boardDiv.hasChildNodes()) {
      boardDiv.removeChild(boardDiv.lastChild);
    }

    for (i=0; i<y; i++) {

      let row = document.createElement('div');
      row.className = 'row';

      for (j=0; j<x; j++) {
        let boardItem = document.createElement('div');
        boardItem.className = board[i][j] ? 'boardItemLightOn' : 'boardItemLightOff';
        boardItem.onclick = userClick.bind(undefined, i, j);
        row.appendChild(boardItem);
      }

      boardDiv.appendChild(row);
    }
  }

  //tworzenie tablicy gry
  function createBoard(x, y) {
    let newBoard = [];
    let atLeastOneLightOn = false;

    for (j=0; j<y; j++) {
      let xRow = [];
      for (i=0; i<x; i++) {
        let lightOn = Math.round(Math.random()) === 1 ? true : false;
        if (!atLeastOneLightOn && lightOn) {
          atLeastOneLightOn = true;
        } 
        xRow.push(lightOn);
      }
      newBoard.push(xRow);
    }

    if (!atLeastOneLightOn) { 
      createBoard(x, y) 
    } else {
      return newBoard;  
    }
  }

  //reakcja na klikniecie
  function updateBoard(board, x, y) {
    board[x][y] = !board[x][y];

    if (x > 0)                  { board[x-1][y] = !board[x-1][y]; }
    if (x < board.length-1)     { board[x+1][y] = !board[x+1][y]; }
    if (y > 0)                  { board[x][y-1] = !board[x][y-1]; }
    if (y < board[0].length-1)  { board[x][y+1] = !board[x][y+1]; }

    makeHint(board);
  }

  //czy gra skonczona
  function checkBoardCompleted(board) {
    for (i=0; i<board.length; i++) {
      for (j=0; j<board[0].length; j++) {
        if (board[i][j]) {
          return false;
        }
      }
    }
    return true;
  }
  
  function makeHint(board){
    for (i=0; i<board.length; i++) {
      for (j=0; j<board.length; j++) {
        if (board[i][j] == "x"){
          console.log('hi')
        }
      }
    }
  }
}