const categoryBoxButtons = document.querySelectorAll('.category_box_button');
const showPrice = document.querySelector('.show_price');
const checkboxes = document.querySelectorAll('.checkbox');
const opcityAdd = document.querySelectorAll('.opcity_add');
const deliverTypes = document.querySelectorAll('.main__choose_deliver_types');

let activeCheckbox = null;

categoryBoxButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        categoryBoxButtons.forEach(function (btn) {
            btn.classList.remove('category_box_button_active');
        });

        button.classList.add('category_box_button_active');

        const getPriceElement = button.querySelector('.get_price');

        if (getPriceElement) {
            let priceText = getPriceElement.textContent;
            showPrice.textContent = priceText;
        }

        // Проверка наличия элемента с классом .empty внутри кнопки
        const emptyTitle = button.querySelector('.category_box_title.empty');
        if (emptyTitle) {
            deliverTypes.forEach(function(deliverType) {
                deliverType.classList.add('main__choose_deliver_types__disabled');
                document.querySelectorAll('.deliver_types_radio').forEach(function (radio) {
                    radio.classList.remove('checked_radio')
                });
            });
            const radios = document.querySelectorAll('.deliver_types_radio');
            radios.forEach(function (radio) {
                radio.checked = false
            });
        } else {
            deliverTypes.forEach(function(deliverType) {
                deliverType.classList.remove('main__choose_deliver_types__disabled');
            });

            // Сброс состояния других чекбоксов
            checkboxes.forEach(item => {
                item.removeAttribute('disabled');
                item.checked = false; 
            });

            activeCheckbox = null; // Сброс выбора чекбокса
        }

        handlePaymentButtons();
    });
});

document.querySelectorAll('.size_radio').forEach(radio => {
    radio.addEventListener('change', function() {
        const parentBox = this.closest('.category_box_button');
        const isChecked = this.checked;
        
        if (isChecked) {
            // Убираем выделение со всех кнопок
            document.querySelectorAll('.category_box_button').forEach(button => {
                button.classList.remove('category_box_button_active');
            });
            
            // Выделяем текущую кнопку
            parentBox.classList.add('category_box_button_active');
            
            // Обновляем цену
            const getPriceElement = parentBox.querySelector('.get_price');
            if (getPriceElement) {
                const priceText = getPriceElement.textContent;
                showPrice.textContent = priceText;
            }
            
            // Обрабатываем активные кнопки оплаты
            handlePaymentButtons();
        }
    });
});



function handlePaymentButtons() {
    const selectedCategoryButton = document.querySelector('.category_box_button.category_box_button_active');
    const selectedDeliverRadio = document.querySelector('.checked_radio');

    if (selectedCategoryButton && selectedDeliverRadio) {
        opcityAdd.forEach(element => {
            element.classList.add('opcity');
            element.removeAttribute('disabled');
        });
    } else {
        opcityAdd.forEach(element => {
            element.classList.remove('opcity');
            element.setAttribute("disabled", "true");
        });
    }
}

function activateRadio(){
    const button = document.querySelector('.category_box_button.category_box_button_active');
    document.querySelectorAll('.category_radio').forEach(catRadio => {
        catRadio.checked = false
    })
    button.querySelector('.category_radio').checked = true
}

document.querySelectorAll('.category_box_button').forEach(button => {
    button.addEventListener('click', handlePaymentButtons);
    button.addEventListener('click', activateRadio);
});

document.querySelectorAll('.deliver_types_radio').forEach(radio => {
    radio.addEventListener('change', handlePaymentButtons);
});


function handleCheckboxChange() {
    let atLeastOneChecked = false;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            atLeastOneChecked = true;
            activeCheckbox = checkbox;
        }
    });

    opcityAdd.forEach(element => {
        if (atLeastOneChecked) {
            element.classList.add('opcity');
            element.removeAttribute('disabled');
        } else {
            element.classList.remove('opcity');
            element.setAttribute("disabled", "true");
        }
    });
}

document.querySelectorAll('.radio_cont').forEach(function (container) {
    container.addEventListener('click', function () {
        const radios = container.querySelectorAll('.deliver_types_radio');
        const targetRadio = container.querySelector('.deliver_types_radio');

        document.querySelectorAll('.deliver_types_radio').forEach(function (radio) {
            radio.classList.remove('checked_radio')
        });
            
        if (targetRadio) {
            radios.forEach(function (radio) {
                radio.checked = (radio === targetRadio);
            });
            targetRadio.classList.add('checked_radio')
        }
        handlePaymentButtons()
    });
});


let activeReview = null;

//----------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const productImages = document.querySelectorAll('.main__choose_product_type');
    const mainProductImg = document.querySelector('.main__choose_product_img');

    productImages.forEach(image => {
        image.addEventListener('click', () => {
            mainProductImg.src = image.src;
        });
    });
});

function getAllInfo(){
    const title = document.querySelector('.category_box_button_active .category_box_title').textContent
    const price = document.querySelector('.category_box_button_active .get_price').textContent
    const delivvery = document.querySelector('.checked_radio').getAttribute('data-delivery-name')

    console.log(title);
    console.log(price);
    console.log(delivvery);
}

document.querySelectorAll('.choose_paying_button ').forEach(radio => {
    radio.addEventListener('click', getAllInfo);
});