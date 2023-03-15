////////////////////////////////////// №111111111111
// var  number1 =Number(prompt('Введите первое число!'))
// var  number2 = Number(prompt('Введите второе число!'))
//
// var sravnivanie = function () {
//     if (number1 <= number2) {
//         console.log(number1)
//     } else if (number1 >= number2) {
//         console.log(number2)
//     } else {
//         alert('введите цифрами а не буквами')
//     }
// }
// sravnivanie()
// /////////////////////////////////////////////////№22222
// var nume = prompt('введите имя')
// var officine = function (){
//     console.log(nume.length)
// }
// officine()
/////////////////////////////////////////////////№3333333333333
let  sum1 =Number(prompt('Введите первое число!'))
let  mark = (prompt('Введите математических выражений !'))
let  sum2 = Number(prompt('Введите второе число!'))
let calcu = function(){
    switch (mark) {
        case '+':
            alert(sum1+sum2)
            break
        case '-':
            alert(sum1-sum2)
            break
        case '*':
            alert(sum1*sum2)
            break
        case '/':
            if (sum2 !== 0){
                alert(sum1/sum2)
            }else {
                alert('На ноль делить нельзя')
            }
            break
        default:
            break
    }
}
calcu()