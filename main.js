const chooseOptimalDistance = (t, k, ls) => {
    // твій код
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    let arrArays = [];
    let fff = ls;
    console.log(ls);

    if (fff.length >= k) {
        for (let i = 0; i < fff.length; i += 1) {
            if (arr.length < k) {
                arr.push(ls[i]);
                arrArays = [...[arr]];
            }
            else {
                fff.length !== k ? fff.splice(k - 1, 1) : fff.splice(-1, 1)
            }
        }
        console.log('arr', arr);
        console.log('fff', fff);
        console.log('arrArays', arrArays);

        for (let i = 0; i < fff.length; i += 1) {
            if (arr2.length < k) {
                arr2.push(ls[i]);
                arrArays = [...[arr], ...[arr2]];
            }
            else {
                fff.length !== k ? fff.splice(k - 1, 1) : fff.splice(-1, 1)
            }
        }
        console.log('arr2', arr2);
        console.log('fff2', fff);
        console.log('arrArays', arrArays);

        for (let i = 0; i < fff.length; i += 1) {
            if (arr3.length < k) {
                arr3.push(ls[i]);
                arrArays = [...[arr], ...[arr2], ...[arr3]];
            }
            else {
                fff.length !== k - 1 ? fff.splice(k - 1, 1) : fff.splice(-1, 1)
            }
        }
        console.log('arr3', arr3);
        console.log('fff3', fff);
        console.log('arrArays', arrArays);

        for (let i = 0; i < fff.length; i += 1) {
            if (arr4.length < k) {
                arr4.push(ls[i]);
                arrArays = [...[arr], ...[arr2], ...[arr3], ...[arr4]];
            }
            else {
                fff.length !== k ? fff.splice(k - 1, 1) : fff.splice(-1, 1)
            }
        }
        console.log('arr4', arr4);
        console.log('fff4', fff);
        console.log('arrArays', arrArays);
    }
    else {
        return '!!!!';
    }

    return null;
}

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseOptimalDistance(163, 3, [50])); // null