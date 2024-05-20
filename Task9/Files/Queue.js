export class Queue {
    #items;
    #index;

    constructor() {
        this.#items = [];
        this.#index = 0;
    }

    /**
     * Pushes value to the end of queue.
     * @param value
     */

    enqueue(value) {
        this.#items[this.#index++] = value;
    }

    /**
	 * Removes value from the start of queue.
	 */

    dequeue() {
        const removeFirstItem = this.#items.length === 0 ? null : this.#items.shift();
        this.#index--;
        return removeFirstItem;
    }

    /**
	 * Returns first value in queue or null if queue is empty.
	 * @returns {value|null}
	 */

    peek() {
        const getFirstItem = this.#items.length === 0 ? null : this.#items[0];
        return getFirstItem;
    }
}

const queue = new Queue();

queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);

console.log(queue.dequeue()); // Expected: 2;
console.log(queue.peek()); // Expected: 4;


