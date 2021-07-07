class EndbossStatusBar extends DrawableObject {
    IMAGES_LIFE = [
        'img/7.Marcadores/Marcadorvida_enemy/Vede.png',
        'img/7.Marcadores/Marcadorvida_enemy/Azul.png',
        'img/7.Marcadores/Marcadorvida_enemy/Naranja.png'
    ];

    percentage = 100;

    constructor(x, y) {
        super();
        this.loadImages(this.IMAGES_LIFE);
        this.x = x;
        this.y = y;
        this.width = 140;
        this.height = 40;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_LIFE[this.lifeBarIndex()];
        this.img = this.imageCache[path];
    }

    lifeBarIndex() {
        if (this.percentage == 100) {
            return 0;
        } else if (this.percentage > 50) {
            return 1;
        } else {
            return 2;
        }
    }
}