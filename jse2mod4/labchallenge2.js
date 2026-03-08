function myDecorator(fn) {
    const calledArgs = new Set();

    return function(...args) {
        const key = JSON.stringify(args);
        if (calledArgs.has(key)) {
            console.log(`arguments already used: ${args.join(',')}`);
            return;
        }
        calledArgs.add(key);
        return fn(...args);
    };
}

// --- Test ---
let sum = function(...args) {
    let retVal = 0;
    for (let arg of args) retVal += arg;
    return retVal;
};

let dfn = myDecorator(sum);
console.log(dfn(2, 3, 4)); // 9
console.log(dfn(4, 5));    // 9
console.log(dfn(2, 3, 4)); // arguments already used: 2,3,4
console.log(dfn(4, 5));    // arguments already used: 4,5