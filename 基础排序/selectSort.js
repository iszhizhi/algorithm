function selectSort(array) {
    for (var i = 0; i < array.length; i++) {
        var minIndex = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        var temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;
    }
    return array;
}
var curArray = [3, 1, 2, 5, 96, 8];
var newArray = selectSort(curArray);
console.log(newArray);
