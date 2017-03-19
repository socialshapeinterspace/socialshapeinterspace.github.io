

var worldMapState = {

    player: "",
    enemies: "",

    wall: "",
    ground: "",

    cursors: "",

    door: "",
    enemyNumbers: 0,

    init: function(enemyCount = 5) {
        this.enemyNumbers = enemyCount;
    },

    create: function () {

       game.world.setBounds(0, 0, 1024, 1024);
       ground = game.add.tileSprite(0, 0, 1024, 1024, 'groundGrass');
       door = game.add.sprite(640, 640, 'groundDoor');
       door.scale.setTo(3,3);

       this.player = game.add.sprite(96, 96, 'mainHero');
       this.player.anchor.set(0.5);
       game.camera.follow(this.player);
       game.physics.arcade.enable(this.player);

       this.enemies = game.add.physicsGroup();
       for (var i = 0; i < this.enemyNumbers; i++)
       {
         this.enemies.create(game.rnd.integerInRange(96, 928), game.rnd.integerInRange(96, 928), 'enemyBattle1');
         game.add.tween(this.enemies).to( { y: (this.enemies.y + 50)}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
       }

       this.cursors = game.input.keyboard.createCursorKeys();

       this.wall = game.add.physicsGroup();
       this.wall.create(0,0, 'wallBlock');
       this.wall.create(960,0, 'wallBlock');
       this.wall.create(960,960, 'wallBlock');
       this.wall.create(0,960, 'wallBlock');
       this.wall.create(496,496, 'wallBlock');
       this.wall.setAll('body.immovable', true);

    },

    update: function() {

        game.physics.arcade.collide(this.player, this.wall);
        this.player.body.collideWorldBounds = true;
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        game.physics.arcade.collide(this.player, this.enemies, this.collisionCallback, this.processCallback, this);
        game.physics.arcade.collide(this.wall, this.enemies);



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

    },

    processCallback: function(obj1, obj2)
    {
        obj2.kill();
    },

    collisionCallback: function(obj1, obj2)
    {
      obj2.kill();
    }

}
