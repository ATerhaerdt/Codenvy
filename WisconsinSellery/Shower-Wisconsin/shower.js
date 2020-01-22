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
