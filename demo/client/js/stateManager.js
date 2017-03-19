var w = 640,
  h = 480;

/*
For Fullscreen put this code:

var w = window.innerWidth * window.devicePixelRatio,
    h = window.innerHeight * window.devicePixelRatio;
*/

var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('worldMap', worldMapState);
game.state.add('battleMode', battleState);
game.state.add('credits',creditState);
game.state.start('boot');
