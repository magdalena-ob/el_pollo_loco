let canvas;
let world;
let keyboard = new KeyboardObject();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);

    console.log('My character is ', Character);
}

window.addEventListener('keydown', (e) =>{
    console.log(e);
    if(e.keyCode == 38) {
        keyboard.KEY_UP = true;
    }
});