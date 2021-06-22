class Coin extends DrawableObject {
    width = 120;
    height = 120;
 
    constructor(){
        super().loadImage('img/8.Coin/Moneda1.png');
        this.x = 500 + Math.random() * 2000;
        this.y = 100 + Math.random() * 200; 
    }
}