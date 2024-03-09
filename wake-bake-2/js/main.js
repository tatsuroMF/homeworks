const body = document.body
let btn = document.querySelector('.burger-menu')
const link = document.querySelector('.header__nav-ul')

btn.addEventListener('click',e => {
    e.preventDefault(); 
    body.classList.toggle('body--opened-menu')
})

link.addEventListener('click', e => {
    e.preventDefault(); 
    body.classList.remove('body--opened-menu')
})

/*=====================MODAL=================================================*/
const btnModal = document.querySelector(".about__img-button")
const btnClose = document.querySelector(".modal__cancel")
const modal = document.querySelector(".modal");
btnModal.addEventListener('click' , e =>{
    e.preventDefault()
   body.classList.add('body--opened-modal')
})
btnClose.addEventListener('click', e => {
    e.preventDefault(); 
    body.classList.remove('body--opened-modal')
})

window.addEventListener('click', e => {
    if (e.target === modal) {
        body.classList.remove('body--opened-modal');
    }
})







































// btn.addEventListener('click', () => {
//     body.classList.toggle('body--opened-menu')
// })
































// body.addEventListener('click', () => {
//     const bodyOpen = document.querySelector('.body--opened-menu')
//    if(bodyOpen){
//     close()
//    }
 
// })
    // const close = () =>{
// classList.remove('body--opened-menu')
// }