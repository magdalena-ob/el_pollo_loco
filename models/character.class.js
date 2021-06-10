class Character extends MovableObject {
    currentImage = 0;
    IMAGES_WALKING = [
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];
    IMAGES_STANDING = [
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png'
    ];
    IMAGES_SLEEPING = [
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-11.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-12.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-13.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-14.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-15.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-16.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-17.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-18.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-19.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-20.png'
    ];
    AUDIO_WALKING = new Audio('../audio/running.mp3');
    world;
    speed = 6;

    constructor() {
        super().loadImage('../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png');
        this.loadImages(this.IMAGES_STANDING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_SLEEPING);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.AUDIO_WALKING.pause();
            if(this.world.keyboard.KEY_RIGHT && this.x < this.world.level.level_end_x){
                this.x += this.speed;
                this.otherDirection = false;
                this.AUDIO_WALKING.play();
            }

            if(this.world.keyboard.KEY_LEFT && this.x > 0){
                this.x -= this.speed;
                this.otherDirection = true;
                this.AUDIO_WALKING.play();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000/60);

        setInterval(() => {
            if (this.world.keyboard.KEY_RIGHT || this.world.keyboard.KEY_LEFT) {
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            } else if(this.world.keyboard.KEY_PRESS !== true) {
                let i = this.currentImage % this.IMAGES_SLEEPING.length;
                let path = this.IMAGES_SLEEPING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            } else {
                let i = this.currentImage % this.IMAGES_STANDING.length;
                let path = this.IMAGES_STANDING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 100);
    }
}