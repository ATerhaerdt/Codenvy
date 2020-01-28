var other = $("#forNow");
var a = $("#signIn");
var registry = $("#registerPage")
var contact = $("#contact")
var welcome = $("#welcomePage");
var info = $("#info");
var buttonsEnabled = true;

var pages = [welcome, registry, contact, other];
var currentPage = [];
startUp();

function startUp(){
    $(other).hide();
    $(registry).hide();
    $(contact).hide();
    $(welcome).show();
    $(info).hide();
}

function hideElements(element){
    $(element).delay(1800).fadeOut();
}

function showElements(element){
    $(element).delay(1800).fadeIn();
}

$("#home1").click(function(){
    transition($("#home1"));
    showElements(registry);
    hideElements(contact);
    hideElements(other);
    hideElements(welcome);
    hideElements(info);
});

$("#info1").click(function(){
    transition($("#info"));
        showElements(info);
        hideElements(contact);
        hideElements(registry);
        hideElements(welcome);
        hideElements(other);
});

function transition(page){
    if(buttonsEnabled){
        buttonsEnabled = false;
        setTimeout(function() {
            buttonsEnabled = true;
        }, 3000);
        $("#bar1").animate({height:"100%"},1500).delay(100).animate({height:0},2000);
        $("#bar2").delay(200).animate({height:"100%"},1500).delay(100).animate({height:0},2000);
        $("#bar3").delay(400).animate({height:"100%"},1500).delay(100).animate({height:0},2000);
        $("#bar4").delay(600).animate({height:"100%"},1500).delay(100).animate({height:0},2000);
    }
}

$("#sumbitB").click(function(){
    $("#registerPage").fadeOut( 300 )
    $("#forNow").delay(400).fadeIn(600);

});

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
