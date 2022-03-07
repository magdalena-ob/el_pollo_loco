class GameOver extends DrawableObject {
    gameFinished = false;
    lostGame = false;
    x = 0;
    y = 0;
    width = 720;
    height = 480;

    IMAGE_LOST = 'img/9.Intro _ Outro Image/_Game over_ screen/2.oh no you lost!.png';
    IMAGE_WON = 'img/9.Intro _ Outro Image/_Game over_ screen/You won.png';

    constructor() {
        super().loadImage('img/9.Intro _ Outro Image/_Game over_ screen/3.Game over.png');
    }

    showEndscreen() {
        if (this.lostGame) {
            this.loadImage(this.IMAGE_LOST);
            document.getElementById('tryAgain').classList.remove('d-none');
        } else {
            this.loadImage(this.IMAGE_WON);
            document.getElementById('playAgain').classList.remove('d-none');
        }
    }
}