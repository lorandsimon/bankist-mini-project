'use strict';
// -------------------------------------------------------
// PRACTICE
// -------------------------------------------------------
// // 1. calc the total deposits from all accouns
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements) //takes out all the elements from the differtent array into a new one
//   .filter(mov => mov > 0)
//   .reduce((sum, element) => sum + element, 0);
// console.log(bankDepositSum);

// // 2. deposits in the bank with at least 1000EUR
// // const numDeposits1000 = accounts
// //   .flatMap(acc => acc.movements)
// //   .filter(mov => mov >= 1000).length;

// //same like the top one
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, current) => (current >= 1000 ? ++count : count), 0); //we need to increment first because else firstly retunrs the value and just after that icrements
// console.log(numDeposits1000);

// //3. count the sum of the deposits and withdrawals
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, current) => {
//       //   current > 0 ? (sum.deposits += current) : (sum.withdrawals += current);
//       sums[current > 0 ? 'deposits' : 'withdrawals'] += current;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);

// //4. convert any string to a title case (all thw wrods ara capitalized with some exceptions)
// //this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(currentWord =>
//       exceptions.includes(currentWord)
//         ? currentWord
//         : currentWord[0].toUpperCase() + currentWord.slice(1)
//     )
//     .join(' ');
//   return titleCase;
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not to long'));
// console.log(
//   convertTitleCase('this is another title with an EXAMPLE of this is THE title')
// );
// -------------------------------------------------------
// CHALLENGE 1
// -------------------------------------------------------

// let julia = [],
//   kate = [];
// const fillwithAges = (array1, array2) => {
//   for (let i = 0; i < 5; i++) {
//     array1[i] = Math.floor(Math.random() * 11);
//     array2[i] = Math.floor(Math.random() * 11);
//   }
// };
// fillwithAges(julia, kate);
// console.log(julia);
// console.log(kate);

// const checkDogs = (array1, array2) => {
//   let updatedJuliaDogs = array1.slice();

//   //removes from the element with index 0 one element
//   updatedJuliaDogs.splice(0, 1);

//   //removes from the element with index 2 all the other elements
//   updatedJuliaDogs.splice(2);

//   console.log(
//     `Julia's updated array: ${updatedJuliaDogs}\n Kate's array: ${array2}`
//   );
//   let corrected = updatedJuliaDogs.concat(array2);
//   console.log(corrected);
//   corrected.forEach(function (dog, i) {
//     dog <= 3
//       ? console.log(`Dog number ${i + 1} is still a puppy.`)
//       : console.log(
//           `Dog number ${i + 1} is and adult, and is ${dog} years old.`
//         );
//   });
// };

// checkDogs(julia, kate);
// const testdataJulia = [3, 5, 2, 12, 7];
// const testDataKAte = [4, 1, 15, 8, 3];
// checkDogs(testdataJulia, testDataKAte);

// -------------------------------------------------------
// CHALLENGE 2
// -------------------------------------------------------
// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 4, 6, 1, 4];
// const calcAverageHumanAge = ages => {
//   const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   console.log(humanAges);
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(adults);

//   //average
//   const averageHumanAge = adults.reduce(
//     (acc, current, i, arr) => acc + current / arr.length,
//     0
//   );
//   console.log(averageHumanAge);
// };
// calcAverageHumanAge(data1);

// -------------------------------------------------------
// CHALLENGE 3
// -------------------------------------------------------
// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 4, 6, 1, 4];
// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// const avg1 = calcAverageHumanAge(data1);
// console.log(avg1);

// -------------------------------------------------------
// CHALLENGE 4
// -------------------------------------------------------
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'Jhon'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// //1. add recomended food to the dogs object as a property for each dog
// dogs.forEach(
//   current => (current.recomendedFood = Math.floor(current.weight ** 0.75 * 28))
// );
// console.log(dogs);

// // 2. Find Sarahs dog and log it if eats to much or to little
// const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(sarahDog);
// console.log(
//   `Sarah's dog is eating ${
//     sarahDog.curFood > sarahDog.recomendedFood ? 'to much' : 'to little'
//   }`
// );

// //3. owners of dogs that eat to much and to little
// const ownersEatTooMuch = dogs
//   .filter(currentdog => currentdog.curFood > currentdog.recomendedFood)
//   .flatMap(owner => owner.owners); //ist oke to use map also
// console.log('Eat to much owners:', ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter(currentdog => currentdog.curFood < currentdog.recomendedFood)
//   .flatMap(owner => owner.owners);
// console.log('Eat to little owners:', ownersEatTooLittle);

// //4. string with the owners whos dogs eat to much and to little
// const eatToMuchOwnersString = `${ownersEatTooMuch.join(
//   ' and '
// )}'s dogs eat to much!`;
// console.log(eatToMuchOwnersString);

// const eatToLittleOwnersString = `${ownersEatTooLittle.join(
//   ' and '
// )}'s dogs eat to little!`;
// console.log(eatToLittleOwnersString);

// // 5. log to console if a dog is eating the recommended food (true or false)
// const dogEatRecom = dogs.some(dog => dog.curFood === dog.recomendedFood);
// console.log(dogEatRecom);

// // 5. log to console if a dog is eating the oke amount of food (true or false)
// const dogEatOk = dogs.some(
//   dog =>
//     dog.curFood >= dog.recomendedFood * 0.9 &&
//     dog.curFood <= dog.recomendedFood * 1.1
// );
// console.log(dogEatOk);

// // 6. array with dogs that eat the oke amunt of food
// const dogEatOkArray = dog =>
//   dog.curFood >= dog.recomendedFood * 0.9 &&
//   dog.curFood <= dog.recomendedFood * 1.1;

// console.log(dogs.some(dogEatOkArray));

// // 7.
// console.log(dogs.filter(dogEatOkArray));

// //8.
// const dogsCopy = dogs
//   .slice()
//   .sort((a, b) => a.recomendedFood - b.recomendedFood);
// console.log(dogsCopy);
