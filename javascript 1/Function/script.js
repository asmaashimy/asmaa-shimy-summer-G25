function looping(startNum, endNum, skipNum, stopNum) {
    if (startNum === undefined || endNum === undefined || skipNum === undefined || stopNum === undefined) {
        console.log('Please enter all four numbers');
    } else {
        for (let i = startNum; i <= endNum; i++) {
            if (i === skipNum) {
                continue;
            }
            if (i === stopNum) {
                break;
            }
            console.log(i);
        }
    }
}
looping(1, 22, 7, 16);