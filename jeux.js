function generateGrid(rows, columns) {
    const board = document.getElementById('board');
    board.innerHTML = ''; 

    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('cells');

        for (let j = 0; j < columns; j++) {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            rowDiv.appendChild(cellDiv);
        }

        board.appendChild(rowDiv);
    }
}
generateGrid(20,20 );

const cells = document.querySelectorAll('.cell');
const resetBtn = document.querySelector('.reset');
const currentTurn = document.querySelector('.current-turn');
const player1score = document.querySelector('.scor1');
const player2score = document.querySelector('.scor2');
const draw = document.querySelector('.draw');
const messageContent = document.querySelector('.content');
const overlay =   document.getElementById('overlay');
const closeBtn = document.getElementById('close');
let turn = true;
let usedCells = [];
let winner = false;
let ties = 0;
let player1 = {
    Symbol :'<i class = "fa fa-close"><i/>',
    played : [],
    score : 0 
}

let player2 = {
    Symbol :'<i class = "fa fa-circle-o"><i/>',
    played : [],
    score : 0 
}

checkTurn();

function generateWinningCombos(size, winLength) {
    const winCombos = [];

    for (let row = 0; row < size; row++) {
        for (let col = 0; col <= size - winLength; col++) {
            const combo = [];
            for (let k = 0; k < winLength; k++) {
                combo.push(row * size + col + k);
            }
            winCombos.push(combo);
        }
    }

   
    for (let col = 0; col < size; col++) {
        for (let row = 0; row <= size - winLength; row++) {
            const combo = [];
            for (let k = 0; k < winLength; k++) {
                combo.push((row + k) * size + col);
            }
            winCombos.push(combo);
        }
    }

    
    for (let row = 0; row <= size - winLength; row++) {
        for (let col = 0; col <= size - winLength; col++) {
            const combo = [];
            for (let k = 0; k < winLength; k++) {
                combo.push((row + k) * size + (col + k));
            }
            winCombos.push(combo);
        }
    }

 
    for (let row = 0; row <= size - winLength; row++) {
        for (let col = winLength - 1; col < size; col++) {
            const combo = [];
            for (let k = 0; k < winLength; k++) {
                combo.push((row + k) * size + (col - k));
            }
            winCombos.push(combo);
        }
    }

    return winCombos;
}

const winCombos = generateWinningCombos(20, 5);


cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (isEmpty(index)) {
            if (turn) {
                addSymbol(player1, index);
                turn = false;
                checkWin(player1);
            } else {
                addSymbol(player2, index);
                turn = true;
                checkWin(player2);
            }
            checkTurn();
        } else {
            alert('Choisissez une case vide');
        }
    });
});


function addSymbol(player, i) {
   
    if (i >= 0 && i < cells.length) {
        cells[i].innerHTML = player.Symbol;
        player.played.push(i); 
        usedCells.push(i);
    } else {
        console.error("L'indice de cellule est hors des limites de la grille:", i);
    }
}

function checkWin(player) {
    if (!winner) {
        winCombos.some(combo => {
            if (combo.every(index => player.played.includes(index))) {
                winner = true;
                player.score++;
                showScore();
                setTimeout(showMessage, 500, player, winner);
                return true; 
            }
            return false;
        });
    }
    if (!winner && usedCells.length === 20 * 20) {
        ties++;
        showScore();
        setTimeout(showMessage, 500);
    }
}

function isEmpty(i){
    if(usedCells.includes(i)){
        return false;
    }
    return true;

}
function reset(){
    cells.forEach(cell => {
      cell.innerHTML = ''; 
    })
    winner = false
    usedCells =[];
    player1.played = [];
    player2.played = [];
    turn = true ;
    checkTurn();
}
resetBtn.addEventListener('click' , reset);

function checkTurn(){
    if(turn){
        currentTurn.innerHTML = player1.Symbol;
    }else{
        currentTurn.innerHTML = player2.Symbol;
    }
}

function showScore(){
    player1score.innerHTML = player1.score;
    player2score.innerHTML = player2.score;
    draw.innerHTML = ties;
}


closeBtn.addEventListener('click', ()=>{
    overlay.style.display ='none';
})
function showMessage(player,winner){
    overlay.style.display = 'flex';
    if(winner){
        messageContent.innerHTML = player.Symbol + ' is the <h2>Winner</h2>';
      
    }else{
       messageContent.innerHTML = 'It is a <h2>Draw</h2>'; 
    }
    reset();
}