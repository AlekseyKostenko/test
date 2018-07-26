$('.carousel').carousel({
    interval: 9000000
})

var slider = (function(){
    var numLi = $(".list").length -2;                                                 // количество элементов без 2х клонов                   
    var $img = $("#slider_box>ul>li");
    var imgMargin =parseInt($img.css("margin-left"));                                 // Отступы от изображения
    var imgWidth = (parseInt($img.css("width"))) + imgMargin*2;                       // Шаг слайдера
    var colMainLeft=-imgWidth;
    var pozRight = numLi*imgWidth;                                                    // Крайняя правая позиция      
    var $sliderBox = $("#slider_box>ul");
    var rightNav = function(){
        colMainLeft = colMainLeft-imgWidth;
        $sliderBox.removeClass("animoff").addClass("anim");
        $sliderBox.css("margin-left",colMainLeft+"px");
        if(colMainLeft==-pozRight){
            setTimeout(function(){
            colMainLeft = 0;
            $sliderBox.removeClass("anim").addClass("animoff");
            $sliderBox.css("margin-left",colMainLeft+"px");
            },500)
        }
    }
    var leftNav = function(){
        colMainLeft = colMainLeft+imgWidth;
        $sliderBox.removeClass("animoff").addClass("anim");
        $sliderBox.css("margin-left",colMainLeft+"px")
        if(colMainLeft==0){
            setTimeout(function(){
            colMainLeft=-pozRight;
            $sliderBox.removeClass("anim").addClass("animoff");
            $sliderBox.css("margin-left",colMainLeft+"px");
            },500) 
        }
    }
    return{
        next: function(){
            rightNav();
        },
        prev: function(){
            leftNav();
        }
    };
})();

$("#right_nav").click(slider.next);
$("#left_nav").click(slider.prev);




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

function Checkbox(){
    var Check1Num = 0;
    var Check2Num = 0;
    $("#ch1").click(function(){
        if(Check1Num==1){
            $("#chh1").removeClass("check1");
            Check1Num=0;
        } else {
            $("#chh1").addClass("check1");
            Check1Num=1;
        }

    })
    $("#ch2").click(function(){
        if(Check2Num==1){
            $("#chh2").removeClass("check2");
            Check2Num=0;
        } else {
            $("#chh2").addClass("check2");
            Check2Num=1;
        }
    })
}
Checkbox();