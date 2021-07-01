class Character extends MovableObject {
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];
    IMAGES_STANDING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png'
    ];
    IMAGES_SLEEPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-11.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-12.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-13.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-14.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-15.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-16.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-17.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-18.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-19.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-20.png'
    ];
    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png'
    ];
    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
    ];
    IMAGES_DEAD = [
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png'
    ];
    AUDIO_WALKING = new Audio('audio/running.mp3');
    AUDIO_HURTING = new Audio('audio/hurt.mp3');
    AUDIO_JUMPING = new Audio('audio/jump.mp3');
    world;
    speed = 6;

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png');
        this.loadImages(this.IMAGES_STANDING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_SLEEPING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.AUDIO_WALKING.pause();
            if (this.world.keyboard.KEY_RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                if(!this.isAboveGround()) {
                    this.AUDIO_WALKING.play();
                }    
            }

            if (this.world.keyboard.KEY_LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                if(!this.isAboveGround()) {
                    this.AUDIO_WALKING.play();
                }   
            }

            if (this.world.keyboard.KEY_SPACE && !this.isAboveGround()) {
                this.jump();
                this.AUDIO_JUMPING.play();
            }
       
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.AUDIO_HURTING.play();
                this.AUDIO_HURTING.volume = 0.2;
            } else if(this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout(() => {
                    this.applyGravity();
                }, 2000);
                setTimeout(() => {
                    this.world.gameOver.gameFinished = true;
                    this.world.gameOver.youLost = true;
                }, 2000);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.world.keyboard.KEY_RIGHT || this.world.keyboard.KEY_LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                } else if (this.world.keyboard.KEY_PRESS !== true) {
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
            }
        }, 100);
    }

}