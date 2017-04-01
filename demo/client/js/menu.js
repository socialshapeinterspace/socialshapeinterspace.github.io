var menuState = {

    transData: {},

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

        function goToBattleTest(){
          game.state.start('battleMode',1,0,this.transData);
        }

        var gameLogo;
        var menuPointer;
        var startButton;
        var creditButton;

        //Feel free to change this
        this.transData.enemyCount = 5;

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

          /*
          //****TESTING******
          //button to go straight in battle (debugging testing only)
          var bXpos = game.world.width * 0.75;
          var bYpos = game.world.height * 0.75;
          battleButton = game.add.image( bXpos, bYpos, 'enemyBattle1' );
          battleButton.inputEnabled = true;
          battleButton.events.onInputDown.add(goToBattleTest, this);
          */
          
        //game.add.plugin(Phaser.Plugin.Inspector);
  },

  update: function (){

        //Advice: abstract verbose control flow for readability when necessary
        //The update function may not be the best place to declare vars however
        var enterKey = game.input.keyboard.isDown(Phaser.Keyboard.ENTER);
        var mKey = game.input.keyboard.isDown(Phaser.Keyboard.M);
        var bKey = game.input.keyboard.isDown(Phaser.Keyboard.B);

        if (enterKey || mKey) {
          //notice the levelTransfer is being called with only 1 argument,
          //this is the default parameter at work.
          //this.levelTransfer('worldMap');
          console.log(this.transData);
          levelTransfer.goTo('worldMap',this.transData);
        }
        else if (bKey) {
          //this.levelTransfer('battleMode');
          levelTransfer.goTo('battleMode',this.transData);
        }
  },

};

//game.add.plugin(Phaser.Plugin.Inspector);
