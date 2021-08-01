canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
greencar_width=75;
greencar_height=100;
greencar_x=5;
greencar_y=255;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload= uploadBackground
}