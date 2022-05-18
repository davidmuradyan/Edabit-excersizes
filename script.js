// let range = {
//     from:1,
//     to:8
// }
//
// range[Symbol.iterator] = function () {
//     return {
//         start:this.from,
//         end:this.to,
//         next() {
//             if (this.start <= this.end) {
//                 return {done:false, value:this.start++};
//             } else {
//                 return {done:true};
//             }
//         }
//     }
// }
//
// for (let n of range) {
//     console.log(n);
// }



// let message = "Mubashir Hassan";
// function clockwiseCipher(message) {
//     let size = Math.ceil(Math.sqrt(message.length));
//     let arr = message.split('');
//     let square = [];
//     for (let i = 0; i < size; i++) {
//         square[i] = [];
//         for (let j = 0; j < size; j++) {
//
//         }
//     }
//
//
//     console.log(arr[0]);
//     return square;
// }
//
// console.log(clockwiseCipher(message));




// function shiftToLeft(x, y) {
//     if (y === 1) {
//         return x * 2;
//     } else if (y === 0) {
//         return x;
//     } else {
//         return 2 * shiftToLeft(x, y-1);
//     }
// }
//
//
// console.log(shiftToLeft(57,0));


// function isFactorial(number) {
//     let n = 1;
//     let res = 1;
//     while (res < number) {
//         res *= n;
//         n += 1;
//     }
//     return res === number;
// }
//
// console.log(isFactorial(24));




// const products = [
//     { number: 1, price: 100, name: 'Orange juice' },
//     { number: 2, price: 200, name: 'Soda' },
//     { number: 3, price: 150, name: 'Chocolate snack' },
//     { number: 4, price: 250, name: 'Cookies' },
//     { number: 5, price: 180, name: 'Gummy bears' },
//     { number: 6, price: 500, name: 'Condoms' },
//     { number: 7, price: 120, name: 'Crackers' },
//     { number: 8, price: 220, name: 'Potato chips' },
//     { number: 9, price: 80,  name: 'Small snack' },
// ];

// function vendingMachine(products, money, productNumber) {
//     let product = products.filter((item) => item.number === productNumber);
//     if (product.length === 0) {
//         return 'Enter a valid product number';
//     } else if (money < product[0].price) {
//         return 'Not enough money for this product';
//     } else {
//         let moneyChange = money - product[0].price;
//         if (moneyChange === 0) {
//             return {
//                 product:product[0].name,
//                 change:[]
//             }
//         } else {
//             let coins = [500,200,100,50,20,10];
//             let changeArr = [];
//             while (moneyChange !== 0) {
//                 changeArr.push(coins.find((item) => {
//                     if (moneyChange >= item) {
//                         moneyChange -= item;
//                         return item;
//                     }
//                 }));
//             }
//             return {
//                 product:product[0].name,
//                 change:changeArr
//             }
//         }
//     }
// }

// console.log(vendingMachine(products, 500, 8));




// let item = {
//     product: 'Milk',
//     price: 1.2,
//     containers: [
//         { type: 'bottle', deposit: 0.15, liters: 1.5 },
//         { type: 'can', deposit: 0.1, liters: 0.33 },
//         { type: 'carton', deposit: null, liters: 1 }
//     ]
// }
//
// function migrateProduct(oldProduct) {
//     const newProduct = {};
//     for (let key in oldProduct) {
//         if (Array.isArray(oldProduct[key])) {
//             newProduct[key] = [];
//             for (let i = 0; i < oldProduct[key].length; i++) {
//                 newProduct[key][i] = {};
//                 Object.assign(newProduct[key][i], oldProduct[key][i]);
//             }
//         } else {
//             newProduct[key] = oldProduct[key];
//         }
//     }
//     newProduct.price *= 1.15
//     newProduct.containers = newProduct.containers.map((container => {
//         if (container.type === 'bottle') {
//             container.deposit = 0.20
//         }
//         return container;
//     }))
//
//     return {oldProduct, newProduct}
// }
//
// console.log(migrateProduct(item));




// function getLength(arr) {
//     return arr.flat(Infinity).length;
// }
//
// let arr1 = [1,[1,[2]]];
// console.log(getLength(arr1));





// function duplicateNums(nums) {
//     nums = nums.sort((a, b) => a - b);
//     let duplicates = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 if (!duplicates.includes(nums[j])) {
//                     duplicates.push(nums[j]);
//                 }
//             }
//         }
//     }
//     if (duplicates.length === 0) {
//         return null;
//     } else {
//         return duplicates;
//     }
// }
//
// let arr = [81, 72, 43, 72, 81, 99, 99, 100, 12, 54];
// console.log(duplicateNums(arr));





// function missing(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return arr1[i];
//         }
//     }
// }
//
// let arr1 = ["Jane", "is", "pretty", "ugly"];
// let arr2 = ["Jane", "is", "pretty"];
// console.log(missing(arr1, arr2))




// function canConcatenate(arr, target) {
//     arr = arr.flat(Infinity);
//     let flag;
//     if (arr.length === target.length) {
//         for (let i = 0; i < arr.length; i++) {
//             flag = arr[i] === target[i];
//         }
//     } else {
//         flag = false;
//     }
//     return flag;
// }
//
// console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]))
// console.log(canConcatenate([[1, 2], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]))


// let a = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5,
//     f:6,
//     g:7,
//     h:8,
//     i:9,
//     j:10,
//     k:11,
//     l:12,
//     m:13,
//     n:14,
//     o:15,
//     p:16,
//     q:17,
//     r:18,
//     s:19,
//     t:20,
//     u:21,
//     v:22,
//     w:23,
//     x:24,
//     y:25,
//     z:26
// };
//
// function digitalCipher(message, key) {
//     // debugger
//     let messageCode = [];
//     let keyCode = [];
//     for (let char of (key + '')) {
//         keyCode.push(char);
//     }
//
//     for (let letter of message) {
//         messageCode.push(a[`${letter}`]);
//     }
//
//     let keyCodeLength = keyCode.length
//     for (let i = 0; i < messageCode.length - keyCodeLength; i++) {
//         keyCode.push(keyCode[i % keyCode.length]);
//     }
//
//     for (let i = 0; i < messageCode.length; i++) {
//         messageCode[i] += +keyCode[i];
//     }
//     console.log(keyCode);
//
//     return messageCode;
// }
//
// console.log(digitalCipher('scout', 1939));
// console.log(digitalCipher('masterpiece', 1939));



// function rootDigit(number) {
//     let str = number.toString();
//     let sum = 0;
//     for (let num of str) {
//         if ((sum + +num) >= 10) {
//             return sum;
//         } else {
//             sum += +num;
//         }
//     }
//     return sum;
// }

// function rootDigit(number) {
//     let numbers = number.toString().split('');
//     if ((+numbers[0] + +numbers[1]) < 10) {
//         let temp = (+numbers[0] + +numbers[1]).toString();
//         numbers = numbers.splice(2, numbers.length - 2, temp);
//         numbers.unshift(temp);
//         let newNumber = +(numbers.join(''));
//         return rootDigit(newNumber);
//     } else {
//         return numbers[0];
//     }
// }

// function rootDigit(number) {
//     if (number < 10) {
//         return number;
//     } else {
//         let result = number.toString().split('').reduce((sum, item) => sum + +item, 0);
//         return rootDigit(result);
//     }
// }

// console.log(rootDigit(123));
// console.log(rootDigit(123999));
// console.log(rootDigit(9123999));






// function findAndRemove(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'object' && obj[key] != null) {
//             for (let nestedKey in obj[key]) {
//                 if (isNaN(obj[key][nestedKey])) {
//                     delete obj[key][nestedKey];
//                 } else {
//                     obj[key][nestedKey] = +obj[key][nestedKey];
//                 }
//             }
//         } else {
//             if (isNaN(obj[key])) {
//                 delete obj[key];
//             } else {
//                 obj[key] = +obj[key];
//             }
//         }
//     }
//     return obj;
// }
//
// const random = Math.random()
// console.log(findAndRemove({
//     bedroom: {
//         slippers: "10000",
//         piano: '750',
//         call: "vet",
//         travel: "world",
//     },
// }));
// console.log(findAndRemove({
//     kitchen: {
//         ["gold spoons"]: "900",
//         piano: "550",
//         notes: 'randomString',
//     },
//     cellar: {
//         reminder: "dog",
//         bottle: "750",
//     },
// }));
// console.log(findAndRemove({attic: { node: "js", },}));
// console.log(findAndRemove({
//     bedroom: {
//         slippers: "10000",
//         pen: "570",
//         call: "v0g89t7t",
//         travel: "wo1a3d5d",
//     },
// }));
// console.log(findAndRemove({
//     bedroom: {
//         guitar: "900000",
//         pen: "570",
//         call: `${'randomString'} ${'random' * 100000}`,
//         travel: "wo245t61d",
//     },
// }));






// function getNotesDistribution(students) {
//     let notes = [1, 2, 3, 4, 5];
//     let allNotes = [];
//     for (let i = 0; i < students.length; i++) {
//         allNotes = allNotes.concat(students[i].notes);
//     }
//     return allNotes.reduce((obj, note) => {
//         if (notes.includes(note)) {
//             if (obj.hasOwnProperty(note)) {
//                 obj[note] += 1;
//             } else {
//                 obj[note] = 1;
//             }
//         }
//         return obj;
//     }, {});
// }
//
// console.log(getNotesDistribution([
//     {
//         "name": "Steve",
//         "notes": [5, 5, 3, -1, 6]
//     },
//     {
//         "name": "John",
//         "notes": [3, 2, 5, 0, -3]
//     },
//     {
//         "name": "Steve",
//         "notes": [5, 5, 3, -1, 6]
//     },
// ]));







// function sortContacts(names, sort) {
//     if (!names) {
//         return [];
//     } else {
//         let lastNames = [];
//         for (let name of names) {
//             name = name.split(' ');
//             lastNames.push(name[1]);
//         }
//         lastNames.sort();
//         if (sort.toUpperCase() === 'DESC') {
//             lastNames.reverse();
//         }
//         let sorted = [];
//         for (let lastName of lastNames) {
//             names.map((fullName) => {
//                 if (fullName.includes(lastName)) {
//                     sorted.push(fullName);
//                 }
//             })
//         }
//         return sorted;
//     }
// }

// console.log(sortContacts(null, 'DESC'));
// console.log(sortContacts(undefined, 'DESC'));
// console.log(sortContacts([
//     "John Locke",
//     "Thomas Aquinas",
//     "David Hume",
//     "Rene Descartes"
// ], 'ASC'));
// console.log(sortContacts([
//     "John Locke",
//     "Thomas Aquinas",
//     "David Hume",
//     "Rene Descartes"
// ], 'DESC'));







// function awardPrizes(names) {
//     let points = Object.values(names).sort(function(a, b) {return b-a});
//     for (let name in names) {
//         if (names[name] === points[0]) {
//             names[name] = 'Gold';
//         } else if (names[name] === points[1]) {
//             names[name] = 'Silver';
//         } else if (names[name] === points[2]) {
//             names[name] = 'Bronze';
//         } else {
//             names[name] = 'Participation';
//         }
//     }
//     return names;
// }
//
//
// console.log(awardPrizes({
//     'Joshua' : 45,
//     'Alex' : 39,
//     'Eric' : 43
// }));
// console.log(awardPrizes({
//     'Person A' : 1,
//     'Person B' : 2,
//     'Person C' : 3,
//     'Person D' : 4,
//     'Person E' : 102
// }));
// console.log(awardPrizes({
//     'Mario' : 99,
//     'Luigi' : 100,
//     'Yoshi' : 299,
//     'Toad' : 2
// }));



// function clockwiseCipher(message) {
//     let len = Math.ceil(Math.sqrt(message.length));
//     let res = [];
//     for (let i = 0; i < len; i++) {
//         res[i] = [];
//         for (let j = 0; j < len; j++) {
//             res[i][j] = ' ';
//         }
//     }
//     let flag = 1;
//     let flag1 = 2;
//     let x = 0;
//     let i = 0;
//     let j = 0;
//     while (x < message.length) {
//         switch (flag) {
//             case 1:
//                 res[i][j] = message[x];
//                 break;
//             case 2:
//                 res[j][len - i - 1] = message[x];
//                 break;
//             case 3:
//                 res[len - i - 1][len - j - 1] = message[x];
//                 break;
//             case 4:
//                 res[len - j - 1][i] = message[x];
//                 break;
//         }
//         x += 1;
//         flag += 1;
//         if (flag === 5) {
//             flag = 1;
//             if (j === len - flag1) {
//                 flag1 += 1;
//                 i += 1;
//                 j = i;
//             } else {
//                 j++;
//             }
//         }
//     }
//     return res.map((item) => item.join('')).join('');
// }
//
// console.log(clockwiseCipher("Mubashir Hassan"));
// console.log(clockwiseCipher("Matt MacPherson"));
// console.log(clockwiseCipher("Edabit is amazing"));
// console.log(clockwiseCipher("Started from the bottom now we're here"));
// console.log(clockwiseCipher("I am so clever that sometimes I don't understand a single word of what I'm saying"));
// console.log(clockwiseCipher("Even though I walk through the darkest valley, I will fear no evil, for you are with me"));
// console.log(clockwiseCipher("If life seems jolly rotten there's something you've forgotten, and that's to laugh and smile and dance and sing. When you're feeling in the dumps, don't be silly chumps. Just purse your lips and whistle, that's the thing!"));





// function switchGravityOn(arr) {
//     let newArr = [];
//     let result = [];
//     for (let i = 0; i < arr[0].length; i++) {
//         let temp = [];
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j][i] === "#") {
//                 temp.push(arr[j][i]);
//             } else {
//                 temp.unshift(arr[j][i]);
//             }
//         }
//         newArr.push(temp);
//     }
//     for (let i = 0; i < newArr[0].length; i++) {
//         let temp = [];
//         for (let j = 0; j < newArr.length; j++) {
//             temp.push(newArr[j][i]);
//         }
//         result.push(temp);
//     }
//     return result;
// }
//
// console.log(switchGravityOn([
//     ["-", "#", "#", "-"],
//     ["-", "-", "-", "-"],
//     ["-", "-", "-", "-"],
//     ["-", "-", "-", "-"]
// ]));
// console.log(switchGravityOn([
//     ["-", "#", "#", "-"],
//     ["-", "-", "#", "-"],
//     ["-", "-", "-", "-"],
// ]));
// console.log(switchGravityOn([
//     ["-", "#", "#", "#", "#", "-"],
//     ["#", "-", "-", "#", "#", "-"],
//     ["-", "#", "-", "-", "-", "-"],
//     ["-", "-", "-", "-", "-", "-"]
// ]));
// console.log(switchGravityOn([
//     ["-", "#", "#", "#", "#", "-"],
//     ["#", "-", "-", "#", "#", "-"],
//     ["-", "#", "-", "-", "-", "-"],
//     ["-", "#", "-", "#", "-", "-"]
// ]));
// console.log(switchGravityOn([
//     ["-", "#", "#", "-"],
//     ["-", "-", "#", "-"],
//     ["#", "#", "-", "-"],
// ]));
// console.log(switchGravityOn([
//     ["#"],
//     ["-"],
//     ["#"],
//     ["-"]
// ]));
// console.log(switchGravityOn([
//     ["#"],
//     ["#"],
//     ["#"],
//     ["#"]
// ]));


// function leapYear(year) {
//     return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
// }
//
// console.log(leapYear(2016));
// console.log(leapYear(1996));
// console.log(leapYear(1600));
// console.log(leapYear(2020));
// console.log(leapYear(2000));
// console.log(leapYear(2008));
// console.log(leapYear(1521));
// console.log(leapYear(1800));
// console.log(leapYear(2007));
// console.log(leapYear(2002));
// console.log(leapYear(1979));
// console.log(leapYear(2006));

