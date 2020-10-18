function findMinAndRemove(array){
    let minArr = array[0]
    let minIndex = 0
    for(let i = 0; i < array.length; i++) {
        let currentElement = array[i]
        if (array[i] < minArr) 
            {
                minArr = array[i];
                minIndex = i
            }
    }
    array.splice(minIndex, 1);
    return minArr;
}

function selectionSort(array){
    let newMin;
    let sorted = [];
    while (array.length != 0) {
      newMin = findMinAndRemove(array);
      sorted.push(newMin);
    }
    return sorted;
}
