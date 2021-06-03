class Cloud extends MovableObject {
    y = 20;
    width = 600;
    height= 350;
    speed = 0.13;

    constructor() {
        super().loadImage('../img/5.Fondo/Capas/4.nubes/1.png');
        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/60); 
    }
}