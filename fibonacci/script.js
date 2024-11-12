function fibs(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  let arr = [];
  let first = 0;
  let second = 1;
  arr.push(first, second);
  for (i = 0; i < n - 2; i++) {
    let third = first + second;
    arr.push(third);
    first = second;
    second = third;
  }
  return arr;
}

function fibsr(n) {
  if (n == 2) {
    return [0, 1];
  } else {
    arr = fibsr(n - 1);
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    return arr;
  }
}
