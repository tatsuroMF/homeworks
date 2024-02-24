let age = 15
/*|1|*/
if(age >= 18){ 
    console.log("вам можно пиво")
}else{
    console.log("тебе нельзя пиво:(")
}
/*|2|*/
age >= 18 ? console.log('вам можно пыво') : console.log('вам нельзя пыво')

/*=====================================================================*/
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
/*=====================================================================*/

