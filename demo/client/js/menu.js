var menuState = {

    transData: {
        enemyCount: 3,
    },

    create: function () {

        function centerAnchorOrigin(a) {
          a.anchor.setTo(0.5, 0.5);
        }

        function goToWorldMap(){
          game.state.start('worldMap',1,0,this.transData);
        }

        function goToCredits(){
          game.state.start('credits');
        }

        function goToBattle(){
          game.state.start('battleMode',1,0,this.transData);
        }

        var gameLogo;
        var menuPointer;
        var startButton;
        var creditButton;

        //game.add.plugin(Phaser.Plugin.Debug);

        // Logo
        gameLogo = game.add.image( (game.world.width * 0.5), (game.world.height * 0.375), 'menuLogo');
          centerAnchorOrigin(gameLogo);
          gameLogo.alpha = 0;
          game.add.tween(gameLogo).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);

        // Start Game
        startButton = game.add.image( (game.world.width * 0.5), (game.world.height * 0.8), 'gameStartIcon' );
          startButton.inputEnabled = true;
          startButton.events.onInputDown.add(goToWorldMap, this);

          centerAnchorOrigin(startButton);

          startButtonIcon = game.add.image( (game.world.width * 0.32), (game.world.height * 0.8), 'menuPointer');
            centerAnchorOrigin(startButtonIcon);
            startButtonIcon.alpha = 0;
            game.add.tween(startButtonIcon).to( { alpha: 1 }, 200, Phaser.Easing.Linear.None, true, 2001, 1000, true);

        // Credits
        creditButton = game.add.image( (game.world.width * 0.5), (game.world.height * 0.9), 'creditsButtonIcon' );
          creditButton.inputEnabled = true;
          creditButton.events.onInputDown.add(goToCredits, this);

          centerAnchorOrigin(creditButton);

        //button to go straight in battle (debugging testing only)
        var bXpos = game.world.width * 0.75;
        var bYpos = game.world.height * 0.75;
        battleButton = game.add.image( bXpos, bYpos, 'enemyBattle1' );
        battleButton.inputEnabled = true;
        battleButton.events.onInputDown.add(goToBattle, this);

        //game.add.plugin(Phaser.Plugin.Inspector);
  },

  update: function (){

        if ( game.input.keyboard.isDown(Phaser.Keyboard.ENTER) ) {

          game.state.start('worldMap',true,false,this.transData);

        } else if ( game.input.keyboard.isDown(Phaser.Keyboard.B) ) {

          //arguments (level key, clear canvas?, clear resources?, ...)
          game.state.start('battleMode',true,false,this.enemyStart);

        } else if ( game.input.keyboard.isDown(Phaser.Keyboard.M) ) {

          game.state.start('worldMap',true,false,this.transData);
        }
  },

  start: function() {
       game.state.start('worldMap');
  }

        //game.add.plugin(Phaser.Plugin.Inspector);
};
