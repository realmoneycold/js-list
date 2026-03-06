//String1. Sonning necha xonali ekanini, raqamlari yig’indisini chiqaruvchi dastur tuzing.
// let num = 1298
// num = num.toString()
// let sum = 0
// for(let item of num){
//     console.log(item)
//     sum += Number(item)
// }
// console.log(sum)

//String2. UTF-16 jadvalida kiritilgan belgidan oldin va keyin turuvchi belgilarni chiqaruvchi programma tuzilsin.
// let belgi = "a"
// let position = belgi.codePointAt()
// console.log(String.fromCharCode(position+1))
// console.log(String.fromCharCode(position-1))

//String3. UTF-16 jadvali orqali faqat katta va kichik harflardan iborat satr qaytaruvchi mos ravishda getUpperCases() vs getLowerCases() nomli funksiyalar hosil qiling.
// function getUpperCases(str){
//     let natija = ""
//     for (let item of str){
//         let letter = str.charCodeAt(item);
//         if (letter >= 97 && letter <= 122){
//             natija += String.fromCharCode(code - 32)
//         }   
//         else{
//             natija += str[item]
//         }
//     }
//     return natija;
// }
// function getLowercase(str){
//     let natija = "";
//     for (let item of str){
//         let letter = str.charCodeAt(item);
//         if (letter>= 65 && letter <=90){
//             natija += String.fromCharCode(code + 32);
//         }
//         else{
//             natija +=str[item]
//         }
//     }
//     return natija;
// }
// let satr = "ABcdd"
// console.log(`Original: ${satr}`)
// console.log(`Upper: `, getUpperCases(satr));
// console.log(`Lower: `, getLowercase(satr));


//String4. Satr berilgan. Shu satr belgilari orasiga bittadan probel qo'yilgan satr hosil qiluvchi va ekranga chiqaruvchi programma tuzilsin. Kiritilgan satrda probel yo'q deb qabul qilinsin.
// Input: let str = "abcd"
// Output: "a b c d"
// let str = "abcd";
// let natija = str.split("").join(" ");
// console.log(natija)

//String5. C belgisi va S1, S2 satrlari berilgan. S1 satriga shu satrda uchragan har bir C belgisidan keyin S2 satrini qo'shuvchi programma tuzilsin.
// Input: S1 = "Hello world"; S2 = "*", C = "l"
// Output: "Hel*l*o worl*d"
// let S1 = "Hello world";
// let S2 = "*";
// let C = "l";
// let result = S1.split(C).join(C + S2);
// console.log(result);

//String7. Probel bilan ajratilgan o'zbekcha so'zlardan iborat str nomli satr berilgan. Satrdagi so'zlar sonini qaytaruvchi getNumberOfWords(str) nomli funksiya tuzilsin.
// function getNumberOfWords(str) {
//     let sanash = 0;
//     let suz = false;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== " ") {
//             if (suz === false) {
//                 sanash++;
//                 suz = true; 
//             }
//         } else {
//             suz = false; 
//         }
//     }
//     return sanash;
// }
// console.log(getNumberOfWords("Hello world Mr robot! "));

//String9. Probel bilan ajratilgan o'zbekcha so'zlardan iborat str nomli satr berilgan. Satrdagi eng qisqa so'zni qataruvchi getMinOfString(str) funksiya tuzilsin.

