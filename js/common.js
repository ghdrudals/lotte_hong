$(document).ready(function(){

    $("nav").on("mouseenter",function(){
        $("nav").find("li").fadeIn(1500)
    })
    $("nav").on("mouseleave",function(){
        $("nav").find("li").hide()
    })



    $(".nav_box").hide()
    $(".nav_menu").on("click",function(){
        $(".nav_box").show()
    })
    $(".close").on("click",function(){
        $(".nav_box").hide()
    })
    $(".nav_txt1").find("h3").css("background-color","#ed7100")
    $(".nav_txt1").find("h3").css("color","#fff")
    
    $(".nav_txt2").find("li").hide()
    $(".nav_txt3").find("li").hide()



    $(".nav_txt1").on("click",function(){
        $(".nav_txt1").find("li").slideToggle()
        $(".nav_txt1").siblings().find("li").slideUp()
        $(".nav_txt1").siblings().find("h3").css("background-color","#fff")
        $(".nav_txt1").siblings().find("h3").css("color","#454545")
        $(".nav_txt1").find("h3").css("background-color","#ed7100")
        $(".nav_txt1").find("h3").css("color","#fff")
    })
    $(".nav_txt2").on("click",function(){
        $(".nav_txt2").find("li").slideToggle()
        $(".nav_txt2").siblings().find("li").slideUp()
        $(".nav_txt2").siblings().find("h3").css("background-color","#fff")
        $(".nav_txt2").siblings().find("h3").css("color","#454545")
        $(".nav_txt2").find("h3").css("background-color","#ed7100")
        $(".nav_txt2").find("h3").css("color","#fff")
    })
    $(".nav_txt3").on("click",function(){
        $(".nav_txt3").find("li").slideToggle()
        $(".nav_txt3").siblings().find("li").slideUp()
        $(".nav_txt3").siblings().find("h3").css("background-color","#fff")
        $(".nav_txt3").siblings().find("h3").css("color","#454545")
        $(".nav_txt3").find("h3").css("background-color","#ed7100")
        $(".nav_txt3").find("h3").css("color","#fff")
    })

})  //jquery end