
function bubbleGenerator() {
    var bble = "";
    for (var x = 1; x < 170; x++) {
        var num = Math.floor(Math.random() * 10);
        bble += `<div class="bubble">${num}</div>`;
    }
    document.querySelector("#pnlbtm").innerHTML = bble;

}
time = 60;
function timerdown() {
    var timer = setInterval(function (){
        if(time > 0){
        time--;
        document.querySelector("#timerdo").textContent = time
    }
        else {
        clearInterval(time);
        document.querySelector("#pnlbtm").innerHTML="<h1>GAme Over</h1>"
    }
}, 1000);
}
var hit=0;
function HitC(){
    hit= Math.floor(Math.random()*10);
    var c=document.querySelector(".hitbox");
    c.textContent=hit;
}
var score=0;
function scorE(){
    score+=10;
    var v=document.querySelector("#scor");
    v.textContent=score;
}   

var value=document.querySelector("#pnlbtm")
var cl=value.addEventListener("click",function(dets){
    var nmbr=Number(dets.target.textContent)
    if(nmbr===hit && time>0){
        scorE();
        bubbleGenerator();
        HitC();
    }
    else{
        alert("Something Went Wrong!");
    }
})



bubbleGenerator();
timerdown();
HitC();
