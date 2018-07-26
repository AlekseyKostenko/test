$('.carousel').carousel({
    interval: 9000000
})

var slider = (function(){
    var numLi = $(".list").length -2;                                                 // количество элементов без 2х клонов                   
    var $img = $("#slider_box>ul>li");
    var imgMargin =parseInt($img.css("margin-left"));                                 // Отступы от изображения
    var imgWidth = (parseInt($img.css("width"))) + imgMargin*2;                       // Шаг слайдера
    var colMainLeft=-imgWidth;
    var pozRight = -numLi*imgWidth;                                                    // Крайняя правая позиция      
    var $sliderBox = $("#slider_box>ul");
    
    var nav = function(leftWidth, edge){
        colMainLeft = colMainLeft+leftWidth;
        $sliderBox.removeClass("animoff").addClass("anim");
        $sliderBox.css("margin-left",colMainLeft+"px");

        if(colMainLeft==edge){
            setTimeout(function(){
                colMainLeft=pozRight -edge;
                $sliderBox.removeClass("anim").addClass("animoff");
                $sliderBox.css("margin-left",colMainLeft+"px");
            },500);
        }
    }

    var rightNav = function(){
        nav(-imgWidth, pozRight);
    }
    var leftNav = function(){
        nav(imgWidth, 0);
    }
    var init = function(){

        $("#right_nav").click(rightNav);
        $("#left_nav").click(leftNav);
    }
    return{
        init: init
    };
}());

slider.init();




/*function Slider(){
    var numLi = $(".list").length -2;               // количество элементов без 2х клонов                   
    var $img = $("#slider_box>ul>li");
    var imgWidth = parseInt($img.css("width"));              // ширина изображения
    var imgMargin =parseInt($img.css("margin-left"));        // Отступы от изображения
    imgWidth = imgWidth + imgMargin*2;                       // Шаг слайдера
    var colMainLeft=-imgWidth;
    var pozRight = numLi*imgWidth;                    // Крайняя правая позиция
    var pozRightPrev = (numLi-1) * imgWidth;          // Позиция перед крайней правой
    var $sliderBox = $("#slider_box>ul");
    
    $("#right_nav").click(function(){
        if(colMainLeft!==-pozRightPrev){
            colMainLeft = colMainLeft-imgWidth;
            $sliderBox.removeClass("animoff").addClass("anim");
            $sliderBox.css("margin-left",colMainLeft+"px");
        } else if (colMainLeft==-pozRightPrev) {
            colMainLeft = colMainLeft-imgWidth;
            $sliderBox.removeClass("animoff").addClass("anim");
            $sliderBox.css("margin-left",colMainLeft+"px");

            setTimeout(function(){
            colMainLeft = 0;
            $sliderBox.removeClass("anim").addClass("animoff");
            $sliderBox.css("margin-left",colMainLeft+"px");
            },500)
        }
    })

    $("#left_nav").click(function(){
        if(colMainLeft!==-imgWidth){
            colMainLeft = colMainLeft+imgWidth;
            $sliderBox.removeClass("animoff").addClass("anim");
            $sliderBox.css("margin-left",colMainLeft+"px")
        } else if (colMainLeft==-imgWidth) {  
            colMainLeft = colMainLeft+imgWidth;
            $sliderBox.removeClass("animoff").addClass("anim");
            $sliderBox.css("margin-left",colMainLeft+"px");

            setTimeout(function(){
                colMainLeft=-pozRight;
                $sliderBox.removeClass("anim").addClass("animoff");
                $sliderBox.css("margin-left",colMainLeft+"px");
            },500)  
        }
       // $sliderBox.css("margin-left",colMainLeft+"px");
    })
}
Slider();*/


function HeadTop (){ 
    var $headBlock = $("#headblock"); //Получаем нужный объект var
    var topOfheadBlock = $headBlock.offset().top; //Получаем начальное расположение нашего блока 
    $(window).scroll(function () { var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно 
        if (windowScroll > topOfheadBlock){ // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
            $headBlock.removeClass("col-sm-12").addClass("topWindow"); 
        } else {
            $headBlock.removeClass("topWindow").addClass("col-sm-12");
        };      
    });
};

HeadTop();

var checkbox = (function(){
    var check = function(id){
        if($(id).hasClass('check1')){
            $(id).removeClass("check1");
        } else {
            $(id).addClass("check1");
        }
    }
    var topBox = function(){
        check("#chh1");
    }
    var bottomBox = function(){
        check("#chh2");
    }
    var checkboxs = function(){
        $("#ch1").click(topBox);
        $("#ch2").click(bottomBox);
    }
    return{
        cs: checkboxs
    };
})();

checkbox.cs();