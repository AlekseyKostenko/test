$('.carousel').carousel({
    interval: 9000000
})

function Slider(){
    var col_main_left=-403;
    $("#right_nav").click(function(){
        if(col_main_left!==-5239){
            col_main_left = col_main_left-403;
           // $("#slider_box>ul").css("transition", 0.5+"s");
        } else if (col_main_left==-5239) {
            col_main_left = 0;
        }
        $("#slider_box>ul").css("margin-left",col_main_left+"px");
    })

    $("#left_nav").click(function(){
        if(col_main_left!==-403){
            col_main_left = col_main_left+403;
            $("#slider_box>ul").removeClass("animoff").addClass("anim");
            $("#slider_box>ul").css("margin-left",col_main_left+"px")
        } else if (col_main_left==-403) {  
            col_main_left = col_main_left+403;
            $("#slider_box>ul").removeClass("animoff").addClass("anim");
            $("#slider_box>ul").css("margin-left",col_main_left+"px");
            col_main_left=-5239;
            $("#slider_box>ul").removeClass("anim").addClass("animoff");
            $("#slider_box>ul").css("margin-left",col_main_left+"px");
        }
       // $("#slider_box>ul").css("margin-left",col_main_left+"px");
    })
}
$(Slider());

