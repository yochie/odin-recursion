function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const splitIndex = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, splitIndex));
  const right = mergeSort(arr.slice(splitIndex));

  return merge(left, right);
}

function merge(left, right) {
  const sorted = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return sorted.concat(left, right);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
