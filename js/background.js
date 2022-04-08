window.onload=function(){

    //make a canvas
    document.body.appendChild(document.createElement('canvas'));
    let canvas = document.querySelector('canvas');
    let context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position='fixed';//make this fixed that it will fill  the page
    context.lineWidth = .3;
    context.strokeStyle = (new Color(150)).style;

    let dots = {
        dotNum: 1000,//Dot的总数
        distance: 50,
        dotRadius: 100,
        dotArray: []
    };

    //methods for create  RGB color by nums
    function colorValue(min) {
        return Math.floor(Math.random() * 255 + min);
    }

    function Color(min) {
        min = min || 0;
        this.r = colorValue(min);
        this.g = colorValue(min);
        this.b = colorValue(min);
        this.style = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ', 0.8)';
    }

    //create dots
    function Dot(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = -.5 + Math.random();
        this.vy = -.5 + Math.random();

        this.radius = Math.random() * 2;

        this.color = new Color();
    }

    Dot.prototype.draw = function() {
        context.beginPath();
        context.fillStyle = this.color.style;
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fill();
    };
    //make the dots move
    function moveDots() {
        for(let i = 0; i < dots.dotNum; i++){
            let dot = dots.dotArray[i];

            if(dot.y < 0 || dot.y > canvas.height){
                dot.vy = - dot.vy;
            }
            if(dot.x < 0 || dot.x > canvas.width){
                dot.vx = - dot.vx;
            }
            dot.x += dot.vx;
            dot.y += dot.vy;
        }
    }

    //create several dots
    function createDots(){
        for(let i = 0; i < dots.dotNum; i++){
            dots.dotArray.push(new Dot());
        }
    }
    //traversal each dot and call the draw() method
    function drawDots() {
        for(let i = 0; i < dots.dotNum; i++){
            let dot = dots.dotArray[i];
            dot.draw();
        }
    }
    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);//清除画布，否则线条会连在一起
        moveDots();
        drawDots();
        requestAnimationFrame(animate);
    }
    createDots();//使用创建Dot类函数

    //call the animate method for frame
    requestAnimationFrame(animate);



}