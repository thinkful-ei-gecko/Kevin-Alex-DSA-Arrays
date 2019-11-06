// function urlify(string) {
//   let newString = string.split(' ');
//   return newString.join('%20');
// }

// console.log(urlify('tauhida parveen'));
// console.log(urlify('www.thinkful.com /tauh ida parv een'));

// function lessThanFive(arr) {
//   let newArr=[];
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] >= 5) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(lessThanFive([4, 6, 12, -2, 3]));

// function maxSum(arr, compare = []) {

//   if (arr.length === 0 ){
//     let biggest = 0;
//     for (let i = 0; i < compare.length; i++) {
//       if (compare[i] > biggest) {
//         biggest = compare[i];
//       }
//     }
//     return biggest;
//   }

//   maxSum(arr.slice(0, arr.length - 1), [...compare, arr.reduce((a, b) => a + b)]);
// }

// function maxSum(arr) {
//   let sum = 0;
//   let maxVal = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum > maxVal) {
//       maxVal = sum;
//     }
//   }
//   return maxVal;
// }

/*
go through array;
  add all items, save sum result;
    reduce array by one, repeat above;
     once array is empty;
      compare all sum results;
        if bigger than the rest, return it;
*/


// console.log(maxSum([4, 6, -3, 5, -2, 1]));

// function mergeArrays(arr1, arr2) {

//   let newArr = [];

//   let idx1 = 0;
//   let idx2 = 0;

//   while (idx1 < arr1.length && idx2 < arr2.length) {
//     if (arr1[idx1] <= arr2[idx2]) {
//       newArr.push(arr1[idx1]);
//       idx1++;
//     } else {
//       newArr.push(arr2[idx2]);
//       idx2++;
//     }
//   }

//   if (idx2 < arr2.length) {
//     idx1 = idx2;
//     arr1 = arr2;
//   }

//   while (idx1 < arr1.length) {
//     newArr.push(arr1[idx1]);
//     idx1++;
//   }

//   return newArr;
// }

// console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr2[j] > (arr1[i])) {
//       continue;
//     } else {
//       if (arr2[j] <= arr1[i]) {
//         newArr.splice(i, 0, arr2[j]);
//       }
//     }
//   }
// }

// function removeCharacters(string, chars) {
//   let newString = '';
//   for (let i = 0; i < string.length; i++) {
//     if (!chars.includes(string[i])) {
//       newString += string[i];
//     }
//   }
//   return newString;
// }

// console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// function product(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let piece1 = arr.slice(0, i);
//     let piece2 = arr.slice(i + 1, arr.length);
//     newArr.push(piece1.concat(piece2));
//   }
//   return newArr.map(x => x.reduce((a, b) => a * b));
// }

// console.log(product([1, 3, 9, 4]));


// function zeroArray(arr) {

//   let zeroRow = [];
//   let zeroCol = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes(0)) {
//       zeroRow.push(i);
//     }
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === 0) {
//         zeroCol.push(j);
//       }
//     }
//   }

//   for (let i = 0; i < zeroRow.length; i++) {
//     console.log(arr[zeroRow[i]]);
//     arr[zeroRow[i]] = arr[zeroRow[i]].map(col => 0);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < zeroCol.length; j++) {
//       arr[i][zeroCol[j]] = 0;
//     }
//   }

//   return arr;
// }

// console.log(zeroArray(
//   [[1, 0, 1, 1, 0],
//   [0, 1, 1, 1, 0],
//   [1, 1, 1, 1, 1],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 1, 1]]
// ));


// Input:
// 
// // // // 

// Output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];