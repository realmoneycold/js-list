//DARSDA ISHLANISHI KERAK BO’LGAN MASALALAR
// if1. Butun son berilgan. Agar berilgan son musbat bo`lsa, 1 ga oshiring, aks holda 2 ga kamaytiring. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.

// let a = 1
// if (a > 0) {
//     a ++
// } 
// else {
//     a -= 2
// }
// console.log(a)

//if2. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat va manfiy son borligini aniqlovchi programma tuzilsin.
// let a = 1, b = 2, c = -3
// natija = 0
// if (a > 0) {
//     natija ++
// }
// if (b > 0) {
//     natija ++
// }
// if (c > 0) {
//     natija ++
// }
// console.log(`Musbatlar: ${natija}`)
// console.log(`Manfiylar: ${3 - natija}`)

//if3. Uchta son berilgan. Shu sonlarni avval kichigini keyin kattasini ekranga chiqaruvchi programma tuzilsin.
// let a = 1, b = 2, c = -3
// if (a < b && a < c) {
//     console.log(`Kichigi: ${a}`)
// }
// else if (b < a && b < c) {
//     console.log(`Kichigi: ${b}`)
// }
// else {
//     console.log(`Kichigi: ${c}`)
// }
// if (a > b && a > c) {
//     console.log(`Kattasi: ${a}`)
// } 
// else if (b > a && b > c) {
//     console.log(`Kattasi: ${b}`)
// }
// else {
//     console.log(`Kattasi: ${c}`)
// }

//if4. Uchta butun son berilgan. Shu sonlarni ikkitasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.
// let a = 1, b = 2, c = 1
// if (a == b && a != c) {
//     console.log(`${a} va ${b} sonlari teng, va ${c} soni teng emas`)

// }
// else if ( a == c && a != b) {
//     console.log(`${a} va ${c} sonlari teng va ${a} raqami ${b} ga teng emas`)
// }
// else if (b == c && b != a) {
//     console.log(`${b} va ${c} sonlari teng va ${b} raqami ${a} ga teng emas`)
// }
// else {
//     console.log(`Hech qaysi raqam bir biriga teng emas!`)
// }

//if5. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.
// agar x < -2 yoki x > 2 bo’lsa 2 * x
// aks holda -3 * x;

// x = 3
// if (x < -2 || x > 2) {
//     console.log(2 * x)
// }
// else {
//     console.log(-3 * x)
// }

// if6. Butun son berilgan. Berilgan sonni "musbat toq", "musbat juft", "nol", “manfiy juft”, “manfiy toq” ekranga yozadigan programma tuzilsin.
// let a = 2
// if (a > 0 && a % 2 == 1) {
//     console.log(`Bu son Musbat toq`)
// }
// else if (a > 0 && a % 2 == 0) {
//     console.log(`Bu son Musbat juft`)
// }
// else if (a == 0) {
//     console.log(`Bu son Nol`)
// }
// else if (a < 0 && a % 2 == 0 ) {
//     console.log(`Bu son Manfiy juft`)
// }
// else if (a < 0 && a % 2 == 1) {
//     console.log(`Bu son Manfiy toq`)
// }

// Uyga Vazifa
//if1. Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshirilsin, aks holda o`zgartirilmasin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.
// let a = 1
// if ( a > 0) {
//     a ++
// }
// console.log(a)

//if2. Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshiring, agar manfiy bo`lsa 2 ga kamaytiring. Agar 0 ga teng bo`lsa, 10 ni o`zlashtirsin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.
// let a = 1
// if (a > 0) {
//     a ++
// }
// else if (a < 0) {
//     a -= 2
// }
// else {
//     a = 10
// }
// console.log(a)

//if3. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzilsin.
// let a = -1, b = -2, c = -3
// natija = 0
// if (a > 0) {
//     natija ++
// }
// if (b > 0) {
//     natija ++
// }
// if (c > 0) {
//     natija ++
// }
// console.log(`Musbatlar: ${natija}`)
// console.log(`Manfiylar: ${3 - natija}`)

// /if4. Ikkita butun son berilgan. Shu sonlarning kattasini aniqlovchi programma tuzilsin.
// let a = 1, b = 2
// if (a > b) {
//     console.log(`Kattasi: ${a}`)
// }
// else if (b > a) {
//     console.log(`Kattasi: ${b}`)
// }
// else {
//     console.log(`Bu sonlar teng!`)
// }

// if5. Ikkita butun son berilgan. Shu sonlarning kichigini tartib raqamini aniqlovchi programma tuzilsin.
// let a = 1, b = 2
// if (a < b) {
//     console.log(`kichik son: ${a}`)
// }
// else if (b < a) {
//     console.log(`kichik son: ${b}`)
// }
// else {
//     console.log(`Ikkala son teng`)
// }

//if6. Ikkita butun son berilgan. Shu sonlarning avval kattasini keyin kichigini ekranga chiqaruvchi programma tuzilsin.
// let a = 1, b = 2
// if (a < b) {
//     console.log(`Katta son: ${b} va kichik son: ${a}`)
// }
// else if (b < a) {
//     console.log(`Katta son: ${a} va kichik son: ${b}`)
// }
// else {
//     console.log(`Ikkala son teng`)
// }

//if7. A va B haqiqiy sonlari beringan. Shu sonlarni shunday o'zgartirish kerakki, A son kichik B son katta bo`lsin. A va B ning qiymati ekranga chiqarilsin.
// let A = 1, B = 2
// if (A > B) {
//     let vaqtinchalik = A
//     A = B
//     B = vaqtinchalik
//     console.log(`A: ${A} va B: ${B}`)
// }
// else if (B > A) {
//     let vaqtinchalik = B
//     B = A
//     A = vaqtinchalik
//     console.log(`A: ${A} va B: ${B}`)
// }

//if8. A, B va C haqiqiy sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B o`zgaruvchilari ularning yig'indisini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.
// let a = 1, b = 2
// if (a == b) {
//     console.log(a + b)
// }
// else {
//     console.log(a + b * 0)
// }
// console.log(`a ${a}ga teng
// b ${b} ga teng `)

//if9. A va B butun sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B bu sonlarning kattasini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.
// let a = 3, b = 2
// if ( a != b) {
//     if (a>b) {
//         console.log(a)
//     }
//     else {
//         console.log(b)
//     }
// }
// else {    console.log(0)
// }

//if10. Uchta son berilgan. Shu sonlarni kichigini aniqlovchi programma tuzilsin.
// let a = 1, b = 2, c = 3
// if (a < b && a < c) {
//     console.log(`Kichigi: ${a}`)
// }
// else if (b < a && b < c) {
//     console.log(`Kichigi: ${b}`)
// }
// else {
//     console.log(`Kichigi: ${c}`)
// }

//if11. Uchta son berilgan. Shu sonlarni o`ratachasi (ya'ni katta va kichik sonlar orasidagi son) ni aniqlovchi programma tuzilsin.
// let a = 1, b = 2, c = 3
// if ((b > a && a > c) || (c > a && a > b)) {
//     console.log(`O'rtacha son: ${a}`)
// }
// else if ((a > b && b > c)|| (c > b && b > a)) {
//     console.log(`O'rtacha son: ${b}`)
// }
// else if ((a > c && c > b) || (b > c && c > a)) {
//     console.log(`O'rtacha son: ${c}`)
// }

//if12. Uchta son berilgan. Shu sonlarning yig'indisi eng katta bo'ladigan ikkitasini ekranga chiqaruvchi programma tuzilsin.
// let a = 1, b = 2, c = 3
// if (a + b > a + c && a + b > b + c) {
//     console.log(`Eng katta yig'indi: a + b = ${a + b}`)
// }
// else if (a + c > a + b && a + c > b + c) {
//     console.log(`Eng katta yigindi: a + c = ${a + c}`)
// }
// else {
//     console.log(`Eng katta yigindi: b + c = ${b + c}`)
// }


//if13. A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o`sish tartibida berilgan bo`lsa, sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqarilsin.
// let a = 1, b = 2, c = 3
// if (a < b && b < c) {
//     a *= 2
//     b *= 2
//     c *= 2
// }
// else {
//     a *= -1
//     b *= -1
//     c *= -1
// }
// console.log(`a = ${a}, b = ${b}, c = ${c}`)

//if14. A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o'sish yoki kamayish tartibida berilgan bo`lsa, sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqarilsin
// let a = 1, b = 2, c = 3
// if ((a < b && b < c) || (c < b && b < a)) {
//     a *= 2
//     b *= 2  
//     c *= 2
// }
// else {
//     a *= -1
//     b *= -1
//     c *= -1
// }
// console.log(`a = ${a}, b = ${b}, c = ${c}`)

// if15. To`rtta butun son berilgan. Shu sonlarni uchtasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.
// let a = 1, b = 1, c= 1, d = 4
// if (a == b && a == c) {
//     console.log(`d soni teng emas: ${d}`)
// }
// else if (b == a && b == d) {
//     console.log(`c soni teng emas: ${c}`)
// }
// else if (c == a && c == d) {
//     console.log(`b soni teng emas: ${b}`)
// }
// else if (d == a && d == b) {
//     console.log(`c soni teng emas: ${c}`)
// }
// else {
//     console.log(`Hech qaysi son bir biriga teng emas`)
// }

// /if16. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.
// agar x≤ 0 bo’lsa -x;
// agar 0<x<2; x^2
// agar x≥2 bo’lsa 4;
// let x = 3
// if (x <= 0) {
//     c *= -1
// }
// else if (0<x && x<2) {
//     x **=2
// }
// else if(x >= 2) {
//     x = 4
// }
// console.log(x)

//if17. Yil berilgan (musbat butun son). Berilgan yilda nechta kun borligini aniqlovchi programma tuzilsin. Kabisa yilida 366 kun bor, kabisa bo'lmagan yilda 365 kun bor. Kabisa yil deb 4 ga karrali yillarga aytiladi. Lekin 100 ga karrali yillar ichida faqat 400 ga karrali bo'lganlari kabisa yil hisoblanadi. Masalan 300, 1300 va 1900 kabisa yili emas. 1200 va 2000 kabisa yili.
// let yil =2024
// if (yil % 4 == 0 && yil % 100 != 0 || yil % 400 == 0) {
//     console.log(`Kabisa yili, 366 kun bor`)
// }
// else {
//     console.log(`Kabisa yili emas, 365 kun bor`)
// }

//if18. 1-999 oraliqdagi sonlar berilgan. Berilgan sonni "ikki xonali juft son", "uch xonali toq son" va x.k. ekranga yozadigan programma tuzilsin.
// let a = 123
// if (a >= 1 && a <= 999) {
//     if (a % 2 == 0 && a >= 10 && a < 100) {
//         console.log(`Bu son ikki xonali juft son`)
//     }
//     else if (a % 2 == 1 && a >= 100 && a < 1000) {
//         console.log(`Bu son uch xonali toq son`)
//     }
//     else if (a % 2 == 0 && a >= 100 && a < 1000) {
//         console.log(`Bu son uch xonali juft son`)
//     }
//     else if (a % 2 == 1 && a >= 10 && a < 100) {
//         console.log(`Bu son ikki xonali toq son`)
//     }
//     else if (a % 2 == 0 && a < 10) {
//         console.log(`Bu son bir xonali juft son`)
//     }
//     else if (a % 2 == 1 && a < 10) {
//         console.log(`Bu son bir xonali toq son`)
//     }
// }
// else {
//     console.log(`Bu son 1-999 oraliqda emas!`)
// }
