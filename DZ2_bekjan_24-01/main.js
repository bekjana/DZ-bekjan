
// let arr = [10, 20, 30, 50, 235, 3000];
// console.log(arr.filter(num => ['1','2','5'].includes(num.toString()[0])));

///////////////////////////////////////////////////////////





// for (var icom = 20; icom > 0; icom = icom - 1){
//     console.log(icom)
// }





//////////////////////////////////////////////////////////////////////////////////////





let svetovor = prompt('выбрать один свет ').trim().toLocaleLowerCase()
let red = ['стоп']
let orange = ['готовтесь']
let green = ['go']
switch (svetovor) {
    case 'red':
        alert(red)
        break
    case 'orange':
        alert(orange)
        break
    case 'green':
        alert(green)
        break
    default:
        alert('Ката')
        break
}