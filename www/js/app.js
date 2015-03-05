// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    GameView.prototype.template = Handlebars.compile($("#game-tpl").html());
    //EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
    //EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());

    //var service = new EmployeeService();
    var slider = new PageSlider($('body'));
    //service.initialize().done(function () {
        router.addRoute('', function() {
            clean_doom();
            console.log('empty');
            slider.slidePage(new HomeView().render().$el);
        });
        router.addRoute('game', function() {
            clean_doom();
            console.log('game');
            slider.slidePage(new GameView().render().$el);
        });

        //router.addRoute('employees/:id', function(id) {
        //    console.log('details');
        //    service.findById(parseInt(id)).done(function(employee) {
        //        slider.slidePage(new EmployeeView(employee).render().$el);
        //    });
        //});

        router.start();
    //});

    /* --------------------------------- Event Registration -------------------------------- */
    document.addEventListener('deviceready', function () {
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByHexString('#ffffff');
        StatusBar.styleDefault();
        FastClick.attach(document.body);
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Workshop", // title
                    'OK'        // buttonName
                );
            };
        }
    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */
    function clean_doom() {
		
		$('.page').not('.page:last').remove();
		
	};
	
        var admobid = {};
        if( /(android)/i.test(navigator.userAgent) ) { 
            admobid = { // for Android
                banner: 'ca-app-pub-6869992474017983/9375997553',
                interstitial: 'ca-app-pub-6869992474017983/1657046752'
            };
        } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
            admobid = { // for iOS
                banner: 'ca-app-pub-6869992474017983/4806197152',
                interstitial: 'ca-app-pub-6869992474017983/7563979554'
            };
        } else {
            admobid = { // for Windows Phone
                banner: 'ca-app-pub-6869992474017983/8878394753',
                interstitial: 'ca-app-pub-6869992474017983/1355127956'
            };
        }
        
        function initApp() {
            if (typeof admob !== 'undefined') {
                //console.log('jaja');
                setTimeout(function(){
                    admob.createBannerView({
                        publisherId : admobid.banner,
                        //position : AdMob.AD_POSITION.BOTTOM_CENTER,
                        autoShow : true
                    });
                },200);
                admob.requestInterstitialAd({
                    publisherId : admobid.interstitial,
                    //position : AdMob.AD_POSITION.BOTTOM_CENTER,
                    autoShow : true
                    });
            }
        }
        
        document.addEventListener('deviceready', initApp, false);
	
}());