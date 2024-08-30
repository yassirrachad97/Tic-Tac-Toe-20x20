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
generateGrid(3,3 );

const cells = document.querySelectorAll('.cell');
const winCombos= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let turn = true;
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

for(let i=0; i<9; i++){
cells[i].addEventListener('click',()=>{
   if(turn){
    addSymbol(player1, i);
    checkWin(player1);
    turn = false;
   }
   else{
        addSymbol(player2, i);
        checkWin(player2);
        turn = true;
    }
   
})

}

function addSymbol(player,i){
    cells[i].innerHTML= player.Symbol;
    player.played.push(i); 
}
function checkWin(){
winCombos.some(combo =>{
    if(combo.every(index => player1.played.includes(index))){
        alert ('you won');
    }
})
}