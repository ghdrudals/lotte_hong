$(document).ready(function(){

    $(".sec2_box_left").on("mouseenter",function(){
        $(".sec2_circle_arr").css('background-image', 'url("./img/main-next_w.png")');
        $(".sec2_circle_arr").animate({right: '-10px'}, 100);
    })
    $(".sec2_box_left").on("mouseleave",function(){
        $(".sec2_circle_arr").css('background-image', 'url("./img/main-next.png")');
        $(".sec2_circle_arr").animate({right: '0'}, 100);
    })


    $(".sec3_box1").on("mouseenter",function(){
        $(".sec3_box1").animate({top: '-30px'}, 100);
    })
    $(".sec3_box1").on("mouseleave",function(){
        $(".sec3_box1").animate({top: '0'}, 100);
    })


    $(".sec3_box2").on("mouseenter",function(){
        $(".sec3_box2").animate({top: '-30px'}, 100);
    })
    $(".sec3_box2").on("mouseleave",function(){
        $(".sec3_box2").animate({top: '0'}, 100);
    })


    $(".sec3_box3").on("mouseenter",function(){
        $(".sec3_box3").animate({top: '-30px'}, 100);
    })
    $(".sec3_box3").on("mouseleave",function(){
        $(".sec3_box3").animate({top: '0'}, 100);
    })


    $(".more_btn").on("mouseenter",function(){  
        $(".more_btn").find("img").attr("src","./img/more_w.png")
    })
    $(".more_btn").on("mouseleave",function(){  
        $(".more_btn").find("img").attr("src","./img/more.png")
    })


    $(".han_site2 .swiper-slide").on("mouseenter",function(){
        $(this).find("p").hide()
    })
    $(".han_site2 .swiper-slide").on("mouseleave",function(){
        $(this).find("p").show()
    })


    $(".han_site2 .swiper-slide").find("span").hide()
    $(".han_site2 .swiper-slide").find("h4").hide()
    $(".han_site2 .swiper-slide").on("mouseenter",function(){
        $(this).find("span").show()
        $(this).find("h4").show()
    })
    $(".han_site2 .swiper-slide").on("mouseleave",function(){
        $(this).find("span").hide()
        $(this).find("h4").hide()
    })







    $(".sec5_box1").on("mouseenter",function(){
        $(".sec5_box1").find(".sec2_circle_arr_gray").css('background-image', 'url("./img/main-next_w.png")');
        $(".sec5_box1").find(".sec2_circle_arr_gray").animate({right: '-10px'}, 100);
    })
    $(".sec5_box1").on("mouseleave",function(){
        $(".sec5_box1").find(".sec2_circle_arr_gray").css('background-image', 'url("./img/main-next2.png")');
        $(".sec5_box1").find(".sec2_circle_arr_gray").animate({right: '0'}, 100);
    })

    $(".sec5_box2").on("mouseenter",function(){
        $(".sec5_box2").find(".sec2_circle_arr_gray").css('background-image', 'url("./img/main-next_w.png")');
        $(".sec5_box2").find(".sec2_circle_arr_gray").animate({right: '-10px'}, 100);
    })
    $(".sec5_box2").on("mouseleave",function(){
        $(".sec5_box2").find(".sec2_circle_arr_gray").css('background-image', 'url("./img/main-next2.png")');
        $(".sec5_box2").find(".sec2_circle_arr_gray").animate({right: '0'}, 100);
    })

    $(".sec5_box3").on("mouseenter",function(){
        $(".sec5_box3").find(".sec2_circle_arr_gray").css('background-image', 'url("./img/main-next_w.png")');
        $(".sec5_box3").find(".sec2_circle_arr_gray").animate({right: '-10px'}, 100);
    })
    $(".sec5_box3").on("mouseleave",function(){
        $(".sec5_box3").find(".sec2_circle_arr_gray").css('background-image', 'url("./img/main-next2.png")');
        $(".sec5_box3").find(".sec2_circle_arr_gray").animate({right: '0'}, 100);
    })

    $(".sec5_box4").on("mouseenter",function(){
        $(".sec5_box4").find(".sec2_circle_arr_gray").css('background-image', 'url("./img/main-next_w.png")');
        $(".sec5_box4").find(".sec2_circle_arr_gray").animate({right: '-10px'}, 100);
    })
    $(".sec5_box4").on("mouseleave",function(){
        $(".sec5_box4").find(".sec2_circle_arr_gray").css('background-image', 'url("./img/main-next2.png")');
        $(".sec5_box4").find(".sec2_circle_arr_gray").animate({right: '0'}, 100);
    })


})  //jquery end