var battleState = {

    player: 0,
    playerTween: 0,
    enemy: 0,
    enemyNumber: 0,
    enemyGroup: [],
    hud : {},
    hudSetup : function(){
        var btnVis = 0.3;

        function leap(){
            if (this.player.body.onFloor() || this.player.body.touching.down){
                this.player.body.velocity.y = -1200;
            }
        }
        function fall(){
            if (!this.player.body.onFloor() || !this.player.body.touching.down){
                this.player.body.velocity.y = 200;
            }
        }
        function tackle(){

            var tween = game.add.tween(this.player); //test with local variable
            var properties = { x: this.enemy.x };
            var moveSpeed = 500;
            this.player.dashing = true;
            tween.to( properties,moveSpeed, Phaser.Easing.Linear.None, true, 0, 0, false);
            tween.onComplete.addOnce(returnToOrigin, this);
        }

        function returnToOrigin(){

            var tween = game.add.tween(this.player); //test with local variable
            var properties = { x: this.player.xMark };
            var moveSpeed = 500;
            this.player.dashing = true;
            tween.to( properties,moveSpeed, Phaser.Easing.Linear.None, true, 0, 0, false);
        }


        this.hud.circleButton = game.add.image( (game.world.width * 0.70), (game.world.height * 0.5), 'menuCircleButton');
        this.hud.circleButton.anchor.set(0.5);
        this.hud.circleButton.alpha = btnVis;
        this.hud.circleButton.scale.x = 3;
        this.hud.circleButton.scale.y = 3;
        this.hud.circleButton.inputEnabled = true;
        this.hud.circleButton.events.onInputDown.add(tackle, this);

        this.hud.downButton = game.add.image( (game.world.width * 0.15), (game.world.height * 0.80), 'menuDownButton');
        this.hud.downButton.anchor.set(0.5);
        this.hud.downButton.alpha = btnVis;
        this.hud.downButton.scale.x = 3;
        this.hud.downButton.scale.y = 3;
        this.hud.downButton.inputEnabled = true;
        this.hud.downButton.events.onInputDown.add(fall, this);

        this.hud.upButton = game.add.image( (game.world.width * 0.15), (game.world.height * 0.20), 'menuDownButton');
        this.hud.upButton.anchor.set(0.5);
        this.hud.upButton.alpha = btnVis;
        this.hud.upButton.scale.x = 3;
        this.hud.upButton.scale.y = 3;
        this.hud.upButton.scale.y *= -1;
        this.hud.upButton.inputEnabled = true;
        this.hud.upButton.events.onInputDown.add(leap, this);
    },

    init: function(enemyCount){
        this.enemyNumber = enemyCount;
    },

    create: function () {
        console.log("You are now in the battle zooooooonnneee!!!!");
        console.log(`The Enemy Count is ${this.enemyNumber}`);

        this.player = game.add.sprite(100, 100, 'mainHero');
        this.player.anchor.set(0.5);
        game.physics.arcade.enable(this.player);
        this.player.body.gravity.y = 3000;
        this.player.body.collideWorldBounds = true;
        this.player.dashing = false;
        //flag xy coordinates as positions to return to after action
        this.player.xMark = this.player.x;
        this.player.yMark = this.player.y;

        this.player.scale.x = 1.75;
        this.player.scale.y = 1.75;

        this.playerTween = game.add.tween(this.player);

        var randy =  1 + Math.floor(Math.random() * 10);
        this.enemy = game.add.sprite(500,100,"enemyBattle1");
        game.physics.arcade.enable(this.enemy);
        this.enemy.body.gravity.y = 300 + randy;
        this.enemy.anchor.set(0.5);

        this.enemy.scale.x = 1.75;
        this.enemy.scale.y = 1.75;
        this.enemy.body.collideWorldBounds = true;

        this.hudSetup();

    },

    update: function(){
    },
};
