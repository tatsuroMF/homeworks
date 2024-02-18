
if(age >= 18){
    console.log("вам можно пиво")
}else{
    console.log("тебе нельзя пиво:(")
}
/*===============|Условия|====================*/
let age = 15
age >= 18 ? console.log('вам можно пыво') : console.log('вам нельзя пыво')
/*===================================*/

let baby = 10
switch (baby) {
    case 6:
        console.log("ты мелкий")
        break
    case 8:
        console.log('ты мелкий')
        break;
    case 10:
        console.log('ты бальшой')
        break;
    default:
        console.log('ты ...')
}
/*=====================================================================*/
/*=====================================================================*/

let user = "admin"
switch (user) {
    case "user":
        console.log("вход запрещен")
        break
    case "admin":
        console.log('Добро пожаловать!')
        break;
    case 'developer':
        console.log('Добро пожаловать!')
        break;
    default:
        console.log('иди на****')
}
/*===============|циклы|===============================================*/
/*===============|циклы|===============================================*/
for (let i = 0; i <= 12; i++) {
    if (i % 2 === 0) {
        console.log(i + " четное")
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(i)
}
let i = 0
while (i < 12) {
    i++
    if (i % 2 === 0) {
        console.log(i + " четное")
    }
}


let j = 0
while(j <10){
    j++
    console.log(j)
}