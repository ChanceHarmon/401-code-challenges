'use strict'

const arr = [1, 4, 9, 6, 13, 7, 9];

function reverseArray(
  for (i = 0, i <= (arr.length / 2), i++) {
  let last = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = last;

  return console.log(arr);


})
