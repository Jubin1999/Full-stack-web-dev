//Game Constants & Variables
let direction = {x: 0, y:0};
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
]
food = {x: 6, y: 7};



//Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    //console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEnine();
}

function gameEnine(){
    // part 1: Updating the snake array & array & Food
    
    // part 2: Display the snake and Food
    //Display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head')
        }
        else{
            snakeElement.classList.add('snake')
        }
        board.appendChild(snakeElement);
    });
    //Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);

}









//Main logic stars here
window.requestAnimationFrame(main);
window.addEventListener('Keydown', e =>{
    inputDir = {x: 0, y: 1} // start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            break;

        case "ArrowDown":
            console.log("ArrowDown")
            break;

        case "ArrowLeft":
            console.log("ArrowLeft")
            break;

        case "ArrowRight":
            console.log("ArrowRight")
            break;
    }
});