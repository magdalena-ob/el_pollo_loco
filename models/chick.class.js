class Chick extends MovableObject {
    y = 380; 
    height = 40;
    width = 40;
    chickenAlive = true;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
    ];

    IMAGE_DEAD = 'img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png';

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png');
        this.x = 350 + Math.random() * 5200;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        this.speed = 0.15 + Math.random() * 0.25;
    }

    animate() {
        setInterval(() => {
            if (this.chickenAlive) {
                this.moveLeft();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.chickenAlive) {
                this.playAnimation(this.IMAGES_WALKING);
            } else if (this.chickenAlive == false) {
                this.loadImage(this.IMAGE_DEAD);
            }
        }, 100);
    }

}