    $("button").click(
        function() {
            $(".starter-template.splash-cover").css({
                "opacity" : "0",
                "z-index" : "-10",
            });

            $(".control-section.small-title").css("top", "-200px");
        });



    $(".red").click(
        function() {
                // alert("this will turn the planet red");
                $(".planet-circle").addClass("red").removeClass("orange yellow green blue");
        });

    $(".orange").click(
        function() {
                // alert("this will turn the planet orange");
                $(".planet-circle").addClass("orange").removeClass("red yellow green blue");
                //toggleClass
        });

    $(".yellow").click(
        function() {
                // alert("this will turn the planet yellow");
                $(".planet-circle").addClass("yellow").removeClass("orange red green blue");
        });

    $(".green").click(
        function() {
                // alert("this will turn the planet green");
                $(".planet-circle").addClass("green").removeClass("orange yellow red blue");
        });

    $(".blue").click(
        function() {
                // alert("this will turn the planet blue");
                $(".planet-circle").addClass("blue").removeClass("orange yellow green red");
        });



// RINGS OR NO RINGS
$(document).ready(function(){
    if ($("#no-rings").prop("checked", true)) {
        $(".ring").hide();
    }
    else {
        $(".ring").show();
    }
});
    $("#rings").click(
        function() {
                $(".ring").show();
        });
    $("#no-rings").click(
        function() {
            $(".ring").hide();
        });

        // NEXT COURSE OF ACTION
        //     [5] Make the circle sizes light up when the planet approaches that size
        //     [8] Fun facts
                    // 1) sizes (8)
                    // 2) colors (5)
                    // 3) ring (1)
        //  [3] gif for rotation
        //  [] polish for label colors and the title and display and stuff
        //     [] Give the slider different units (label planet sizes on the slider)
