
/*=====================================================================*//*|1|*/
console.log('задание 1,2')
const description = {
    Alihan: {
        name: 'alih',
        age: 18,
        InGroup: true,
        Hello(name) {
            console.log(`hello ${name}!`)
        }
    }
}
description.Alihan.Hello("Dima")
/*=====================================================================*//*|3|*/
console.log('задание 3')

const UsersProfile = [
    {
        name: 'Danil',
        age: 24,
        isProffDev: true
    },
    {
        name: 'Sergey',
        age: 50,
        isProffDev: false
    },
    {
        name: 'Ilya',
        age: 26,
        isProffDev: true
    },
    {
        name: 'Grisha',
        age: 24,
        isProffDev: false
    }
]
let ProffDevNum = 0
for (let i = 0; i < UsersProfile.length; i++) {
    if (UsersProfile[i].isProffDev === false) {
        ProffDevNum += 1
    }
}
console.log(ProffDevNum)