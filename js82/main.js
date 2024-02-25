
//Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.
console.log("задание 1:")
function CheckName(name) {
    return `hello ${name}`
}
console.log(CheckName('Alex'))
//2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел.
// Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль
console.log("задание 2:")
const num = [1, 2, 3, 9, 11, 15, 900]

function Filter(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }

}
Filter(num)
// 3) Предлагаю вам реализовать простенький калькулятор. Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора. 
// При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции происходит проверка на знак и в данном случае функция должна вернуть -1. 
// То есть мы получаем разницу между первым и вторым аргументом. 
// Запишите результат выполнения функции в переменную и выведите в консоль. 
// Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.
console.log("задание 3:")
let result = null
function calculator(FirstNumber, sign, SecondNumber) {
   if(sign === " minus "){
    result = FirstNumber - SecondNumber
   }
   if(sign === " plus "){
    result = FirstNumber + SecondNumber
   }
   if(sign === "divide"){
    result = FirstNumber / SecondNumber
   }
   if(sign === "multiply"){
    result = FirstNumber * SecondNumber
   }
   console.log(result)
  
}
calculator(8 ,"multiply", 2)

