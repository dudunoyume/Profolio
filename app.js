const text = document.querySelectorAll(".thePaths");

// console.log(text[0].getTotalLength());

for (let i =0; i < text.length; i++){
    console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

// 讓動畫頁消失
const lastWord = document.querySelector("#tenth");
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend" , () => {
    animation.style = "transition: all 1s ease; opacity: 0; pointer-events : none;";
})