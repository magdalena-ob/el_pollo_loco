let clouds = [];
//let cloudsPosition = [0, 700, 1400, 2100];
let bottles = [];
let coins = [];
let x = 0;
let y = 0;

//for(let i = 0; i < cloudsPosition.length; i++){
//    let x = cloudsPosition[i] + Math.random() * 500;
//    clouds.push(new Cloud(x));
//}

//Clouds
for(let i = 0; i < 15; i++) {
    let x = i * 700 + Math.random() * 100;
    clouds.push(new Cloud(x));
}

//Bottles
for(let i = 0; i < 10; i++) {
    let x = 450 + Math.random() * 5200;
    bottles.push(new Bottle(x));
}

//Coins
for(let i = 0; i < 20; i++) {
    let x = 500 + Math.random() * 5600;
    let y = 100 + Math.random() * 200; 
    coins.push(new Coin(x, y));
}

const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    
        clouds,
    
    [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719, 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0, 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719, 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*2, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719*2, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719*2, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*2, 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*3, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719*3, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719*3, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719*3, 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*4, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719*4, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719*4, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*4, 0), 

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*5, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719*5, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719*5, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719*5, 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*6, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719*6, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719*6, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*6, 0), 

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*7, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719*7, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719*7, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719*7, 0),

        
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*8, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719*8, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719*8, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*8, 0)
    ],

    bottles, 

    coins
);