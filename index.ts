
const merge = (a: Array<number>, b: Array<number>): Array<number> => {
    let aCounter: number = 0;
    let bCounter: number = 0;
    let mergedArray: Array<number> = [];

    while (aCounter < a.length && bCounter < b.length) {
        if (a[aCounter] < b[bCounter]) {
            mergedArray.push(a[aCounter]);
            aCounter++;
        }
        else {
            mergedArray.push(b[bCounter]);
            bCounter++;
        }
    }

    for (let i = aCounter; i < a.length; i++) {
        mergedArray.push(a[i])
    }

    for (let i = bCounter; i < b.length; i++) {
        mergedArray.push(b[i])
    }

    return mergedArray;
}

export default merge;