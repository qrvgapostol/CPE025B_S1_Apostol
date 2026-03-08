class MyIterable {
    #elements;

    constructor() {
        this.#elements = new Set();
    }

    add(value) {
        this.#elements.add(value);
    }

    has(value) {
        return this.#elements.has(value);
    }

    del(value) {
        this.#elements.delete(value);
    }

    get length() {
        return this.#elements.size;
    }

    *[Symbol.iterator]() {
        for (const item of this.#elements) {
            yield item;
        }
    }
}

// --- Test ---
let iterable = new MyIterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2);
iterable.del(3);

console.log(iterable.length);
console.log(iterable.has(2));
console.log(iterable.has(3));
console.log(...iterable);