var loadState = {

    preload: function () {

        /*
        Load all game assets
        Place your load bar, some messages.
        In this case of loading, only text is placed...
        */

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;

        var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#fff'});

        //Menu Items
        game.load.image('menuLogo', 'assets/img/menuGraphics/menuLogo.png');
        game.load.image('menuPointer', 'assets/img/menuGraphics/menuPointer.png');
        game.load.image("creditsButtonIcon",'assets/img/menuGraphics/menuCredits.png');
        game.load.image('creditsBack', 'assets/img/menuGraphics/creditsBack.png');
        game.load.image("gameStartIcon",'assets/img/menuGraphics/menuStartGame.png');
        game.load.image("menuCircleButton",'assets/img/menuGraphics/menuButtonCircle.png');
        game.load.image("menuDownButton",'assets/img/menuGraphics/menuButtonDown.png');

        game.load.image("groundGrass",'assets/img/groundGrass1.png');
        game.load.image("groundDoor", 'assets/img/groundDoor.png');
        game.load.image('enemyBattle1','assets/img/characters/prototypeEnemy.png');
        game.load.image('wallBlock','assets/img/characters/prototypeWall.png');
        game.load.image('mainHero', 'assets/img/characters/prototypeHero.png');

        game.load.tilemap('level1', 'assets/tileMaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grass', 'assets/tileMaps/grass.png');
        game.load.image('trees', 'assets/tileMaps/trees.png');

        // Sprite Sheets
        game.load.spritesheet('treeSheet', 'assets/img/spriteSheets/treeSheet.png', 64, 64);

        //Load your sounds, efx, music...
        //Example: game.load.audio('rockas', 'assets/snd/rockas.wav');

        //Load your data, JSON, Querys...
        //Example: game.load.json('version', 'http://phaser.io/version.json');

    },

    create: function () {

        game.stage.setBackgroundColor('#000');
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.state.start('menu');
    },
};
