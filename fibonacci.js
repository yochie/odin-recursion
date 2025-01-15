#!/usr/bin/env node

function fibs(num) {
  let sequence = [];
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

function fibsRecursive(num) {
  if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    let sequence = fibsRecursive(num - 1);
    sequence.push(sequence.at(-1) + sequence.at(-2));
    return sequence;
  }
}

console.log("looping fib: ");
console.log(fibs(15));
console.log("recursive fib: ");
console.log(fibsRecursive(100));
