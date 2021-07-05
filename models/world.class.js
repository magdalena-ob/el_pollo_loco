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
    endBoss = this.level.enemies[this.level.enemies.length - 1];
    endbossBar = new EndbossStatusBar(this.endBoss.x + 100, this.endBoss.y - 50);
    //gameOver = new GameOver();
    gameOver;

    AUDIO_CHICKEN = new Audio('audio/chicken.mp3');
    AUDIO_GAMEOVER = new Audio('audio/game_over.mp3');
    AUDIO_BACKGROUND = new Audio('audio/background.mp3');

    constructor(canvas, keyboard, gameOver) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.gameOver = gameOver;
        this.draw();
        this.setWorld();
        this.checkCollision();
        this.checkCollisonBottle();
        this.run();
        this.AUDIO_GAMEOVER.pause();
        this.AUDIO_GAMEOVER.muted = false;
        this.AUDIO_BACKGROUND.play();
        this.AUDIO_BACKGROUND.volume = 0.04; 
        this.AUDIO_BACKGROUND.muted = false;
        this.AUDIO_CHICKEN.muted = false;
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
        this.addToMap(this.endbossBar);

        this.ctx.translate(-this.camera_x, 0);
        //-----space for fixed objects-----
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
        if (this.gameOver.gameFinished) {
            this.addToMap(this.gameOver);
        }
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
            this.calculateCharacterPosition();
            this.checkCollisionBottleEndboss();
            this.checkBottleAvailable();
            this.checkCollisionEndboss();
            this.timePassedSinceThrowEvent();
            this.checkChickenPosition();
            this.checkIfCharacterIsDead();
            this.checkIfGameOver();
        }, 200);
    }

    //Collision with chickens
    checkCollision() {
        this.level.enemies.forEach((enemy, index) => {
            if (enemy.chickenAlive) {
                if (this.character.isColliding(enemy) && !this.character.isAboveGround()) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                } else if (this.character.isColliding(enemy) && this.character.isAboveGround()) {
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

    //Collision with bottles
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

    //collision with coins
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

    calculateCharacterPosition() {
        if (this.character.x > this.level.level_end_x - 100) {
            this.endBoss.characterNearEndboss = true;
        }
    }

    //check if bottle hits endboss
    checkCollisionBottleEndboss() {
        this.throwableObjects.forEach((bottle) => {
            if (this.isCollidingBottle(bottle)) {
                console.log('hit endboss');
                this.endBoss.hitEndboss();
            }
        })
    }


    isCollidingBottle(bottle) {
        return bottle.x + bottle.width > this.endBoss.x &&
            bottle.y + bottle.height < this.endBoss.y + this.endBoss.height - 80 &&
            bottle.y + bottle.height > this.endBoss.y &&
            bottle.x + bottle.width < this.endBoss.x + this.endBoss.width;
    }


    checkBottleAvailable() {
        if (this.bottleBar.percentage == 0) {
            this.endBoss.bottleAvailable = false;
        } else {
            this.endBoss.bottleAvailable = true;
        }
    }

    //check if endboss hits character
    checkCollisionEndboss() {
        if (this.isCollidingEndboss()) {
            console.log('endboss hit pepe');
            this.character.hitByEndboss();
            this.statusBar.setPercentage(this.character.energy);
        }
    }

    isCollidingEndboss() {
        return this.character.x + this.character.width > this.endBoss.x &&
            this.character.y + this.character.height < this.endBoss.y + this.endBoss.height &&
            this.character.y + this.character.height > this.endBoss.y &&
            this.character.x + this.character.width < this.endBoss.x + this.endBoss.width;
    }

    //check if Key D has been pressed
    timePassedSinceThrowEvent() {
        if (this.keyboard.KEY_D) {
            this.endBoss.lastTimePressedD = new Date().getTime();
        }
    }

    checkChickenPosition() {
        let chicken = this.level.enemies;
        for (let i = 0; i < chicken.length - 1; i++) {
            if (this.chickenisNear(chicken, i) && !this.gameOver.gameFinished) {
                this.AUDIO_CHICKEN.play();
                this.AUDIO_CHICKEN.volume = 0.3;
                
            }
        }
    }

    chickenisNear(chicken, i) {
        return this.character.x > chicken[i].x - 200 &&
            this.character.x + this.character.width < chicken[i].x + chicken[i].width;
    }

    checkIfCharacterIsDead() {
        if (this.character.dead) {
            this.endBoss.killedCharacter = true;
        }
    }

    checkIfGameOver() {
        if (this.character.dead || this.endBoss.dead) {
            this.gameOver.gameFinished = true;
            this.gameOver.lostGame = this.character.dead && !this.endBoss.dead ? true : false;
            this.gameOver.showEndscreen();
            this.AUDIO_BACKGROUND.pause();
            this.AUDIO_GAMEOVER.play();
            this.AUDIO_GAMEOVER.volume = 0.2;
            this.AUDIO_GAMEOVER.loop = false;
        }
    }
}