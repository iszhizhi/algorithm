function insertSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
  return arr;
}

let curArray = [3, 1, 2, 5, 96, 8];

let newArray = insertSort(curArray);

console.log(newArray);
