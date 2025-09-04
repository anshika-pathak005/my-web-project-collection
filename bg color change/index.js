const section = document.querySelector(".sec");
const btn = document.querySelector(".btn")
const bgText = document.querySelector(".bg_text")
const circle = document.querySelector(".clipPath_circle")
const inputFocus = document.querySelector(".newColor_input")

let newColor;

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    newColor = document.querySelector(".newColor_input").value;

    section.style.background = newColor;
    circle.style.background = newColor;
    circle.classList.add('active');
    bgText.classList.add('fade');
    bgText.innerHTML = newColor;
})

inputFocus.addEventListener('focus',()=>{
    circle.classList.remove('active');
    bgText.classList.remove('fade');

})