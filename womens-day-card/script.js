// typing animation

const text = "Happy Women's Day 💐";
const message = `Gửi vợ yêu của anh, 
người phụ nữ đẹp nhất trong lòng anh! Người ta nói thế giới này đẹp nhất là khi có ánh nắng, nhưng với anh, thế giới chỉ rạng ngời khi có nụ cười của em. Chúc vợ yêu một ngày 8/3 thật ngọt ngào. Anh muốn cùng em đi qua thêm thật nhiều mùa xuân nữa, để được chăm sóc và nhìn thấy em hạnh phúc mỗi ngày. Hôn em!  🌸`;

let letterIndex = 0;
let i = 0;

function typing(){

if(i < text.length){

document.getElementById("title").innerHTML += text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();


// open letter

function openLetter(){

const wrapper = document.querySelector(".envelope-wrapper");

wrapper.classList.toggle("open");

createHearts();

setTimeout(typeLetter,800); // đợi thư mở xong

}
function typeLetter(){

const target = document.getElementById("letterText");

if(letterIndex < message.length){

target.innerHTML += message.charAt(letterIndex);

letterIndex++;

setTimeout(typeLetter,35);

}

}


// flowers

function createFlower(){

const flower = document.createElement("div");

flower.classList.add("flower");

flower.innerHTML = "🌸";

flower.style.left = Math.random()*100 + "vw";

flower.style.animationDuration = (3 + Math.random()*5) + "s";

document.body.appendChild(flower);

setTimeout(()=>{
flower.remove();
},8000);

}

setInterval(createFlower,400);


// hearts

function createHearts(){

for(let i=0;i<15;i++){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},2000);

}

}