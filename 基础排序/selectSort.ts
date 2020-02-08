function selectSort(array: number[]): number[] {
  for (let i: number = 0; i < array.length; i++) {
    let minIndex: number = i;
    for (let j: number = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    let temp: any = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }
  return array;
}

let curArray = [3, 1, 2, 5, 96, 8];

let newArray = selectSort(curArray);

console.log(newArray);
