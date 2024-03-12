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

//  const accordionLists = document.querySelectorAll('.accordion-list')    
//  accordionLists.forEach(el => {
//      el.addEventListener('click', (e) => {

//          const accordionList = e.currentTarget
//          const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
//          const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened')

//          const accordionControl = e.target.closest('.accordion-list__control')  

//          if (!accordionControl) return         
//          const accordionItem = accordionControl.parentElement
//          const accordionContent = accordionControl.nextElementSibling

//          if(accordionOpenedItem && accordionItem != accordionOpenedItem){
//              accordionOpenedItem.classlist.remove('accordion-list__item--opened')
//              accordionOpenedContent.style.maxHeight = null;                                                                                                                             ')
//          }
//          accordionItem.classList.toggle('accordion-list__item--opened')
       
//          if (accordionItem.classList.contains('accordion-list__item--opened')) {   
//             accordionContent.style.maxHeight = accordionContent.scrollHeight +'px'
//         } else {
//             accordionContent.style.maxHeight = null
//         }
//      });
//  });
   
const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return
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