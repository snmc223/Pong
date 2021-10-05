// const div = document.getElementById("pong");
var paddleHeight = 150;
var paddleWidth = 30;
var ballRadius = 25;
var halfPaddleHeight = paddleHeight/2;
var speedOfPaddle1 = 0;
var speedOfPaddle2 = 0;
var positionOfPaddle1 = 220;
var positionOfPaddle2 = 220;
var topPositionOfBall = 510;
var leftPositionOfBall = 820;
var topSpeedOfBall = 10;
var leftSpeedOfBall = 0;
var score1 = 0;
var score2 = 0;

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

    if(positionOfPaddle1 <= 1) {
        positionOfPaddle1 = 1;
    }

    document.getElementById('paddle1').style.top = positionOfPaddle1 + 'px';
    document.getElementById('paddle2').style.top = positionOfPaddle2 + 'px';

}, 1000/60)