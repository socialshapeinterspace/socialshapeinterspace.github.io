

var worldMapState = {

    transData:{},
    player: "",
    enemies: "",
    stageWidth:  1024,
    stageHeight: 1024,

    wall: "",
    ground: "",

    cursors: "",

    door: "",
    enemyNumbers: 0,

    instructions: "",

    myText:"You got rid of all of the harrasers! Congratulations!",

    init: function(transData) {
        var num = transData.enemyCount;
        this.battleTransfer(num);

        //pass explicit level information
        this.transData.currentArea = "worldMap";
    },

    battleTransfer: function(count){
        if (sessionStorage.getItem("battleReturn")){
            //this
        }
        else{
            //this is the first time we're visiting this stage presently
            this.enemyNumbers = count;
        }
    },

    enemyHandler: function(){
        this.enemies = game.add.physicsGroup();
        for (var i = 0; i < this.enemyNumbers; i++)
        {
          this.enemies.create(game.rnd.integerInRange(96, 928), game.rnd.integerInRange(96, 928), 'enemyBattle1');
          game.add.tween(this.enemies).to( { y: (this.enemies.y + 50)}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        }
    },

    create: function () {

      console.log('Harrasers Left:' + this.enemyNumbers);



       game.world.setBounds(0, 0, this.stageWidth, this.stageHeight);
       this.ground = game.add.tileSprite(0, 0, 1024, 1024, 'groundGrass');

       this.player = game.add.sprite(96, 96, 'mainHero');
       this.player.anchor.set(0.5);
       game.physics.arcade.enable(this.player);

       //Control Game Camera
       var camStyle = Phaser.Camera.FOLLOW_PLATFORMER;
       game.camera.setSize(640,400);
       game.camera.follow(this.player,camStyle);


       //generate enemies
       this.enemyHandler();

       this.cursors = game.input.keyboard.createCursorKeys();

       this.wall = game.add.physicsGroup();
       this.wall.create(0,0, 'wallBlock');
       this.wall.create(960,0, 'wallBlock');
       this.wall.create(960,960, 'wallBlock');
       this.wall.create(0,960, 'wallBlock');
       this.wall.create(496,496, 'wallBlock');
       this.wall.setAll('body.immovable', true);

       this.door = game.add.physicsGroup();
       this.door.create(560, 560, 'groundDoor');
       this.door.setAll('body.immovable', true);
       //this.door.scale.setTo(3,3);



    },

    update: function() {

      this.instructions = game.add.text(64, 32, "Get rid of all the online trolls!");

      game.time.events.add(Phaser.Timer.SECOND * 4, worldMapState.beginGame, this);

        game.physics.arcade.collide(this.player, this.wall);
        this.player.body.collideWorldBounds = true;
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        game.physics.arcade.overlap(this.player, this.enemies, this.killEnemy);
        game.physics.arcade.collide(this.wall, this.enemies);

        //Experimental touch movement
        if (game.input.mousePointer.isDown){
            game.physics.arcade.moveToXY(this.player, game.input.x, game.input.y, 600);
        }

        if (this.cursors.up.isDown)
        {
            this.player.body.velocity.y = -240;
        }
        else if (this.cursors.down.isDown)
        {
            this.player.body.velocity.y = 240;
        }
        if (this.cursors.left.isDown)
        {
            this.player.body.velocity.x = -240;
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.velocity.x = 240;
        }

          game.physics.arcade.overlap(this.player, this.door, this.beatStage);

    },

    //If this a method specifying an interaction between player and enemy then
    //the paramters be should abstracted as so
    killEnemy: function(player, enemy)
    {
        //obj2.kill();
        sessionStorage.setItem('enemyFight',enemy)
        worldMapState.enemies.remove(enemy);
        worldMapState.enemyNumbers -= 1;
        worldMapState.transData.enemyCount = worldMapState.enemyNumbers;
        levelTransfer.goTo('battleMode',worldMapState.transData);
        console.log('Harrasers Left:' + worldMapState.enemyNumbers);
    },

    beatStage: function(obj1, obj2)
    {
      if (worldMapState.enemyNumbers == 0)
      {
        console.log('Yup');
        var congrats = game.add.text((game.world.width * 0.3), (game.world.height * 0.5), "Congatulations. You got rid of\nall the harrasment trolls online!");

        game.time.events.add(Phaser.Timer.SECOND * 4, worldMapState.winGame, this);

      }
      else
      {
        console.log('Nope');
      }
    },

      winGame: function()
      {
        levelTransfer.goTo('credits',this.transData); //use our module to switch states
        //game.state.start('credits');
      },

      beginGame: function()
      {
        worldMapState.game.add.tween(worldMapState.instructions).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
      }

}
