let color = 'black'; 
let click = true;

function populateBoard(size){
    let board = document.querySelector(".board");
    resetBoard();
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i<size**2; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement("beforeend", square);
    }
}

function changeSize(input){
    error = document.querySelector(".error")
    if(input<2 || input>100){
        error.textContent = "Size must be between 2 and 100"
    }else{
        error.textContent = ""
        populateBoard(input);
    }
}

function colorSquare(){
    if(click){
        if(color === "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }else{
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice){
    color = choice;
}

function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div)=> div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) =>{
    if(e.target.tagName != 'BUTTON'){
        click = !click;
        mode = document.querySelector('.mode')
        if(click){
            mode.textContent = "Mode: Drawing"
        }else{
            mode.textContent = "Mode: Not drawing"
        }
    }
})

inp = document.querySelector("input");
changeSize(inp.value);
