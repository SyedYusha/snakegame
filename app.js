const mainBoard = document.querySelector('.board')
const blockWidth = 50;
const blockHeight = 50;

const boardColumn = Math.floor(mainBoard.clientWidth / blockWidth);
const boardRows = Math.floor(mainBoard.clientHeight / blockHeight);

const blocks = []
const snake = [
    {x: 1,y: 3},
]
let direction ="right";
for (let row = 0; row < boardRows; row++) {
    for (let col = 0; col < boardColumn; col++) {
        const block = document.createElement('div');
        block.classList.add("block")
        mainBoard.appendChild(block)
        block.innerText = `${row} - ${col}`;
        blocks[`${row} - ${col}`] = block
    }
}

function render() {
    snake.forEach(segment => {
        blocks[`${segment.x} - ${segment.y}`].classList.add("fill");
    });
};
        

