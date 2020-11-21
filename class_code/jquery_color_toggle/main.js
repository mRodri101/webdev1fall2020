//click the box to toggle a color back and forth

// a boolean value

let clickToggle = true;

$(".box").click(function(){

    if(clickToggle == true) {
        $(".box").css("background","purple");   
       
    }
    else {
        $(".box").css("background","blue") ;
        
    }
    clickToggle = !clickToggle
})

$("h1").click(function(){

    if(clickToggle == true) {
        $("h1").css("background","red")
        ;   
       
    }
    else {
        $("h1").css("background","lightblue")
        ;
        
    }
    clickToggle = !clickToggle
})