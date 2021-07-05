let canvas;
let world;
let keyboard = new KeyboardObject();
let gameOver = new GameOver();

function init() {
   showStartScreen();
}

function showStartScreen() {
    document.getElementById('startscreen').classList.remove('d-none');
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('playAgain').classList.add('d-none'); 
    document.getElementById('tryAgain').classList.add('d-none'); 
}

function startGame() {
    document.getElementById('startscreen').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard, gameOver);
}

window.addEventListener('keydown', (e) =>{
    if(e.keyCode == 38) {
        keyboard.KEY_UP = true;
    }
    if(e.keyCode == 40) {
        keyboard.KEY_DOWN = true;
    }
    if(e.keyCode == 37) {
        keyboard.KEY_LEFT = true;
    }
    if(e.keyCode == 39) {
        keyboard.KEY_RIGHT = true;
    }
    if(e.keyCode == 32) {
        keyboard.KEY_SPACE = true;
    }
    if(e.keyCode == 68){
        keyboard.KEY_D = true;
    }
    if(e.keyCode == 38 || 40 || 37 || 39 || 32) {
        keyboard.KEY_PRESS = true;
    }
});

window.addEventListener('keyup', (e) =>{
    if(e.keyCode == 38) {
        keyboard.KEY_UP = false;
    }
    if(e.keyCode == 40) {
        keyboard.KEY_DOWN = false;
    }
    if(e.keyCode == 37) {
        keyboard.KEY_LEFT = false;
    }
    if(e.keyCode == 39) {
        keyboard.KEY_RIGHT = false;
    }
    if(e.keyCode == 32) {
        keyboard.KEY_SPACE = false;
    }
    if(e.keyCode == 68){
        keyboard.KEY_D = false;
    }
});

//Startscreen open and close story about Pepe
function openStory() {
    document.getElementById('story').classList.remove('d-none');
}

function closeStory() {
    document.getElementById('story').classList.add('d-none');
}

//Fullscreen
function goFullScreen() {
    canvas.requestFullscreen();
}

function playAgain() {
    location.reload();
}
