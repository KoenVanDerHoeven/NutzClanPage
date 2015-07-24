var red = [0, 100, 63];
var orange = [40, 100, 60];
var black = [0, 0, 27];

var myName = "Nutz for pc";
letterColors = [red,orange,black];
if (letterColors.length > 5) {
    bubbleShape = "square";
} else {
    bubbleShape = "circle";
}
        

drawName(myName, letterColors);
bounceBubbles();