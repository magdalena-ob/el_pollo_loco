class Cloud extends MovableObject {
    y = 20;
    width = 600;
    height= 350;

    constructor(x) {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.x = x;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}