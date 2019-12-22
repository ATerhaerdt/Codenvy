
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

var other = $("#forNow");
var a = $("#signIn");
var registry = $("#register")
var contact = $("#contact")

hideElements(other);
hideElements(a);
hideElements(contact);



function hideElements(element){
    $(element).hide();
}

function showElements(element){
    $(element).show();
}


$("#home1").click(function(){
    showElements(registry);
    hideElements(contact);
});

$("#info1").click(function(){
    hideElements(registry);
});

$("#contact").click(function(){
    hideElements(registry);
    showElements(contact);
});

//<div class="g-signin2 googleMargin" data-onsuccess="onSignIn"></div>
// CLIENT ID: 261775333656-a251ptequpk7g8b25rmkr32tet8b3cf3.apps.googleusercontent.com
// CLIENT SECRET: 6VuN14UjP9Ry3UxG5Y-sxxiW
