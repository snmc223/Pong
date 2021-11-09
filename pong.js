const div = document.getElementById("pong");
var paddleHeight = 150;
var paddleWidth = 30;
var ballRadius = 25;
var halfPaddleHeight = paddleHeight/2;
var speedOfPaddle1 = 0;
var speedOfPaddle2 = 0;
var positionOfPaddle1 = 320;
var positionOfPaddle2 = 320;
var topPositionOfBall = 510;
var leftPositionOfBall = 820;
var topSpeedOfBall = 10;
var leftSpeedOfBall = 0;
var score1 = 0;
var score2 = 0;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

// 2 players

document.addEventListener('keydown', function(event){
    //W keyboard key
    if(event.keycode == 87 || event.which == 87) {
        speedOfPaddle1 = -10;
    }
    //S keyboard key
    if(event.keycode == 83 || event.which == 83) {
        speedOfPaddle1 = 10;
    }
    //Up keyboard key
    if(event.keycode == 38 || event.which == 38) {
        speedOfPaddle2 = -10;
    }
    //Down keyboard key
    if(event.keycode == 40 || event.which == 40) {
        speedOfPaddle2 = 10;
    }
})
document.addEventListener('keyup', function(event){
    //W keyboard key
    if(event.keycode == 87 || event.which == 87) {
        speedOfPaddle1 = 0;
    }
    //S keyboard key
    if(event.keycode == 83 || event.which == 83) {
        speedOfPaddle1 = 0;
    }
    //Up keyboard key
    if(event.keycode == 38 || event.which == 38) {
        speedOfPaddle2 = 0;
    }
    //Down keyboard key
    if(event.keycode == 40 || event.which == 40) {
        speedOfPaddle2 = 0;
    }
})

window.setInterval(function show() {

    positionOfPaddle1 += speedOfPaddle1;
    positionOfPaddle2 += speedOfPaddle2;
    // Stop paddle from leaving top of screen
    if(positionOfPaddle1 <= 1) {
        positionOfPaddle1 = 1;
    }

    if(positionOfPaddle2 <= 1) {
        positionOfPaddle2 = 1;
    }
    // Stop paddle from leaving bottom of screen
    if(positionOfPaddle1 >= window.innerHeight - paddleHeight){
        positionOfPaddle1 = window.innerHeight - paddleHeight
    }

    if(positionOfPaddle2 >= window.innerHeight - paddleHeight){
        positionOfPaddle2 = window.innerHeight - paddleHeight
    }

    document.getElementById('paddle1').style.top = positionOfPaddle1 + 'px';
    document.getElementById('paddle2').style.top = positionOfPaddle2 + 'px';

}, 1000/60)



// function drawBall() {
//     ctx.beginPath();
//     ctx.arc(x, y, 10, 0, Math.PI*2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBall();
//     x += dx;
//     y += dy;
// }

// setInterval(draw, 10);

