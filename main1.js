function chooseOptimalDistance(t, k, ls) {
    let sums = [];
    let kNumbersArray = [];
    kNumbersArray.length = k;

    combine(k, ls, 0, kNumbersArray, sums);

    // console.log(sums);
    return learnNeedSumm(sums, t);
}

function combine(k, ls, start, kNumbersArray, sums) {
    if (k === 0) {
        sums.push(getSumOfElems(kNumbersArray));
        // console.log(kNumbersArray);
        return;
    }

    for (let i = start; i <= ls.length - k; i++) {
        kNumbersArray[kNumbersArray.length - k] = ls[i];
        combine(k - 1, ls, i + 1, kNumbersArray, sums);
    }
}

function getSumOfElems(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

function learnNeedSumm(sums, t) {
    let rez = null;
    let check = sums.every(el => el > t);
    // console.log(check);
    !check ? rez = sums.filter(cur => cur < t).sort().reverse()[0] : res = null;
        return rez

    }
    
console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]));
console.log(chooseOptimalDistance(163, 3, [50])); // null