function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let middleIndex = arr.length / 2;
    let leftArr = mergeSort(arr.slice(0, middleIndex));
    let rightArr = mergeSort(arr.slice(middleIndex));
    return merge(leftArr, rightArr);
  }
}

function merge(left, right) {
  let mergedArr = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergedArr.push(left[i]);
      i++;
    } else {
      mergedArr.push(right[j]);
      j++;
    }
    while (i < left.length) {
      mergedArr.push(left[i]);
      i++;
    }
    while (j < right.length) {
      mergedArr.push(right[j]);
      j++;
    }
  }
  return mergedArr;
}

console.log(mergeSort([5, 4, 2, 3]));
