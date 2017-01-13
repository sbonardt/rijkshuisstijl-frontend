jQuery(function ($) {

    /**
     * vars
     */ 
    var breakXsmall = 25; //400px is 400/16 is 25 em
    var breakSmall = 30; //480px is 30 em
    var breakMedium = 37.5; //600px is 37.5 em
    var breakLarge = 48; //768px is 48 em
    var breakXlarge = 60; //960px is 60 em
    var breakWide = 71.25; //1280px is 80 em
    // see line 32
    var toggleableMenu = true;

    var resizeId;
    
    var windowWidth = viewportSize.getWidth(); //replaces buggy and unreliable $(window).width();
    // assume base font size is 16px
    var windowWidthEms = ((viewportSize.getWidth()) / 16);

    // /*
    //  * spiffy typewriting thingy on home
    //  */
    // var newPlaceHolderSearchValue = "Vul een trefwoord in. Bijvoorbeeld 'Fietspad'"
    // var searchPlaceholderAttribute = $('.home #search_field').attr('placeholder');

    /**
     * Menu config
     * set toggleableMenu to true if the menu needs to be toggled on or off on 
     * small screens, or 'false' if constantly want to show the mainmenu
     */
    if (toggleableMenu) {
        $('html').addClass("toggleable-menu");
        $('.toggle-menu').prepend("<span></span>");
    }

    /**
     * initial checks for page setup. Checks the viewport width and does some 
     * actions for the UI based on screen size
     */
    preLoadChecks();

    /**
     * do some checks when window is resized
     */
    $(window).resize(function() {       
            clearTimeout(resizeId);
            resizeId = setTimeout(preLoadChecks, 20);
    });

    /**
     * toggle .search when hidden on small/mobile devices
     */
    $(".toggle-search").on( "click", function(e) {
        e.preventDefault();
        var searchform = $(".search");
        var nav = $("nav .menu");
        if (searchform.hasClass("expanded")) {
            $(this).removeClass("toggle-active");
            searchform.slideUp('fast').removeClass("expanded");
        }
        else if (!(searchform.hasClass("expanded"))) {
            if (nav.hasClass("expanded")) {
                nav.slideUp('fast', function() {
                    nav.removeClass("expanded");
                    $(".toggle-menu").removeClass("toggle-active");
                    $(".toggle-search").addClass("toggle-active");
                    searchform.slideDown().addClass("expanded");
                });             
            }
            else {
                $(this).addClass("toggle-active");
                searchform.slideDown().addClass("expanded");
            }
        }
    });

    /**
     * toggle the main menu when hidden on small mobile devices
     */
    $(".toggle-menu").on( "click", function(e) {
        e.preventDefault();
        var nav = $("nav .menu");
        var searchform = $(".search");
        if (nav.hasClass("expanded")) {
            $(this).removeClass("toggle-active");
            nav.slideUp('fast').removeClass("expanded");
        }
        else if (!(nav.hasClass("expanded"))) {
            if (searchform.hasClass("expanded")) {
                searchform.slideUp('fast', function() {
                    searchform.removeClass("expanded");
                    $(".toggle-search").removeClass("toggle-active");
                    $(".toggle-menu").addClass("toggle-active");
                    nav.slideDown().addClass("expanded");
                });
            }
            else {
                $(this).addClass("toggle-active");
                nav.slideDown('fast').addClass("expanded");
            }
        }
    });

    /**
     * preloadchecks function
     * checks viewport width and does some hides and show, and moves elements
     * based on design at viewport width
     */
    function preLoadChecks() {
        // update window width
        windowWidth = viewportSize.getWidth(); // $(window).width();
        windowWidthEms = (viewportSize.getWidth()) / 16;

        // do various show n hides for menu's, search and .main-image based on viewport width
        if ( windowWidthEms <= breakSmall) { 

        }
        else {

        }

        if (windowWidthEms < breakMedium) {
            // $(".search").hide();
            // $(".toggle-search").show(); 
            if (toggleableMenu) {
                $("nav .menu").hide();
                 $(".toggle-menu").show();
            }
            $(".expanded").removeClass("expanded");
        }
        else {
            // $(".search").show();
            // $(".toggle-search").hide(); 
            if (toggleableMenu) {
                $("nav .menu").show();
                $(".toggle-menu").hide();
            }    
        }

        if (windowWidthEms < breakLarge) {
            $(".search").hide();
            $(".toggle-search").show(); 
            $(".toggle-active").removeClass("toggle-active");
        }
        else {
            $(".search").show();
            $(".toggle-search").hide(); 
        }
    }   

});