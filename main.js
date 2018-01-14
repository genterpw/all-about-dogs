var button = document.querySelector("button");
var change = false;

button.addEventListener("click", function(){
    var body = document.querySelector("body");
    if(change == false) {
        body.style.backgroundImage = "url('hairydog.jpg')";
        change = true;
    } else if (change == true) {
        body.style.backgroundImage = "url('puggy.jpg')";
        change = false;
    }
});