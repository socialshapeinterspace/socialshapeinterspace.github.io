var creditState = {

    create: function () {
        
        var textTitle;      
        var returnButton;

        var textStyles = { 
            font: "14px Century Gothic", 
            fill: '#ffffff' 
        };
      
        var content = [
            ["Ean Moore : Programming/Project Management \n Computer Science Major @ Mt. Sac College", 0.125, 0.25],
            ["Yunha Kim : Character & Visual Designer \n Marketing Major @ San Francisco State University", 0.125, 0.4],
            ["Jacob McAdam : GUI Programming \n Graphic Design Major @ San Francisco State University", 0.125, 0.55],
            ["Ihsan Taha : Character Programming \n Computer Science Major @ San Francisco State University", 0.125, 0.70],
            ["Yuehongxiao Ma : Designer \n Computer Science Major @ San Francisco State University", 0.125, 0.85]
        ];
        
        function goToMenu(){
            game.state.start('menu');
        }
        
        function applyStyle(sty){  
            var items = sty.length;
            for(var i = 0; i < items; i++) {
                var name  = game.add.text( (game.world.width * sty[i][1]), (game.world.height * sty[i][2]), sty[i][0], textStyles );
                var title = game.add.text( (game.world.width * sty[i][1]), (game.world.height * sty[i][2]), sty[i][0], textStyles );
                name.lineSpacing = 1;
                title.lineSpacing = 1;
            }
        };
        
        
        // Page Title
        textTitle = game.add.image( (game.world.width * 0.05), (game.world.height * 0.125), 'creditsButtonIcon' );
          textTitle.inputEnabled = true;
          textTitle.anchor.setTo(0, 0.5);
      
        // Add styled content
        applyStyle(content);
        
        // Return main menu
        returnButton = game.add.image( (game.world.width * 0.95), (game.world.height * 0.85), 'creditsBack' );
          returnButton.inputEnabled = true;
          returnButton.events.onInputDown.add(goToMenu, this);
          returnButton.anchor.setTo(1, 0.5);
      
        }
    };
