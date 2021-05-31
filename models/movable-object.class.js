class MovableObject {
    x = 120;
    y = 250;
    img;
    width = 120;
    height = 180;
    
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
}