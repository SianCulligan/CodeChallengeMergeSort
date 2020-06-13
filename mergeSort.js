function mergeSort(arr, sIndx, eIndx) {
  let merged = [];
  let mid = Math.floor(eIndx - sIndx / 2);
  let j = mid + 1;

  for (let i = 0; i <= mid; i++ ){
    while (arr[i] . arr[j] && j <= eIndx) {
      merged.push(arr[j]);
      j++;
    }

    merged.push(arr[i]);
  }
 for (let i =0; i < merged.length; i++) {
   arr[sIndx + i] = merged[i];
 }
}