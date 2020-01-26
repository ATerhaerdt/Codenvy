var other = $("#forNow");
var a = $("#signIn");
var registry = $("#registerPage")
var contact = $("#contact")
var welcome = $("#welcomePage");

hideElements(other);
hideElements(a);
hideElements(contact);
hideElements(welcome);

function hideElements(element){
    $(element).hide();
}

function showElements(element){
    $(element).show();
}

$("#sumbitB").click(function(){
    $("#registerPage").fadeOut( 300 )
    $("#forNow").delay(400).fadeIn(600);

});


$("#home1").click(function(){
    transition($("#home1"));
    delay(1000).showElements(registry);
    delay(1000).hideElements(contact);
    delay(1000).hideElements(other);
});

$("#info1").click(function(){
    transition($("#info1"));
    setTimeout(hideElements, 1500);
        hideElements(contact);
        hideElements(registry);
    setTimeout(showElements, 1500);
        showElements(other);
});

function transition(btn){
    btn.disabled = true;
    console.log(btn.disabled);
    setTimeout(function() {
        btn.disabled = false;
        console.log(btn.disabled);
    }, 3000);  
    $("#bar1").animate({height:"100%"},2000).delay(100).animate({height:0},2000);
    $("#bar2").delay(200).animate({height:"100%"},2000).delay(100).animate({height:0},2000);
    $("#bar3").delay(400).animate({height:"100%"},2000).delay(100).animate({height:0},2000);
    $("#bar4").delay(600).animate({height:"100%"},2000).delay(100).animate({height:0},2000);
}

/*
$("#home1").click(function(){
    showElements(registry);
    hideElements(contact);
});

$("#info1").click(function(){
    hideElements(registry);
});

$("#contact1").click(function(){
    hideElements(registry);
    showElements(contact);
});
*/
