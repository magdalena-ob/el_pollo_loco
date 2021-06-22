class World {
    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    bottleBar = new BottleBar();
    coinBar = new CoinBar();
    throwableObjects = [];
    //AUDIO_BACKGROUND = new Audio('audio/background.mp3');


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();
        this.checkCollisonBottle();
        this.run();
        // this.AUDIO_BACKGROUND.play();
        // this.AUDIO_BACKGROUND.volume = 0.04;  
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);

        this.ctx.translate(-this.camera_x, 0);
        //-----space for fixed objects-----
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flimImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flimImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    run() {
        setInterval(() => {
            this.throwBottle();
            this.checkCollision();
            this.checkCollisonBottle();
            this.checkCollisonCoin();
        }, 200);
    }

    checkCollision() {
        this.level.enemies.forEach((enemy, index) => {
            if (enemy.chickenAlive) {
                if (this.character.isColliding(enemy) && !this.character.isAboveGround()) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                } else if (this.character.isColliding(enemy) && this.character.isAboveGround()) {
                    console.log('chicken dies ', enemy);
                    this.chickenDied(enemy)
                    this.removeChicken(index);
                }
            }
        });
    }

    chickenDied(enemy) {
        return enemy.chickenAlive = false;
     }
    
    removeChicken(index) {
        setTimeout(() => {
            this.level.enemies.splice(index, 1);
        }, 2000);  
    }

    checkCollisonBottle() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.character.collectBottle();
                this.bottleBar.setPercentage(this.character.bottleAmount);
                this.removeBottle(index);
            }
        })
    }

    removeBottle(index) {
        this.level.bottles.splice(index, 1);
    }

    throwBottle() {
        if (this.keyboard.KEY_D && this.bottleBar.percentage > 0) {
            let bottle = new ThrowableObject(this.character.x + 20, this.character.y + 80);
            this.throwableObjects.push(bottle);
            this.character.reduceBottle();
            this.bottleBar.setPercentage(this.character.bottleAmount);
        }
    }

    checkCollisonCoin() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoin();
                this.coinBar.setPercentage(this.character.coinAmount);
                this.removeCoin(index);
            }
        })
    }

    removeCoin(index) {
        this.level.coins.splice(index, 1);
    }
}