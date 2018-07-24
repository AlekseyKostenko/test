$('.carousel').carousel({
    interval: 9000000
})

/*function Slider(){
    var col_main_left=-403;
    $("#right_nav").click(function(){
        if(col_main_left!==-5239){
            col_main_left = col_main_left-403;
            $("#slider_box>ul").css("transition", 0.5+"s");
        } else if (col_main_left==-5239) {
            col_main_left = 0;
            $("#slider_box>ul").css("-webkit-transition", 0.01+"s");
            $("#slider_box>ul").css("-moz-transition", 0.01+"s");
            $("#slider_box>ul").css("transition", 0.01+"s");
        }
        $("#slider_box>ul").css("margin-left",col_main_left+"px");
    })
    function p(){
        var h = 0;
    }
    $("#left_nav").click(function(){
        if(col_main_left!==0){
            $("#slider_box>ul").css("transition", 0.5+"s");
            col_main_left = col_main_left+403;
            $("#slider_box>ul").css("margin-left",col_main_left+"px")
        } else if (col_main_left==0) {  
            $("#slider_box>ul").css("transition", 0.01+"s" );
            col_main_left=-5239;
            $("#slider_box>ul").css("margin-left",col_main_left+"px");
            $("#slider_box>ul").css("transition", 0.01+"s");
            col_main_left=col_main_left+403;
            $("#slider_box>ul").css("margin-left",col_main_left+"px");
        }
       // $("#slider_box>ul").css("margin-left",col_main_left+"px");
    })
}*/

function Slider(){
    var number1 = 0;
    var number2 = 1;
    $("#right_nav").click(function(){ // Кликаем на правую стрелку
        if (number1==11 && number2==12){ // если подошли к концу списка
            $("#" + number1).removeClass("active1"); //Выносим за пределы окна левый div
            $("#" + (++number1)).removeClass("active2").addClass("active1");  //Устанавливаем правый div на место левого
            number2=0;
            $("#" + (number2)).addClass("active2"); //Ставим следующий скрытый div на место правого
        } else if(number1==12 && number2==0){
            $("#" + number1).removeClass("active1"); //Выносим за пределы окна левый div
            number1=0;
            $("#" + (number1)).removeClass("active2").addClass("active1");  //Устанавливаем правый div на место левого
            $("#" + (++number2)).addClass("active2"); //Ставим следующий скрытый div на место право
        } else {
            $("#" + number1).removeClass("active1"); //Выносим за пределы окна левый div
            $("#" + (++number1)).removeClass("active2").addClass("active1");  //Устанавливаем правый div на место левого
            $("#" + (++number2)).addClass("active2"); //Ставим следующий скрытый div на место правого
            
        }
      })

      $("#left_nav").click(function(){ // Кликаем на левую стрелку
        if (number1 == 0 && number2 ==1){  // Если находимся в начале списка
            $("#" + number2).removeClass("active2"); //Выносим за пределы окна правый div
            $("#" + (--number2)).removeClass("active1 ").addClass("active2");  //Устанавливаем левый div на место правого
            number1=12;
            $("#" + (number1)).addClass("active1"); //Ставим следующий скрытый div на место левого
        } else if (number1 == 12 && number2 ==0){
            $("#" + number2).removeClass("active2"); //Выносим за пределы окна правый div
            number2=12;
            $("#" + (number2)).removeClass("active1").addClass("active2");  //Устанавливаем левый div на место правого
            $("#" + (--number1)).addClass("active1"); //Ставим следующий скрытый div на место левого
        } else {
            $("#" + number2).removeClass("active2"); //Выносим за пределы окна правый div
            $("#" + (--number2)).removeClass("active1").addClass("active2");  //Устанавливаем левый div на место правого
            $("#" + (--number1)).addClass("active1"); //Ставим следующий скрытый div на место левого
        }
      })
}
Slider();

