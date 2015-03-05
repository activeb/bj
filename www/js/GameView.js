var first = 0; 
var GameView = function() {
    
    this.initialize = function() {
        this.$el = $('<div/>');

        $.getScript( "lib/script.js" )
            .done(function( script, textStatus ) {
            console.log( textStatus );
            if(first == 1){
                initGame();
            } else {
                first = 1;
            }
            })
            .fail(function( jqxhr, settings, exception ) {
            console.log( "Triggered ajaxError handler." );
            });
    this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        return this;
    };

    this.initialize();

}

setTimeout(function(){
           if(first == 1){
                initGame();
            } else {
                first = 1;
            }
    },200);
