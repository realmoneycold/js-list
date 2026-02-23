
// break contiunie
// let n = 10
// for (let i = 0; i <= n; i++) {
//     if (i == 2) {
//         break;
//     }
//     console.log(i)
// }
// for (let i = 0; i <= n; i++) {
//     if (i == 2 || i == 5) {
//         continue;
//     }
//     console.log(i)
// }

// do while
// let count = 0
// do {
//     console.log(count);
//     count++;
// } while (count < 5)


// function
// 3 4
// 6 8
// 10 98
// a=3
// b= 4
// console.log(a+b)
// x=6
// y=8
// console.log(x+y)

// function addSum(a, b) {
//     console.log(a+b)
// }
// addSum(3, 4)
// addSum(8, 9)
// addSum(78,96)
// // QYM VA QY

// function sayHello(message){
//     return message
//     return 3
// }
// console.log(sayHello("Abduvali"))
// function triangle(a){
//     let P = 3*a
//     let S = a**2*Math.sqrt(3)/2
//     console.log(P, S)
// }
// triangle(20)
// triangle(30)
// triangle(60)

// function sum(n) {
//     let sum = 0
//     for (let i = 1; i <= n; i++) {
//         sum += i
//     }
//     return sum
// }
// let result = sum(10)
// console.log(result)

function isSquare(k) {
    count = 1
    while (count * count < k) {
        count++;
    }

    if(count==Math.sqrt(k)){
        return true
    }
    else{
        return false
    }
}
console.log(isSquare(36))

