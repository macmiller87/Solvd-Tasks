export class Stack {
    #items;
    #index;

    constructor() {
        this.#items = [];
        this.#index = 0;
    }

    /**
	 * Pushes value to stack.
	 * @param value
	 */

    push(value) {
        this.#items[this.#index++] = value;
    }

    /**
	 * Removes top value from stack and returns it or null if stack is empty.
	 * @returns {value|null}
	 */

    pop() {
        let popItem = this.#items.length === 0 ? null : this.#items.pop();
        this.#index--;
        return popItem;
    }

    /**
	 * Returns top value from stack or null if stack is empty.
	 * @returns {value|null}
	 */

    peek() {
        const peekItem = this.#items.length === 0 ? null : this.#items[this.#index - 1];
        return peekItem;
    }
}

class MinMaxStack {
	#stack;
	#minStack;
	#maxStack;

	constructor() {
		this.#stack = new Stack();
		this.#minStack = new Stack();
		this.#maxStack = new Stack();
	}

	/**
	 * Pushes value to stack and updates min and max stacks.
	 * @param value
	 */

	push(value) {

		this.#stack.push(value);

		if(this.#minStack.peek() == null) {
			this.#minStack.push(value);
		}

		if(this.#maxStack.peek() == null) {
			this.#maxStack.push(value);
		}

		if(this.#minStack.peek() > value) {
			this.#minStack.push(value);
		}

		if(this.#maxStack.peek() < value) {
			this.#maxStack.push(value);
		}
	}

	/**
	 * Removes top value from stack and updates min and max stacks.
	 */

	pop() {

		let value = this.#stack.pop();
        
		if(this.#minStack.peek() === value) {
			this.#minStack.pop();
		}

		if(this.#maxStack.peek() === value) {
			this.#maxStack.pop();
		}
	}

	/**
	 * Returns min value in stack or null is stack is empty.
	 * @returns {*|null}
	 */

	min() {
		return this.#minStack.peek();
	}

	/**
	 * Returns max value in stack or null is stack is empty.
	 * @returns {*|null}
	 */

	max() {
		return this.#maxStack.peek();
	}
}

const stack = new Stack();

stack.push(88);
stack.push(30);
stack.push(87);

console.log(stack.pop()); // Expected: 87
console.log(stack.peek()); // Expected: 30
console.log();

const stack2 = new MinMaxStack();

stack2.push(2);
stack2.push(5);
stack2.push(44);
stack2.push(99);

console.log(stack2.min()); // Expected: 2
console.log(stack2.max()); // Expected: 99
