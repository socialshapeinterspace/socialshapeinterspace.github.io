
var level1State = {

  player: "",
  map: "",

  Grass: "",
  Trees: "",

  TreeSheet: "",
  Group: "",

  create: function() {

    game.world.setBounds(0,0,320,320);

    // Add Level 1 Tile Map
    this.map = game.add.tilemap('level1');
    this.map.addTilesetImage('grass');
    this.map.addTilesetImage('trees');
    this.Grass = this.map.createLayer('grass');
    this.Trees = this.map.createLayer('trees');


    // Add Animated Objects
    this.Group = game.add.physicsGroup();
    for (var i = 1; i <= 3; i++)
    {
      this.TreeSheet = this.Group.create(388, 64*i, 'treeSheet');
      this.TreeSheet.animations.add('breathe', [0,1,2,1,0,3,4,3]);
      this.TreeSheet.animations.play('breathe', 12, true);
    }
    this.Group.setAll('body.immovable', true);


    // Add Hero
    this.player = game.add.sprite(96, 96, 'mainHero');
    this.player.anchor.set(0.5);
    game.camera.follow(this.player);
    game.physics.arcade.enable(this.player);


    // Add Tilemap Collisions
    this.map.setCollisionBetween(4, 7, true, 'trees');


    // Add Movement
    this.cursors = game.input.keyboard.createCursorKeys();


  },

  update: function() {


    game.physics.arcade.collide(this.player, this.Group);
    game.physics.arcade.collide(this.player, this.Trees);


    this.player.body.velocity.x = 0;
    this.player.body.velocity.y = 0;


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


  }


}
