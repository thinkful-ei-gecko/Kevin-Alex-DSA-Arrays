# Working with Arrays

## 2. Explore the push() method

a. the length is 1, capacity is 3, memory address is 0.

b. the length is 6, capacity is 12, memory address is 3.

The array's length grew to accomodate the new entries, the capacity grew based on the resize formula because the length exceeded the original capacity, and because the current block of memory could no longer contain the new entries, we had to move to another spot in memory, thus the memory address is now 3.

## 3. Exploring the pop() method

a. length is 3, capacity is 12, memory address is 3.

The length is shrinking because we are reducing the total number of items in the array, the capacity and memory stay the same because \_resize wasn't called.

## 4. Understanding more about how arrays work

a. `console.log(arr.get(0));`
b. Result for printing arr with tauhida: We got NaN because 'tauhida' is a string and the memory is set to only accept floats.
c. The purpose of \_resize is to move the entire array to a new spot in memory that has enough space to contain the new entries to the array. It also serves as a check in case we use up the remaining memory - if we run out, it throws an error and stops the operation.

## 5. URLify a string

```javascript
function urlify(string) {
  let newString = string.split(' ');
  return newString.join('%20');
}
```

We split apart the string, creating a new array separating each string segment by space. We join these array items inserting `%20` where each space would have been. `.split` is a string method, `join` is an array method.

## 6. Filtering an Array

```javascript
function lessThanFive(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```

## 7. Max sum in the array

```javascript
function maxSum(arr) {
  let sum = 0;
  let maxVal = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > maxVal) {
      maxVal = sum;
    }
  }
  return maxVal;
}
```

## 8. Merge arrays

```javascript
function mergeArrays(arr1, arr2) {
  let newArr = [];

  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] <= arr2[idx2]) {
      newArr.push(arr1[idx1]);
      idx1++;
    } else {
      newArr.push(arr2[idx2]);
      idx2++;
    }
  }

  if (idx2 < arr2.length) {
    idx1 = idx2;
    arr1 = arr2;
  }

  while (idx1 < arr1.length) {
    newArr.push(arr1[idx1]);
    idx1++;
  }

  return newArr;
}
```

## 9. Remove characters

```javascript
function removeCharacters(string, chars) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (!chars.includes(string[i])) {
      newString += string[i];
    }
  }
  return newString;
}
```

## 10. Products

```javascript
function product(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let piece1 = arr.slice(0, i);
    let piece2 = arr.slice(i + 1, arr.length);
    newArr.push(piece1.concat(piece2));
  }
  return newArr.map(x => x.reduce((a, b) => a * b));
}
```

## 11. 2D Array

```javascript
function zeroArray(arr) {

  let zeroRow = [];
  let zeroCol = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(0)) {
      zeroRow.push(i);
    }
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        zeroCol.push(j);
      }
    }
  }

  for (let i = 0; i < zeroRow.length; i++) {
    console.log(arr[zeroRow[i]]);
    arr[zeroRow[i]] = arr[zeroRow[i]].map(col => 0);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < zeroCol.length; j++) {
      arr[i][zeroCol[j]] = 0;
    }
  }

  return arr;
}
```