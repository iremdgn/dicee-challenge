/* Random Dicee Left */

var randomNumber1 = Math.floor(Math.random()*6 + 1);

var randomImageLeft = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageLeft);

/* Random Dicee Right */

var randomNumber2 = Math.floor(Math.random()*6 + 1);

var randomImageRight = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageRight);
