
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

var other = $("#forNow");
var a = $("#register");
var b = $("sidebar1");

hideElements(other);
hideElements(a);


function hideElements(element){
    $(element).hide();
}


// CLIENT ID: 261775333656-a251ptequpk7g8b25rmkr32tet8b3cf3.apps.googleusercontent.com
// CLIENT SECRET: 6VuN14UjP9Ry3UxG5Y-sxxiW
