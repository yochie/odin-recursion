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
  let leftIndex = 0;
  let rightIndex = 0;
  const fullLength = left.length + right.length;
  while (sorted.length < fullLength) {
    if (left[leftIndex] < right[rightIndex]) {
      sorted.push(left[leftIndex++]);
    } else {
      sorted.push(right[rightIndex++]);
    }

    if (leftIndex === left.length) {
      sorted.push(...right.slice(rightIndex));
    }
    if (rightIndex === right.length) {
      sorted.push(...left.slice(leftIndex));
    }
  }

  return sorted;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
