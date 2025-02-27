function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    return result;
}

function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for(let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'string') {
            data[i] = data[i] + " - done";
        } else {
            data[i] = data[i] * 2
        }
    }

    return data;
}

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for(let i = 0; i < data.length; i++){
        result[i] = data[data.length - i - 1];
    }

    return result;
}

console.log(firstTask());
console.log(secondTask());
console.log(thirdTask());