class MovableObject extends DrawableObject {
    speed = 0.13;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastCollision = 0;
    bottleAmount = 0;
    lastCollisionBottle = 0;


    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastCollision = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastCollision;
        timepassed = timepassed / 1000;
        return timepassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 250;
        }
    }

    jump() {
        this.speedY = 20;
    }

    collectBottle(){
        this.bottleAmount += 20;
        //this.lastCollisionBottle = new Date().getTime();
    }

    //takeBottle(){
    //    let timepassed = new Date().getTime() - this.lastCollisionBottle;
    //    timepassed = timepassed / 1000;
    //    return timepassed < 0.5;
    //}

}