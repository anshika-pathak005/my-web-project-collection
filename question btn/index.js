const wrapper = document.querySelector(".container")
const question = document.querySelector("#question")
const yesBtn = document.querySelector("#yes_button")
const noBtn = document.querySelector("#no_button")

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click',()=>{
    question.innerHTML = "Yeah, That's great!"
})

noBtn.addEventListener('mouseover',()=>{

    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;

    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;


    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';

})