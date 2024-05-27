class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOver");
    }
    create(){
        if(win){
            this.add.bitmapText(720, 180, 'kenneyFont', 'You Win!', 64).setOrigin(0.5);
        }
        else{
            this.add.bitmapText(720, 180, 'kenneyFont', 'Game Over', 64).setOrigin(0.5);
        }
        this.add.bitmapText(720, 300, 'kenneyFont', 'Coins Collected: ' + coins, 64).setOrigin(0.5);
        this.add.bitmapText(720, 450,'kenneyFont', 'Press SPACE to try again', 32).setOrigin(0.5);
        this.input.keyboard.on('keydown-SPACE', ()=> {
            win = false;
            coins = 0;
            this.scene.start('loadScene');
        });
    }
}