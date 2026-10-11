const canvas = document.querySelector('#gameCanvas');
const context = canvas.getContext('2d');

// bóng
const ball ={
    x: 400,
    y: 450,
    radius: 10
};

function drawBall(){
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
}
drawBall();

// thanh đỡ
const paddle={
    width: 110,
    height: 12,
    x:345,
    y:470,
    speed:400
}
function drawPaddle(){
    context.fillStyle = "green";
    context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

}
drawPaddle();

// xử lý khi dùng phím
let leftPresed = false;
let rightPresed = false;

document.addEventListener('keydown', function(e){
    if(event.key === "ArrowLeft"){
        leftPresed = true;
        event.preventDefault();
    }
    if(event.key === "ArrowRight"){
        rightPresed = true;
        event.preventDefault();
    }
})