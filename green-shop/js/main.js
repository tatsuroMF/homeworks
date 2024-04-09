//swiper 
new Swiper('.hero-slider', {
  pagination: {
    el: '.hero__slider-pagination',
  },
})


//burger-menu
const body = document.body
let btn = document.querySelector('.burger-menu')
const link = document.querySelector('.header-top')
btn.addEventListener('click', e => {
  if (window.innerWidth <= 1100) {
    e.preventDefault();
    body.classList.toggle('body--opened-menu')
  }
})
link.addEventListener('click', e => {
  if (window.innerWidth <= 1100) {
    e.preventDefault();
    if (e.target.tagName === 'A') {
      body.classList.remove('body--opened-menu');
    }
  }
})
const tabsBtn = document.querySelectorAll('.pagination-control')
const tabsItems = document.querySelectorAll('.tab__content-list')
tabsBtn.forEach(function (e) {

  e.addEventListener('click', function () {
    let currentBtn = e;
    let tabId = currentBtn.getAttribute("href")
    let currentTab = document.querySelector(tabId)

    if (!currentBtn.classList.contains('pagination-control--active')) {

    }
    tabsBtn.forEach(function (e) {
      e.classList.remove('pagination-control--active')
    })
    tabsItems.forEach(function (e) {
      e.classList.remove('tab__content-list--show')
    })



    currentBtn.classList.add('pagination-control--active')
    currentTab.classList.add('tab__content-list--show')
    e.preventDefault()
  })
})


//Filter

const tabActive = document.querySelectorAll('.tab__control-link');
const elems = document.querySelectorAll('.tab__content-list');

elems.forEach((elem) => {
  const iso = new Isotope(elem, {
    itemSelector: '.tab__content-item',
    layoutMode: 'fitRows',
    getSortData: {
      price: function (itemElem) {
        let price = itemElem.querySelector('.price').textContent;
        return parseFloat(price.replace('$', ''));
      }
    }
  });
  const sortButtons = document.querySelectorAll('.tab__sort-button');
  sortButtons.forEach(button => {
    button.addEventListener('click', function () {
      const sortBy = this.getAttribute('data-sort');
      iso.arrange({ sortBy });
    });
  });
  tabActive.forEach((e) => {
    e.addEventListener('click', function () {
      currentBtn = e;
      tabActive.forEach(function (e) {
        e.classList.remove('tab__control-link--active');
      });
      currentBtn.classList.add('tab__control-link--active');

      let filter = currentBtn.dataset.filter;
      iso.arrange({ filter: filter });
    });
  });
});
document.querySelectorAll('.tab__control-link').forEach(el => {
  el.addEventListener('click', (e) => {
    let filter = e.currentTarget.dataset.filter
    iso.arrange({ filter: `${filter}` })
  })
})

// document.querySelectorAll('.tab__sort-button').forEach(el => {
//   el.addEventListener('click', (e) => {
//     let sort = e.currentTarget.getAttribute('data-sort')
//     iso.arrange({ sort: `${sort}` })
//   })
// })
/*------------------------------modal--------------------------------------------------------*/
const modalBtn = document.querySelector(".header__user-btn")
const modalClose = document.querySelector(".modal-cancel")
const modal = document.querySelector(".modal");
modalBtn.addEventListener('click', () => {
  if (modalBtn) {
    body.classList.add('body--opened-modal')
  }
})
modalClose.addEventListener('click', () => {
  if (modalBtn) {
    body.classList.remove('body--opened-modal')
  }

})
window.addEventListener('click', e => {
  if (e.target === modal) {
    body.classList.remove('body--opened-modal');
  }
})



const tabsBtnModal = document.querySelectorAll('.modal__tab-link')
const tabsModal = document.querySelectorAll('.modal-item')
tabsBtnModal.forEach(function (e) {
  e.addEventListener('click', function () {
    let currentBtn = e;
    let tabId = currentBtn.getAttribute("href")
    let currentTab = document.querySelector(tabId)

    if (!currentBtn.classList.contains('modal__tab-link--active'))
      tabsBtnModal.forEach(function (e) {
        e.classList.remove('modal__tab-link--active')
      })
    tabsModal.forEach(function (e) {
      e.classList.remove('modal-login--show')
    })



    currentBtn.classList.add('modal__tab-link--active')
    currentTab.classList.add('modal-login--show')

  })
})





/*--------------------------hide/show------------------------------------------------------------*/
const Eye = document.querySelectorAll('.eyeicon')
const password = document.querySelectorAll(".modal__form-password-check")
Eye.forEach(function (e) {
  e.addEventListener('click', function () {
    password.forEach((el) => {
      if (el.type == "password") {
        el.type = "text"
        e.src = "imgs/icons/show.png"
      } else {
        el.type = "password"
        e.src = "imgs/icons/hide.png"
      }
    })
  })
})

const passwordInput = document.querySelector('.modal__form-password-check');
const confirmPasswordInput = document.querySelector('.confirmPassword');
const confirmBtn = document.querySelector('.modal__form-btn--reg');
const message = document.querySelector('.modal__form-check');

confirmBtn.addEventListener('click', (e) => {
  e.preventDefault(); 
  if (passwordInput.value.length > 0) {
    if (passwordInput.value === confirmPasswordInput.value) {
      // Пароли совпадают, можешь выполнить дополнительные действия
    } else {
      alert('Пароли не совпадают!');
    }
  } else {
    alert('Введите пароль!');
  }
});
/*--------------------------------------------------------------------------------------*/
const sortBtn = document.querySelector('.tab__sort-btn');
const sortItems = document.querySelectorAll('.tab__sort-item');

sortBtn.addEventListener('click', (e) => {
  e.preventDefault();

  sortItems.forEach(item => {
    item.classList.add('tab__sort-item--show');
  });
});

sortItems.forEach(item => {
  item.addEventListener('click', () => {
    sortItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('tab__sort-item--show');
      }
    });
  });
});

/*--------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------*/
//volume
document.getElementById('volume').addEventListener('input', function (e) {
  var label = document.querySelector('label[for="volume"]');
  label.textContent = 'Price: $' + e.target.value;
});




