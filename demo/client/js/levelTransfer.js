var levelTransfer = {

    goTo : function(location, data){

        switch(location){

            case "worldMap":
                console.log("It worked!! =D");
                game.state.start('worldMap',true,false,data);
                break;

            case "battleMode":
                game.state.start('battleMode',true,false,data);
                break;

            case "battleMode":
                game.state.start('worldMap',true,false,data);
                break;

            case "credits":
                game.state.start('credits',true,false,data);
                break;
        }
    },


}
