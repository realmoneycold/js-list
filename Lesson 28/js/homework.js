//For1. k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.
// n = 10
// for (let k= 5; k<=n; k++){
//     console.log(k)
// }

//For2. Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, …, 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.
// price = 12
// for (let i = 0.1; i <= 1; i += 0.1) {
//     console.log(+price * i)
// }

//For3. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = n^2 +(n+1)^2+(n+2)^2 + ... +(2*n)^2

// let n = 5;
// let sum = 0;
// for (let i = n; i <= 2 * n; i++) {
//     sum += i ** 2;
// }
// console.log(sum);

 //For4. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// 1^N+2^(N-1) + ...+ N^1
// Input: N = 5;
// 1 ^ 5 + 2 ^ 4 + 3 ^ 3 + 4 ^ 2 + 5 ^ 1
// Output: 65
// let N = 5;
// let sum = 0;
// for (let i = 1; i <= N; i++) {
//     sum += i ** (N - i + 1);
// }
// console.log(sum);

//For5. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda har bir son o'zining qiymaticha chiqarilsin. Ya'ni 3 soni 3 marta chiqariladi.
// for (let A = 2, B = 20; A <= B; A++ ) {
//     console.log(A)
//     // couldnt figure out how to print last number number of times as its equal to     
// }

//For6. Sonning bo’luvchilarini topish;
// let num = 100
// for (let i =2; i <= num; i++) {
//     if(num % i === 0) {
//         console.log(i)
//     }
// }

// For7. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).
// let a = 2, b = 10
// let count = 0;
// for (let i = a; i <= b; i++) {
//     console.log(i)
// }

// /For8. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).
// var a = 2, b = 10;
// var b = 10-1
// for (let i =a; i <= b; b--) {
//     i = a+1
//     console.log(b)
// } 

//For9. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.
// price = 12
// for (let i = 1; i <= 10; i += 1) {
//     console.log(+price * i)
// } 

//For10. Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.
// price = 12
// for (let i = 1.0; i <= 2.0; i += 0.1) {
//     console.log(+price * i)
// }

// While1. N va K musbat sonlari berilgan. Faqat ayirish va qo'shish amallarini ishlatib N sonini K soniga bo'lgandagi qoldiq va butun qismini aniqlovchi programma tuzilsin.

// let N = 10, K = 3;
// while (N >= K) {
//     N -= K;
//     console.log(N)
// }

//While2. 2 sonining qandaydir darajasini bildiruvchi n butun soni berilgan (n > 0). n = 2^k ni aniqlovchi programma tuzilsin.
// Input: 128
// Output: 7
// let n = 128; 
// let k = 0;
// let temp = n;
// while (temp > 1) {
//     temp = temp / 2; 
//     k++;
// }
// console.log(k);

//While3. A va B butun musbat sonlari berilgan (A> B). A usunlikdagi kesmada maksimal darajada B kesma joylashtirilgan. A kesmaning bo'sh qismini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang
// let A = 10, B = 1;
// while (A >= B) {
//     A -= B;
//     console.log(A)
// }

//While4. A va B butun musbat sonlari berilgan (A > B). A usunlikdagi kesmada B kesmadan nechta joylashtirish mumkinligini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.
// let A = 12;
// let B = 3;
// let count = 0;          
// while (A >= B) {
//     A = A - B;
//     A = A - 1   
//     count = count + 1;   
// }
// console.log(count);

//While5. n butun soni berilgan (n > 0). Agar n soni 3 ning darajasi bo'lsa "3 - ning darajasi", aks xolda "3 - ning darajasi emas” degan natija chiqaruvchi programma tuzilsin. Qoldiqli bo'lish va bo'lish amallarini ishlatmang.
// let n = 27;
// let num = n;
// while (num > 1) {
//     let K = num;
//     let J= 0;
//     let R = 0;
//     while (K >= 3) {
//         K -= 3;
//         J++;
//     }
//     R = K;
//     if (R !== 0) {
//         console.log("3 - ning darajasi emas");
//         num = 0; 
//         break;
//     }
//     num = J;
// } 
// if (num === 1) {
//     console.log("3 - ning darajasi");
// } else if (num !== 0) {
//     console.log("3 - ning darajasi emas");
// }

//While6. n va m butun musbat sonlari berilgan (n > m). n sonini m soniga bo'lib butun va qoldiq qismlarini bo'lish va qoldiqni olish amallarini ishlatmasdan topuvchi programma tuzilsin.
// let n = 10;
// let m = 3;
// let count = 0;
// while (n >= m) {
//     n -= m;
//     count++;
// }

//While7. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin.
// let n = 12345;
// let rever_num = 0;
// while (n > 0) {
//     let digit_nb = n % 10; 
//     rever_num = rever_num * 10 + digit_nb; 
//     n = Math.floor(n / 10); 
// }
// console.log(rever_num);

//While8. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlari yig'indisini va raqamlari sonini chiqaruvchi programma tuzilsin.
// let n = 12345;
// let sum = 0;
// let count = 0;
// while (n > 0) {
//     let digit = n % 10; 
//     sum += digit; 
//     count++; 
//     n = Math.floor(n / 10); 
// }
// console.log(sum, count);

//While9. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida 2 raqami bor-yo'qligini aniqlovchi programma tuzilsin.
// let n = 12345;
// let hasTwo = false;
// while (n > 0) {
//     let digit = n % 10;
//     if (digit === 2) {
//         hasTwo = true;
//         break;
//     }
//     n = Math.floor(n / 10);
// }
// if (hasTwo) {
//     console.log("2 raqami mavjud");
// } else {
//     console.log("2 raqami mavjud emas");
// }

//While10. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida toq raqamlar bor-yo'qligini aniqlovchi programma tuzilsin.
// let n = 12345;
// let hasOddDigit = false;
// while (n > 0) {
//     let digit = n % 10;
//     if (digit % 2 !== 0) {
//         hasOddDigit = true;
//         break;
//     }
//     n = Math.floor(n / 10);
// }
// if (hasOddDigit) {
//     console.log("Toq raqamlar mavjud");
// } else {
//     console.log("Toq raqamlar mavjud emas");
// }
