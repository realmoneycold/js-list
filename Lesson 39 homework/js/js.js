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
//   if (!raqam.includes(current)) {
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
