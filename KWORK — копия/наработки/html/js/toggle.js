const btns = document.querySelectorAll('.mobile__desc-btn')
const desc = document.querySelectorAll('.mobile__desc')[1];
const rewiews = document.querySelector('.mobile__rewiews-wrap');

function openDesc() {
    btns[0].classList.add('active');
    btns[1].classList.remove('active');
    rewiews.style.display = 'none';
    desc.style.display = 'block';
}

// function openRew() {
//     btns[0].classList.remove('active');
//     btns[1].classList.add('active');
//     rewiews.style.display = 'block';
//     desc.style.display = 'none';
// }

const checkbox = document.querySelectorAll('.mobile__delivery-item-checkbox');

checkbox.forEach(element => {
    element.addEventListener('change', () => {
        document.querySelectorAll('.mobile__price-text')[0].style.color = 'black';
        document.querySelectorAll('.mobile__price-text')[1].style.color = 'black';
        document.querySelector('.mobile__main-btn').style.opacity = '1';
        document.querySelector('.mobile__main-btn-succes').style.opacity = '1';
    })
});