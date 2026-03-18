// // 1. Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing. (map, filter) 5 baho - (85 - 100) 4 baho - (70 - 85) 3 baho – (60 - 70)
// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];
// function getbygrade(students, baho) {
//   return students
//  .map(student => {
//       let currentGrade;
      
//       if (student.percent >= 85 && student.percent <= 100) {
//         currentGrade = 5;
//       } else if (student.percent >= 70 && student.percent < 85) {
//         currentGrade = 4;
//       } else if (student.percent >= 60 && student.percent < 70) {
//         currentGrade = 3;
//       }
//       return { ...student, grade: currentGrade };
//     })
//     .filter(student => student.grade === baho)
//     .map(student => student.name);
// }
// console.log(getbygrade(students, 2)); 


// 2. Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating. (reduce) Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit']; Output: { dog: 2, chicken: 3, cat: 1, rabbit: 1 }
// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const animal_count = animals.reduce((raqam, animal) => {
//   if (raqam[animal]) {
//     raqam[animal] += 1;
//   } 
//   else {
//     raqam[animal] = 1;
//   }
//   return raqam;
// }, {}); 
// console.log(animal_count);

// 3. Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map) Input: [1, 2, 3, 4, 5] Output: [1, 4, 9, 16, 25]
// const number = [1, 2, 3, 4, 5];
// const raqamlar = number.map(num => num * num);
// console.log(raqamlar); 

//4. Massivdagi musbat sonlar yig’indisini hisoblang. (filter va reduce) Input: [ 1, -4, 12, 0, -3, 29, -150] Output: 42
// const number = [1, -4, 12, 0, -3, 29, -150];
// const Sum = number
//   .filter(num => num > 0)
//   .reduce((total, num) => total + num, 0);
// console.log(Sum); 

//5. Satrdagi so’zlarning bosh harflarini oling. (split, map, join) Input: 'George Raymond Richard Martin' Output: 'GRRM'
// const full_name = 'Alex King Junior the third';
// const inf = full_name
//   .split(' ')            
//   .map(word => word[0])  
//   .join('');            
// console.log(inf); 

//6. Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort). Input: [ {name: 'John', age: 13}, {name: 'Mark', age: 56}, {name: 'Rachel', age: 45}, {name: 'Nate', age: 67}, {name: 'Jeniffer', age: 65} ]; Output: 54
// const users = [
//   { name: 'John', age: 13 },
//   { name: 'Mark', age: 56 },
//   { name: 'Rachel', age: 45 },
//   { name: 'Nate', age: 67 },
//   { name: 'Jeniffer', age: 65 }
// ];
// function agedifference(people) {
//   const byage = [...people].sort((a, b) => a.age - b.age);
//   const youngest = byage[0].age;
//   const oldest = byagege[byage.length - 1].age;
//   return oldest - youngest;
// }
// console.log(agedifference(users)); 

//7. N ta elementdan iborat massiv berilgan. Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)
//couldnt do it()

//8. N ta elementdan iborat massiv berilgan. Massiv elementlari orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur tuzilsin. Faqat birinchi uchragani qoldirilsin. (reduce)
// const number = [1, 2, 2, 3, 4, 4, 5, 1, 6];
// const unique = number.reduce((raqam, current) => {
//   if (!raqam.includes(current)d) {
//     raqam.push(current);
//   }
//   return raqam;
// }, []);
// console.log(unique); 

// /9. Products massivini id, name, price, rating va discount bo'yicha sortlash; (sort)
// const products = [
//   { id: 3, name: "Laptop", price: 1200, rating: 4.5, discount: 10 },
//   { id: 5, name: "Phone", price: 800, rating: 4.8, discount: 15 },
//   { id: 1, name: "Monitor", price: 300, rating: 4.2, discount: 5 },
//   { id: 1, name: "Keyboard", price: 100, rating: 4.0, discount: 20 },
// ];


//10. Rating bo'yicha eng kuchli product topilsin. (sort)
// const product = [
//   { id: 3, name: "Laptop", price: 1200, rating: 4.5, discount: 10 },
//   { id: 1, name: "Phone", price: 800, rating: 4.8, discount: 15 },
//   { id: 4, name: "Monior", price: 300, rating: 4.2, discount: 5 },
//   { id: 2, name: "Keyboard", price: 100, rating: 4.0, discount: 20 },
// ];
// const sortedByRating = [...products].sort((a,b) => b.rating - a.rating);
// const topProduct = sortedByRating[0];
// console.log(topproduct);


//7`
  // let numbers = [1,2,3,4,5,6,7,8,9]     
  // let juft = numbers.filter(item => item % 2 ==0)
  // let toq = numbers.filter(item => item % 2 ==1)
  // console.log(juft)
  // console.log(toq)

//   let products = [ { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20, }, { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10, }, { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40, }, { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30, }, { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30, }, ]; 
// let ids = products.map(item => products.id);
// let name = products.map(item => products.name);
// let price = products.map(item => products.price);
// let rating = products.map(item => products.rating);
// let discount = products.map(item => products.discount);
// console.log(ids)
// console.log(name)
// console.log(price)
// console.log(rating)
// console.log(discount )




//11. Narxi eng past bo'lgan product topilsin. (sort)

// let products = [ { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20, }, { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10, }, { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40, }, { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30, }, { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30, }, ]; 
// products.sort((a,b) => a.price - b.price);
// let lowestprice = products[0];
// console.log(lowestprice)

//12. Barcha products narxlari yig'indisi topilsin. (reduce)
// let products = [ { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20, }, { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10, }, { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40, }, { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30, }, { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30, }, ]; 
// let barchanarx = products.reduce((acc, curr) => {
//   return acc + curr.price
// }, 0);
// console.log(barchanarx)

//13. Faqatgina products nomlaridangina iborat bo'lgan massiv qaytaring. (map)
// let products = [ { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20, }, { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10, }, { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40, }, { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30, }, { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30, }, ]; 
// console.log(products.map(product => product.name))

//14. Id si 5 bo'lgan elementni nomini qaytaruvchi dastur yozing. (find)
// let products = [ { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20, }, { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10, }, { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40, }, { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30, }, { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30, }, ]; 
// let result = products.find(product => product.id === 5);
// console.log(result.name)

//15. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
// let products = [ { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20, }, { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10, }, { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40, }, { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30, }, { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30, }, ]; 
// let delet = products.filter(product => product.id !== 4);
// console.log(delet)

// /16. Berilgan satrni faqatgina harflardan iborat ekanligiga tekshiring (split, every)
// let str = "Matrix is the one that is controlling you"
// let isMatrix = str.split('').every()

//17. Massiv truthy va falsy elementlardan tuzilgan. O’sha massivdagi truthy va falsy elementlarni alohida massivlarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)
// Abdulaziz Programmer
// Input: [false, 1, 10, "", null, "abdulaziz", 1.13, 0] Output: {truthy: [1, 10, "abdulaziz", 1.13], falsy: [false, "", null, 0]}

// let input = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
// function getTruthyFalsy(arr) {
//   return {
//     truthy: arr.filter(val => val), 
//     falsy: arr.filter(val => !val)
//   };
// }
// console.log(getTruthyFalsy(input)) 

//18. Satr berilgan. Satrdagi so'zlar uzunligidan iborat bo'lgan massiv qaytaring. (split, map) Input: "Men Abdulaziz Programmerman" Outpu: [3, 9, 13]
// let satr = "matrix is in the the same room we are sitting"
// function wordlengths(str){
//   return str.split(" ").map(word => word.length);
// }
// console.log(wordlengths(satr))

// let input = "Is this the right way to Silent Hill?";
// let check = input.split('').some(char => char === " ");
// console.log(check)

//20. Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat massiv qaytaring. (Object.entries, map, join) Input: {a: 2, b: 5, c: 7} Output: ['a2', 'b5', 'c7']
// let input = {a: 2, b: 5, c: 7};
// let output = Object.entries(input).map(pair => pair.join(''))
// console.log(output)