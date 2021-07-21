var btn_red;
var btn_green;
var btn_blue;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn_red = createButton("RED")
  btn_red.position(50,60)
  btn_red.mousePressed(red_bg)

  btn_blue = createButton("BLUE")
  btn_blue.position(175,60)
  btn_blue.mousePressed(blue_bg)

  btn_green = createButton("GREEN")
  btn_green.position(315,60)
  btn_green.mousePressed(green_bg)

  btn_yellow = createButton("YELLOW")
  btn_yellow.position(70,180)
  btn_yellow.mousePressed(yellow_bg)

  btn_orange = createButton("ORANGE")
  btn_orange.position(250,180)
  btn_orange.mousePressed(orange_bg)

  btn_pink = createButton("PINK")
  btn_pink.position(70,300)
  btn_pink.mousePressed(pink_bg)

  btn_purple = createButton("PURPLE")
  btn_purple.position(250,300)
  btn_purple.mousePressed(purple_bg)

  btn_turquoise = createButton("TURQUOISE")
  btn_turquoise.position(140,345)
  btn_turquoise.mousePressed(turquoise_bg)
}

function draw() {
  background(r,g,b);
}

function red_bg()
{
  r=225;
  g=0;
  b=0;

}

function blue_bg()
{
  r=0;
  g=0;
  b=225;

}

function green_bg()
{
  r=0;
  g=225;
  b=0;

}

function yellow_bg()
{
  r=225;
  g=225;
  b=0;

}


function orange_bg()
{
  r=225;
  g=128;
  b=0;

}

function pink_bg()
{
  r=225;
  g=102;
  b=225;

}

function purple_bg()
{
  r=178;
  g=102;
  b=225;

}

function turquoise_bg()
{
  r=0;
  g=204;
  b=204;

}