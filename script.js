//finds the cookie button and stores it in cookieButton
var cookieButton = document.getElementById("cookieButton");
var clickCounter = document.getElementById("clickCounter");

//stores the amount of clicks
var clicks = 0;

cookieButton.addEventListener("click", clicking);

//counts the number of clicks and changes the text
function clicking() {
    clicks++;
    clickCounter.innerHTML = "Number of clicks: " + clicks;
}
