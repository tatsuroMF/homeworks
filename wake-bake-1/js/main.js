const body = document.body
let btn = document.querySelector('.burger-menu')
const link = document.querySelector('.header__nav-ul')

btn.addEventListener('click', event => {
    event.preventDefault(); // Предотвращение стандартного действия
    body.classList.toggle('body--opened-menu')
})

link.addEventListener('click', () => {
    body.classList.remove('body--opened-menu')
})

// function prevent(e){
//     e.preventdefault()
// }










































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