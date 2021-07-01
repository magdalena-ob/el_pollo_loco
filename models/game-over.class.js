class GameOver extends DrawableObject {
    gameFinished = false;
    youWon = false;
    youLost = false;
    x = 0;
    y = 0;
    width = 720;
    height = 480;

    constructor() {
        super().loadImage('img/9.Intro _ Outro Image/_Game over_ screen/2.oh no you lost!.png');
    }

}