// const amount=12
// console.log('Hello World')
// if(amount<10){
//     console.log('small number')
// }
// else{
//     console.log('large number')
// }

// console.log('hey it is my first node app')

const names=require('./variables')
const sayHi=require('./1-intro')
require('./http')
require('./mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)