//DARSDA KO’RILISHI KERAK BO’LGAN MASALALAR
//Func1. Tomoni a va b ga teng bo’lgan to’g’ri to’rtburchakning yuzasi va perimetrini hisoblovchi rectangle(a, b) nomli funksiya hosil qiling. QYM
// Input: rectangle (6, 9)
// Output: 54, 30
// function rectangle(a,b) {
//     console.log(`Peremetri: `+ (a + b)*2)
//     console.log(`Yuzasi: `+ a * b)
// }
// rectangle(6,9)

// Func2. Tomoni a ga teng bo’lgan teng tomonli uchburchakning yuzasi va perimetrini hisoblovchi triangle(a) nomli funksiya hosil qiling. QYM
// triangle (6)
// function triangle(a) {
//     console.log(`peremetri: ${3 * a}`)
//     console.log(`Yuzasi: ${(Math.sqrt(3) / 4 * a ** 2)}`);    
// }
// triangle(3)


//Func3. 1 dan n ga sonlar yig’indisini qaytaruvchi sum(n) nomli funksiya hosil qiling. QY
// function sum(n) {
//     for (let i = 1; i<=n; i ++) {
//         console.log(i)
//     }
// }
// sum(10)


// Func4. isSquare (k) mantiqiy funksiyasini hosil qiling. (k > 0). Agar k biror butun sonning kvadrati bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isSquare(10) => false
// isSquare(25) => true
// function isSquare(k) {
//     count = 1
//     while (count * count < k) {
//         count ++
//     }
//     if (count==Math.sqrt(k)){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(isSquare(10))
// console.log(isSquare(25))

//Func5. Butun qiymat qaytaruvchi digitCount(k) funksiyasini hosil qiling. (k > 0). Funksiya k ning raqamlari sonini qaytarsin. QY
// digitCount(8791) => 4

// function digitCount(k) {
//     if (k < 0) return 0;
//     if (k < 10)          return 1;
//     if (k < 100)         return 2;
//     if (k < 1000)        return 3;
//     if (k < 10000)       return 4;
//     if (k < 100000)      return 5;
//     if (k < 1000000)     return 6;
//     if (k < 10000000)    return 7; 
// }
// console.log(digitCount(122));   

//Func6. n natural sonning raqamlari yig'indisini hisoblovchi getDigitSum(n) nomli funksiya hosil qiling. QY
// getDigitSum (456) => 15
// function getDigitSum(n){
//     sum = String(n);    
// }
// getDigitSum(10)

//Func7. timeToHMS(T) funksiyasini hosil qiling. Funksiya berilgan T sekundni, H - soat, M - minut, S - sekundlarga ajratsin. QY
// timeToHMS(400) => 00:06:40

// function timeToHMS(T) {
//     for (let M = T * 60; H = M * 60; ){
//         if (T > 60 || T < 120){

//         }
//     }
// }

//  Func8. incTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya berilgan vaqtdan 1 sekund keyingi vaqtni ko’rsatsin. QY
// incTime(0, 6, 40) => 00:06:41
// incTime(0, 6, 59) => 00:07:00
// incTime(1, 59, 59) => 02:00:00
// incTime(23, 59, 59) => 00:00:00

//count do it (

//UYGA VAZIFA

//Func1. a sonning ixtiyoriy n-darajasini hisoblovchi power(a, n) nomli funksiya hosil qiling. QY
// power(3, 5) => 243

// function power(a,n){
//     console.log(a ** n)
// }
// power(3,5)

//Func2. 2 ta a va b sonning o'rta arifmetigi (a + b) / 2 va geometrigi (a + b) ^ (1 / 2) hisoblovchi mean(a, b) nomli funksiya hosil qiling. QYM
// mean(12, 48) => 30, 24

// function mean(a,b){
//     console.log(`O'rta arifmetigi: ${(a + b)/2}`)
//     console.log(`Geometrig: ${(a+b)*(1/2)}`)
// }

//Func3. Haqiqiy sonning ishorasini aniqlovchi sign(n) nomli funksiya hosil qiling. Funksiya argumenti noldan kichik bo'lsa -1; noldan katta bo'lsa 1; nolga teng bo'lsa 0 qiymat qaytarsin. QY
// sign(10) => 1
// function sign(n){
//     if (n < 0) {
//         n = -1
//         console.log(n)
//     }
//     else if (n > 0) {
//         n = 1
//         console.log(n)
//     }
//     else {
//         n = 0
//         console.log(n)
//     }
// }
// sign(10)

// /Func4. A*x^2 + B*x + C = 0 ko'rinishidagi tenglama kvadrat tenglama deyiladi. (A noldan farqli son). Kvadrat tenglamaning ildizlar sonini aniqlovchi numberOfRoots(A, B, C) nomli funksiya hosil qiling. D = B^2 - 4*A*C. Agar D > 0 bo’lsa 2 ta, D = 0 bo’lsa 1 ta, D < 0 bo’lsa 0 ta. QY
// numberOfRoots (1, -6, 9) => 1
// function numberofRoots(A, B, C){
//     let D = B * B - 4 * A * C;
//     if (D > 0) console.log(2);
//     if (D == 0) console.log(1);
//     console.log(0);
// }
// numberofRoots(1, -6, 9)

//Func5. Doiraning yuzini hisoblovchi areaCircle(R) nomli funksiya hosil qiling. Doiraning yuzi S = π*R^2 orqali hisoblanadi. QY
// function areaCircle(R){
//     let S = Math.PI*R*2
//     console.log(S)
// }
// areaCircle(10)

// Func6. A va B sonlari orasidagi sonlar yig'indisini hisoblovchi sumRange(A, B) nomli funksiya hosil qiling. Agar A > B bo'lsa, funksiya 0 qiymat qaytaradi. QY
// sumRange(8, 10) => 27

// function sumRange(A, B) {
//     if (A > B) {
//          console.log(0);
//     }
//     let sum = 0;

//     for (let i = A; i <= B; i++) {
//         sum += i;
//     }
//     console.log(sum)
// }
// sumRange(8,10)

//Func7. Arifmetik amallarni bajaruvchi calc(A, B, S) funksiyasini hosil qiling. A va B haqiqiy sonlar. S o'zgaruchisi orqali bajariladigan arifmetik amal aniqlanadi. “-” – ayirish, “*” – ko'paytirish, “/” - bo'lish, “+” - qo'shish va boshqa belgilar uchun 0 qaytarsin. QY
// calc(10, 15, “*”) => 150
// calc(7, 8, “+”) => 15

// function calc(A,B,S){
//     if (S == "+"){
//         console.log(A + B)
//     }
//     else if ( S == "-") {
//         console.log(A - B)
//     }
//     else if (S == "/") {
//         console.log(A / B)
//     }
//     else if (S == "*") {
//         console.log(A * B)
//     }
//     else {
//         console.log("To'g'ri amal kiriting!")
//     }
// }
// calc(1,2,"+")

//Func8. Butun sonning juft - toqligini aniqlovchi isEven(K) funksiyasini hosil qiling. Funksiya K juft son bo'lsa - true, aks xolda false qiymat qaytarsin. QY
// isEven(10) => true

// function isEven(K){
//     if (K % 2 == 0){
//         console.log(true)
//     }
//     else if (K % 2 != 0){
//         console.log(false)
//     }
// }
// isEven(10)

//Func9. Kiritilgan 3 ta a, b, c sonlarning eng kichigini, o’rtachasini va eng kattasini chiqaruvchi sortABC(a, b, c) nomli dastur tuzing. QYM
// sortABC(10, 5, 8) => 5, 8, 10
// function sortABC(a,b,c){
//     if (a>b && b>c){
//         console.log(`Eng katta son: ${a}
//             O'rtacha son: ${b}
//             Eng kichik son: ${c}`)
//     }
//     else if (a>c && c>b){
//         console.log(`Eng katta son: ${a}
//             O'rtacha son: ${c}
//             Eng kichik son: ${b}`)
//     }
//     else if (b>a && a>c){
//         console.log(`Eng katta son: ${b}
//             O'rtacha son: ${a}
//             Eng kichik son: ${c}`)
//     }
//     else if (b>c && c>a){
//         console.log(`Eng katta son: ${b}
//             O'rtacha son: ${c}
//             Eng kichik son: ${a}`)
//     }
//     else if (c>a && a>b){
//         console.log(`Eng katta son: ${c}
//             O'rtacha son: ${a}
//             Eng kichik son: ${b}`)
//     }
//     else if (c>b && b>a){
//         console.log(`Eng katta son: ${c}
//         O'rtacha son: ${b}
//         Eng kichik son: ${a}`)
//     }

// }
// sortABC(12,10,13)

//Func10. isPowerN(K, N) mantiqiy funksiyasini hosil qiling. (K > 0). Agar K soni N soninig biror darajasi bo'lsa - true, aks xolda false qiymat qaytarilsin. QY
// function isPowerN(K,N){
// 	if (K < 1 || N < 2) console.log(false);
// 	let value = 1;
// 	while (value < K) {
// 		value *= N;
// 	}
// 	console.log(value === K);
// }
// isPowerN(27, 3);
