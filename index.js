/* Random Dicee Left */

var randomNumber1 = Math.floor(Math.random()*6 + 1);

var randomImageLeft = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomImageLeft; // images/dice1.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

/* Random Dicee Right */


