var truck = document.getElementById("truck");
var racecar = document.getElementById("racecar");
var result = document.getElementById("result");
var game = document.getElementById("game");
const score = document.getElementById("score");
var highscore = document.getElementById("highscore");
var yourscore = document.getElementById("yourscore");
highscore = 0;
counter = 0;
var level = document.getElementsByClassName("level");
var level1 = document.getElementById("one");
var level2 = document.getElementById("two");
var level3 = document.getElementById("three");

// truck move
truck.addEventListener("animationiteration", function(){
    var random = (Math.floor(Math.random()*3)*120)
    truck.style.left = random + "px";
    counter ++;
})

// racecar move

window.addEventListener("keydown",function(e){
    if(e.keyCode == "39"){
        var racecarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
        if(racecarleft < 240){
            racecar.style.left = (racecarleft + 120) + "px";
        }    
    }

    if(e.keyCode == "68"){
        var racecarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
        if(racecarleft < 240){
            racecar.style.left = (racecarleft + 120) + "px";
        }    
    }

    if(e.keyCode == "37"){
        var racecarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
        if(racecarleft > 0){
            racecar.style.left = (racecarleft - 120) + "px";
        }    
    }

    if(e.keyCode == "65"){
        var racecarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
        if(racecarleft > 0){
            racecar.style.left = (racecarleft - 120) + "px";
        }    
    }
    
})

function hscore(){
    highscore.innerHTML = `Highest Score : ${counter}`;
}

//game over
setInterval(function Gameover(){
    var truckleft = parseInt(window.getComputedStyle(truck).getPropertyValue("left"));
    var trucktop = parseInt(window.getComputedStyle(truck).getPropertyValue("top"));
    var racecarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));

    if((truckleft === racecarleft) && (trucktop<470) && (trucktop>270)){
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `Score : ${counter}`;
        counter = 0;

        if(highscore < yourscore){
            highscore = yourscore;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    yourscore.innerHTML = `Your Score : ${counter}`;
    
    // if((truckleft === racecarleft) && (trucktop<470) && (trucktop>270)){
    //     highscore.innerHTML = `Highest Score : ${yourscore}`;
    // }

}, 10)
function sr(){
    document.getElementsByClassName("level") = location.reload();
}

function abc(){
    truck.style.animation = "moves 2s linear infinite";
    
}

function xyz(){
    truck.style.animation = "moves 1.5s linear infinite"
}

function klm(){
    truck.style.animation = "moves 1s linear infinite"
}

function main1(){
    abc();
    sr();
}
function main2(){
    xyz();
    sr();
}
function main3(){
    klm();
    sr();
}

// level.addEventListener(onclick, function(){
//     var col = window.getComputedStyle(level).getPropertyValue("background-color");
//     col = "white";
// })