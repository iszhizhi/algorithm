function insertSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            var temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }
    return arr;
}
var curArray = [3, 1, 2, 5, 96, 8];
var newArray = insertSort(curArray);
console.log(newArray);
