// 1
// /1. Quyidagi massivdagi barcha odamlarni yoshlarining o’rtacha qiymatini chiqaruvchi getAverageAge(arr) nomli funksiya yozing.
// const people = [
// { name: "Abdulaziz", age: 33 },
// { name: "Erkin", age: 22 },
// { name: "Temur", age: 34 },
// { name: "Sardor", age: 20 },
// ];
// total = 0
// function getAvarageAge(arr){
//     arr.forEach(element => {
//         total = total + element.age;
//     });
//     avarage = total / arr.length;
//     console.log(avarage)
// }
// getAvarageAge(people)

// 2
// 2. Massiv ichidagi har bir objectga isMarried nomli property qo’shilsin. Agar object yoshi 25 dan kichi bo’lsa isMarried ga false, aks holda true qiymat o’zlashtirilsin.
// const people = [
// { name: "Abdulaziz", age: 33 },
// { name: "Erkin", age: 22 },
// { name: "Temur", age: 34 },
// { name: "Sardor", age: 20 },
// ];
// function isMarried(arr){
//    return arr.map(person => ({
//     ...person,
//     isMarried: person.age > 25
//    }));
// }
// console.log(isMarried(people))

// /3. Quyidagi objectlardan tuzilgan massiv ichidagi yoshi eng katta va yoshi eng kichik bo’lgan insonning ismlarini qaytaruvchi getNameMaxMinAge(arr) nomli funksiya yozing. (for)
// Output: ["Temur", "Sardor"]
// const people = [
// { name: "Abdulaziz", age: 33 },
// { name: "Erkin", age: 22 },
// { name: "Temur", age: 34 },
// { name: "Sardor", age: 20 },
// ];
// function getNameMaxMinAge(arr){
//     let maxPerson = arr[0];
//     let minPerson = arr[0];

//     for(let i = 1; i<arr.length; i++){
//         if (arr[i].age > maxPerson.age){
//             maxPerson = arr[i]
//         }
//         if (arr[i].age < minPerson.age){
//             minPerson = arr[i];
//         }
//     }
//     return [maxPerson.name, minPerson.name];
// }
// console.log(getNameMaxMinAge(people))

//4. Objectda turli xil kalitlar bir xil qiymatlarga ega, kalitlari o'sha qiymatlardan iborat shunday object tuzingki, bu objectning qiymatlari massiv ko'rinishidagi eski objectning kalitlarlaridan iborat bo'lsin.
// Input: {1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20}
// Output: {20: [1, 3, 8], 30: [2, 5], 40: [4, 7]: 50: [6]}
// tf is that?

//UYGA VAZIFA
// 1. Quyidagi objectni outputdagi ko'rinishda chiqaring. (toString, join)
// const me = {
// firstName: "Abdulaziz",
// lastName: "Toshpulatov",
// age: 23,
// languages: ["js", "python", "c++", "nodejs"],
// friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };
// console.log(`firstName: ${me.firstName}`);
// console.log(`lastName: ${me.lastName}`);
// console.log(`age: ${me.age}`);
// console.log(`languages: ${me.languages.toString()}`);
// console.log(`friends: ${me.friends.join("+")}`);

// /2. Kalitlari 1 dan n gacha bo’lganlar sonlarga, qiymatlari esa o’sha sonlarning kvatratiga teng object hosil qiling. (for)
// function Input(arr){
//     let result = {}; 
//   for (let i = 1; i <= arr; i++) {
//     result[i] = i ** 2; 
//   }
//   return result; 
// }
// console.log(Input(5))

//4. 2-misoldan hosil bo’lgan objectning kalitlari va qiymatlari yig’indisini toping. (Object.keys(), Object.values())
// const names = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
// function length(arr){
//     let result = {};
//     for (let i = 0; i < arr.length; i++) {
//     let name = arr[i];      
//     let len = name.length;  
//     result[name] = len;
//   }
//   return result;
// }
// console.log(length(names));

//5. Shunday object berilganki, uning kalitlari mahsulotlardan va qiymatlari esa ularning narxlaridan tuzilgan. Barcha mahsulot qancha turishini toping. (Object.values())
// Input: {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000}
// Output: 50000
// const products = {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000}
// function totalprice(arr) {
//   const prices = Object.values(arr);
//   let total = 0;
//   prices.forEach(price => {
//     total += price;
//   });
//   return total;
// }
// console.log(totalprice(products));

//6
// const input = {abc: 1, 123: 2, d: 5};
// function Inputt(arr) {
//   const keys = Object.keys(arr);
//   return keys.every(key => {
//     return isNaN(key); 
//   });
// }
// console.log(Inputt(input)); 
