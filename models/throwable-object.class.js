class ThrowableObject extends MovableObject {
    width = 70;
    height = 70;
    IMAGE_ROTATION_BOTTLE = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'   
    ];
    //AUDIO_THROWING = new Audio('audio/throw.mp3');
    
    constructor(x, y) {
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.loadImages(this.IMAGE_ROTATION_BOTTLE);
        this.x = x
        this.y = y
        this.applyGravity();
        this.throw();
    }

    throw() {
        this.speedY = 20;
        setInterval(() => {
            this.x += 7; 
        }, 25);
        //this.AUDIO_THROWING.play();
        setInterval(() => {
            this.playAnimation(this.IMAGE_ROTATION_BOTTLE);
        }, 100); 
    }
}