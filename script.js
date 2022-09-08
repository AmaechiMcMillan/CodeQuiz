let images = [{img: "", description: ""},
    {img: "", description: ""},
    {img: "", description: ""},
    {img: "", description: ""},
    {img: "", description: ""},
]  


let imageEl = document.querySelector("img");
let imageDescEl = document.querySelector("h1");
let timerEl = document.querySelector("h4");
let intervalId;
let timer = 60;
let container = document.querySelector(".container");

let currentImageIndex = 0;

renderImage();
startTimer();


container.addEventListener("click", function(){

    currentImageIndex++;
    renderImage();
})

function startTimer(){
    intervalId = setInterval(function(){
        timer--;
        timerEl.textContent = timer;

        if(timer === 0){
            clearInterval(intervalId);
        }
    },1000)


}

function renderImage(){
    imageEl.src = images[currentImageIndex].img;
    imageDescEl.textContent = images[currentImageIndex].description;
}