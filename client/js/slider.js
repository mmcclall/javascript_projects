$(document).ready(function() {
    // set options
    var speed = 500;                // fade speed
    var autoswitch = true;          // auto slider option
    var autoswitch_speed = 4000;    // auto slider speed
    
    // add initial active class
    $(".slide").first().addClass("active");
    
    // hide all slides
    $(".slide").hide();
    
    // show first slide
    $(".active").show();
    
    // next handler
    $("#next").on("click", nextSlide());
    
    // prev handler
    $("#prev").on("click", prevSlide());
    
    // autoswitch handler
    if(autoswitch == true)
        setInterval(nextSlide, autoswitch_speed);
    
    // switch to next slide
    function nextSlide() {
        $("#next").on("click", function() {
            $(".active").removeClass("active").addClass("oldActive");
            if($(".oldActive").is(":last-child")) {
                $(".slide").first().addClass("active");
            } else {
                $(".oldActive").next().addClass("active");
            }
            $(".oldActive").removeClass("oldActive");
            $(".slide").fadeOut(speed);
            $(".active").fadeIn(speed);
        });
    }
    
    function prevSlide() {
        $("#prev").on("click", function() {
            $(".active").removeClass("active").addClass("oldActive");
            if($(".oldActive").is(":first-child")) {
                $(".slide").last().addClass("active");
            } else {
                $(".oldActive").prev().addClass("active");
            }
            $(".oldActive").removeClass("oldActive");
            $(".slide").fadeOut(speed);
            $(".active").fadeIn(speed);
        });
    }
});