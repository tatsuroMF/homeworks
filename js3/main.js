/*|1|*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
/*|2|*/
let rainbow = 0
for (let j =  ['red', 'orange', 'yealow', 'green', 'blue', 'violet']; rainbow.length > j ;rainbow[j]--) {
    console.log(j[rainbow])
}


