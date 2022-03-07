let canvas;
let world;
let keyboard = new KeyboardObject();
let gameOver = new GameOver();

function init() {
   showStartScreen();
}

function showStartScreen() {
    document.getElementById('startscreen').classList.remove('d-none');
    document.getElementById('description').classList.remove('d-none');
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('playAgain').classList.add('d-none'); 
    document.getElementById('tryAgain').classList.add('d-none'); 
    
}

function startGame() {
    document.getElementById('startscreen').classList.add('d-none');
    document.getElementById('description').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('fullscreen').classList.remove('d-none');
    document.getElementById('mute1').classList.remove('d-none');
    document.getElementById('mute2').classList.remove('d-none');
    canvas = document.getElementById('canvas');
    level1 = initLevel1();
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

//reload whole game
function playAgain() {
    location.reload();
}

//Ton on/off
function muteMusic() {
    if(world.AUDIO_BACKGROUND.muted == false) {
        world.AUDIO_BACKGROUND.muted = true;
        world.AUDIO_GAMEOVER.muted = true;
        document.getElementById('music').src = "icon/mute.png";
       
    } else {
        world.AUDIO_BACKGROUND.muted = false;
        world.AUDIO_GAMEOVER.muted = false;
        document.getElementById('music').src = "icon/speaker.png";
       
    }   
}

function muteSound() {
    if(world.AUDIO_CHICKEN.muted == false) {
        document.getElementById('sound').src = "icon/mute.png";
        world.AUDIO_CHICKEN.muted = true;
        world.AUDIO_THROWING.muted = true;
        world.character.AUDIO_WALKING.muted = true;
        world.character.AUDIO_HURTING.muted = true;
        world.character.AUDIO_JUMPING.muted = true;
        world.endBoss.AUDIO_SCREAM.muted = true;
        world.endBoss.AUDIO_HURT.muted = true;
        world.character.AUDIO_BOTTLE.muted = true;
        world.character.AUDIO_COIN.muted = true;   
    } else {
        document.getElementById('sound').src = "icon/speaker.png";
        world.AUDIO_CHICKEN.muted = false;
        world.AUDIO_THROWING.muted = false;
        world.character.AUDIO_WALKING.muted = false;
        world.character.AUDIO_HURTING.muted = false;
        world.character.AUDIO_JUMPING.muted = false;
        world.endBoss.AUDIO_SCREAM.muted = false;
        world.endBoss.AUDIO_HURT.muted = false;
        world.character.AUDIO_BOTTLE.muted = false;
        world.character.AUDIO_COIN.muted = false; 
    }
}
