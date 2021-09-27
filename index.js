/* Random Dicee Left */

var randomNumber1 = Math.floor(Math.random()*6 + 1);

var randomImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomImage; // images/dice1.png

document.querySelectorAll("img").setAttribute("src", randomImageSource);