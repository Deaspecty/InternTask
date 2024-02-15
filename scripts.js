// const image = document.getElementById('mobile-image-2');


// const animateButton = document.getElementById('mobile-image-2');

//   animateButton.addEventListener('click', () => {
//     image.style.transform = "perspective(2000px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(80deg)";
//     // Измените это на ваши требования 
//   });

const image = document.getElementById('mobile-image-2');
let isGrabbing = false;
let startX = 0;
let initialRotateY = 0; // начальное значение rotateY

// image.addEventListener('mousedown', (event) => {
//     isGrabbing = true;
//     image.style.cursor = "grab";
//     startX = event.clientX - image.offsetLeft;
// });
// document.addEventListener('mouseup', () => {
//     isGrabbing = false;
//     image.style.cursor = "pointer";
// });

// document.addEventListener('onmouseover', (event) => {
//     if (isGrabbing) {
//         const newX = event.clientX - startX;

//         // Изменение rotateY в зависимости от движения мыши
//         const sensitivity = 0.3; // чувствительность движения
//         const rotateY = initialRotateY + newX * sensitivity;

//         image.style.transform = `perspective(2000px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(${rotateY}deg)`;
//     }
// });

let NOW = 0
let texts = ['']

let cards = document.getElementsByClassName("card");
for(let i = 0; i < cards.length; i++){
    cards[i].onclick = goTo(i)
}

function goTo(index){
    if(index > NOW){
        for(let i = NOW; NOW == index ; i++){
            image.style.transform = `perspective(2000px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(90deg)`;
            image.src = "photoes/" + index+1 + ".png";
            image.style.transform = `perspective(2000px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(180deg)`;
        }
    }else if(index < NOW){
        for(let i = NOW; NOW == index ; i--){
            image.style.transform = `perspective(2000px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(90deg)`;
            image.src = "photoes/" + index+1 + ".png";
            image.style.transform = `perspective(2000px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(180deg)`;
        }
    }
    NOW = index
    console.log(123)
}

function aaa(){
    console.log(1);
}

export default aaa();