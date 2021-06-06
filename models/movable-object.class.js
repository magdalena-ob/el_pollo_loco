class MovableObject {
    x = 120;
    y = 250;
    img;
    width = 120;
    height = 180;
    imageCache = {};
    speed = 0.13;
    
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/60); 
    }
}