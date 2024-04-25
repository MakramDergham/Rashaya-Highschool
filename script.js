const preloader= document.getElementById("preloader");

window.addEventListener("load",fullyLoaded);

function fullyLoaded(){
    preloader.style.display="none"
}


// const observer = new IntersectionObserver(entries =>{
//     entries.forEach(entry =>{
//         const counts = entry.target.querySelectorAll('.count')

//         if(entry.isIntersecting){
//             counterUp()
//             console.log("is intersecting")
//         }
//     })
// })


// function counterUp(){
//     const counts = document.querySelectorAll('.count')
//     const speed = 25
//     counts.forEach((counter) => {
//         function upDate(){
//             const target = Number(counter.getAttribute('data-target'))
//             const count = Number(counter.innerText)
//             const inc = target / speed        
//             if(count < target){
//                 if(Math.floor(inc + count) >0){
//                     counter.innerText = Math.floor(inc + count) 
//                 }else{
//                     counter.innerText=target
//                 }
//                 setTimeout(upDate, 60)
//             }else{
//                 counter.innerText = target
//             }
//         }
//         upDate()
//     })
// }
function counterUp(){
    const valueDisplays  = document.querySelectorAll('.count')
    let interval = 2000;
        valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-target"));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
            startValue +=1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
            }, duration);
        });
}

function counterReset(){
    const counts = document.querySelectorAll('.count')
    counts.forEach((counter) => {
        counter.innerText = 0 
    })
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("test");
            setTimeout(counterUp, 500);
        }else{
            counterReset()
        }
    });
});
const elementsToObserve = document.querySelectorAll('.count');
elementsToObserve.forEach(element => {
    observer.observe(element);
});





