function mergeSort(arr) {
  let totalLength = arr.length;
  if (totalLength > 1) {
    let mid = Math.floor(totalLength / 2);
    let left = arr.slice(totalLength , mid);
    let right = arr.slice(mid, totalLength);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
}