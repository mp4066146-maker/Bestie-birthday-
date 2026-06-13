function openGift(){
document.getElementById("gift").style.display="block";

setTimeout(()=>{
alert("🎂 Happy 17th Birthday Bestie ❤️\n\nFrom Nitish Patel");
},300);
}

setInterval(()=>{
let heart=document.createElement("div");
heart.innerHTML="❤️";
heart.className="heart";
heart.style.left=Math.random()*100+"vw";
document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

},500);

setInterval(()=>{
let balloon=document.createElement("div");
let balloons=["🎈","🎈","🎈","🎉"];
balloon.innerHTML=balloons[Math.floor(Math.random()*balloons.length)];
balloon.className="balloon";
balloon.style.left=Math.random()*100+"vw";

document.body.appendChild(balloon);

setTimeout(()=>{
balloon.remove();
},12000);

},1200);

window.onload=function(){
setTimeout(()=>{
alert("🎉 Welcome Bestie!\n\nA Special Birthday Surprise Awaits You ❤️");
},1000);
  }
for(let i=0;i<20;i++){

let heart=document.createElement("div");
heart.innerHTML="❤️";
heart.className="heart";
heart.style.left=Math.random()*100+"vw";
document.body.appendChild(heart);

}

for(let i=0;i<15;i++){

let balloon=document.createElement("div");
balloon.innerHTML="🎈";
balloon.className="balloon";
balloon.style.left=Math.random()*100+"vw";
document.body.appendChild(balloon);

}

alert("SCRIPT WORKING");
