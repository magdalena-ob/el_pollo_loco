class Bottle extends DrawableObject {
    width = 70;
    height = 70;
    y = 355;

  constructor() {
      super().loadImage('../img/6.botella/2.Botella_enterrada2.png');
      this.x = 450 + Math.random() * 2000;
   }
}