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
/*=====================tabs=================================================*/
const tabControls = document.querySelector('.tabs-control')
tabControls.addEventListener('click' , toggleTab)
function toggleTab(e){
    const tabControl = e.target.closest('.tabs__control-link')
    if(!tabControl)return
    e.preventDefault()
    if(tabControl.classList.contains('tabs__control-link--active'))return
        
   
    const tabContentId = tabControl.getAttribute('href')
    const tabContent  =  document.querySelector(tabContentId)
    const activeControl =  document.querySelector('.tabs__control-link--active')
    const activeContent  =   document.querySelector('.tab-content--show')         
    
    if(activeControl){
        activeControl.classList.remove('tabs__control-link--active')

    }
    if( activeContent){
        activeContent.classList.remove('tab-content--show')

    }

    tabContent.classList.add('tab-content--show')
    tabControl.classList.add('tabs__control-link--active')}

 /*=====================accardion=================================================*/
const accordionLists = document.querySelectorAll('.accordion-list');
accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return
        e.preventDefault()
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            accordionOpenedContent.style.maxHeight = null;
        }
        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }

    });

});


//swiperrrrrrrrrrrrrrrrr    
new Swiper('.gallery-slider ', {


    pagination: {
      el: '.gallery-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.gallery__nav-next',
      prevEl: '.gallery__nav-prev',
    },
    spaceBetween:15,
    slidesPerView: 1,

        breakpoints: {
            451:{
                slidesPerView: 2,
            },
            601:{
                slidesPerView: 3,
            },
          801:{
             spaceBetween:32,
            
          },
          1101: {
            slidesPerView: 4,
            
          },
          
        }
     
    
});
//swiperrrrrrrrrrrrrrrrr    
 new Swiper('.reviews-slider', {
        
        spaceBetween:66,
        slidesPerView: 1,
    
       
        navigation: {
          nextEl: '.reviews__nav-next',
          prevEl: '.reviews__nav-prev',
        },
    
        centeredSlides: true,
        scrollbar: {
          el: '.reviews-scrollbar',
            
        },
        breakpoints: {
            
          901: {
            slidesPerView: 1.5,
            
          },
          1201: {
            slidesPerView: 2.1,
            
          },
          
        }
      });
      const inputs = document.querySelectorAll('input[type="tel"]')
      const im = new Inputmask('+7 (999) 999-99-99')
      im.mask(inputs)

































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