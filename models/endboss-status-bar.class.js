class EndbossStatusBar extends DrawableObject {
    IMAGES_LIFE = [
        'img/7.Marcadores/Marcadorvida_enemy/e_0_.png',
        'img/7.Marcadores/Marcadorvida_enemy/e_20_.png',
        'img/7.Marcadores/Marcadorvida_enemy/e_40_.png',
        'img/7.Marcadores/Marcadorvida_enemy/e_60_.png',
        'img/7.Marcadores/Marcadorvida_enemy/e_80_.png',
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
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}