class GameStart extends Phaser.Scene{
    constructor() {
        super("gameStart");
    }
    preload(){
        this.load.setPath("./assets/");
        this.load.bitmapFont("kenneyFont", "kenneyFont_0.png", "kenneyFont.fnt");
    }
    create(){
        this.add.bitmapText(720,350,"kenneyFont", "Arrow Keys to move", 64).setOrigin(0.5);
        this.add.bitmapText(720,650,"kenneyFont", "Press SPACE to start", 32).setOrigin(0.5);
        this.input.keyboard.on('keydown-SPACE', ()=> {
            this.scene.start('loadScene');
        });
    }
}