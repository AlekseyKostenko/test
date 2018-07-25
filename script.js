$('.carousel').carousel({
    interval: 9000000
})

function Slider(){
    var col_main_left=-403;
    $("#right_nav").click(function(){
        if(col_main_left!==-4836){
            col_main_left = col_main_left-403;
            $("#slider_box>ul").removeClass("animoff").addClass("anim");
            $("#slider_box>ul").css("margin-left",col_main_left+"px");
        } else if (col_main_left==-4836) {
            col_main_left = col_main_left-403;
            $("#slider_box>ul").removeClass("animoff").addClass("anim");
            $("#slider_box>ul").css("margin-left",col_main_left+"px");

            setTimeout(function(){
            col_main_left = 0;
            $("#slider_box>ul").removeClass("anim").addClass("animoff");
            $("#slider_box>ul").css("margin-left",col_main_left+"px");
            },500)
        }

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

            setTimeout(function(){
                col_main_left=-5239;
                $("#slider_box>ul").removeClass("anim").addClass("animoff");
                $("#slider_box>ul").css("margin-left",col_main_left+"px");
            },500)  
        }
       // $("#slider_box>ul").css("margin-left",col_main_left+"px");
    })
}
$(Slider());


function HeadTop (){ 
    var headblock = $("#headblock"); //Получаем нужный объект var
    topOfheadblock = $(headblock).offset().top; //Получаем начальное расположение нашего блока 
    $(window).scroll(function () { var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно 
        if (windowScroll > topOfheadblock){ // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
            $(headblock).removeClass("col-sm-12").addClass("topWindow"); 
        } else {
            $(headblock).removeClass("topWindow").addClass("col-sm-12");
        };      
    });
};

$(HeadTop());