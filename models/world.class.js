class World {
    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    bottleBar = new BottleBar();
    throwableObjects = [];
    AUDIO_BACKGROUND = new Audio('audio/background.mp3');
   

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();
        this.checkCollisonBottle();
        this.run();
        this.AUDIO_BACKGROUND.play();
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

        this.ctx.translate(-this.camera_x, 0);
        //-----space for fixed objects-----
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleBar);
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
        }, 200);
    }

    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    checkCollisonBottle() {
        this.level.bottles.forEach((bottle, index) => {
            if(this.character.isColliding(bottle)){
                console.log('character caches bottle ', bottle);
                this.character.collectBottle();
                this.bottleBar.setPercentage(this.character.bottleAmount);
                this.removeBottle(index);    
            }
        })
    }

    removeBottle(index) {
        this.level.bottles.splice(index, 1);
        this.draw();
    }

    throwBottle() {
        if (this.keyboard.KEY_D) {
            let bottle = new ThrowableObject(this.character.x + 20, this.character.y + 80);
                 this.throwableObjects.push(bottle);
        }

    }
}