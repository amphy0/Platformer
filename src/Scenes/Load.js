class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.image('sky', 'sky.png');
        this.load.image('rocks', 'rocks.png');

        this.load.audio('run', 'footstep_concrete_003.ogg');
        this.load.audio('jump', 'impactBell_heavy_003.ogg');

        // Load characters spritesheet
        this.load.atlas("platformer_characters", "tilemap-characters-packed.png", "tilemap-characters-packed.json");

        // Load tilemap information
        this.load.image("tilemap_tiles", "tilemap_packed.png");                         // Packed tilemap
        this.load.tilemapTiledJSON("level", "level.tmj");   // Tilemap in JSON

        
        this.load.spritesheet("tilemap_sheet", "tilemap_packed.png", {
            frameWidth: 18,
            frameHeight: 18
        });
        
        this.load.multiatlas("kenny-particles", "kenny-particles.json");
    }

    create() {
        // Get the window sizes
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;

        // Find the center of the top space
        let topBackgroundXOrigin = windowWidth / 2;
        let topBackgroundYOrigin = (windowHeight / 5) * 1.5;
        let topBackgroundHeight = (windowHeight / 5) * 3;
        
        // Base width and height of the images
        let imageBaseWidth = 1920;
        let imageBaseHeight = 1080;
        let heightRatio = topBackgroundHeight / imageBaseHeight;

        // Add the sky image at the right location and resize it to take all the space, no scaling needed
        let skyImage = this.add.image(topBackgroundXOrigin, topBackgroundYOrigin, 'sky');
        this.rocks1 = this.add.tileSprite(topBackgroundXOrigin, topBackgroundYOrigin, imageBaseWidth, imageBaseHeight, 'rocks');
        this.rocks1.setScale(heightRatio);
        skyImage.setDisplaySize(windowWidth, topBackgroundHeight);
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('platformer_characters', {
                prefix: "tile_",
                start: 0,
                end: 1,
                suffix: ".png",
                zeroPad: 4
            }),
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            defaultTextureKey: "platformer_characters",
            frames: [
                { frame: "tile_0000.png" }
            ],
            repeat: -1
        });

        this.anims.create({
            key: 'jump',
            defaultTextureKey: "platformer_characters",
            frames: [
                { frame: "tile_0001.png" }
            ],
        });

         // ...and pass to the next Scene
         this.scene.start("platformerScene");
    }

    // Never get here since a new scene is started in create()
    update() {
    }
}