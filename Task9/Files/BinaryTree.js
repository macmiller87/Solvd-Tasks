export class BinaryTree {
    #items;

    constructor() {
        this.#items = [];
    }

	/**
	 * Inserts value to tree.
	 * @param value
	 */

    insert(value) {

        if(this.#items[0] === undefined) {
			this.#items[0] = value;

		}else {

			let index = 0;

			while(true) {

				let right = index * 2 + 1;
				let left = right + 1;

				if(this.#items[right] === undefined) {
					this.#items[right] = value;
					break;
				}

				if(this.#items[left] === undefined) {
					this.#items[left] = value;
					break;
				}

				index++;
			}
		}
    }

	/**
	 * Returns generator of in order traversal.
	 * @param index beginning index or 0 if not present.
	 * @returns {Generator<*|Generator<any|*|any, void, any&any>, void, *>}
	 */

    *inOrder(index = 0) {

        if(index < 0) {
			throw new Error("Index must be positive number");
		}

		if(this.#items[index * 2 + 1] !== undefined) {
			yield* this.inOrder(index * 2 + 1);
		}

		yield this.#items[index];

		if(this.#items[index * 2 + 2] !== undefined) {
			yield* this.inOrder(index * 2 + 2);
		}
    }

	/**
	 * Returns generator of pre order traversal.
	 * @param index beginning index or 0 if not present.
	 * @returns {Generator<*|Generator<any|*|any, void, any&any>, void, *>}
	 */

    *preOrder(index = 0) {

        if(index < 0) {
			throw new Error("Index must be positive number");
		}

		yield this.#items[index];

		if(this.#items[index * 2 + 1] !== undefined) {
			yield* this.preOrder(index * 2 + 1);
		}

		if(this.#items[index * 2 + 2] !== undefined) {
			yield* this.preOrder(index * 2 + 2);
		}
    }

	/**
	 * Returns generator of post order traversal.
	 * @param index beginning index or 0 if not present.
	 * @returns {Generator<*|Generator<any|*|any, void, any&any>, void, *>}
	 */

    *postOrder(index = 0) {

        if(index < 0) {
			throw new Error("Index must be positive number");
		}

		if(this.#items[index * 2 + 1] !== undefined) {
			yield* this.postOrder(index * 2 + 1);
		}

		if(this.#items[index * 2 + 2] !== undefined) {
			yield* this.postOrder(index * 2 + 2);
		}

		yield this.#items[index];
    }

	/**
	 * Returns item by index.
	 * @param index
	 * @returns {*}
	 */

    get(index) {
		return this.#items[index];
	}

	/**
	 * Returns true if tree is binary search tree.
	 * @param scoreFunction function that returns item`s comparable score, default if (item) => item
	 * @returns {boolean}
	 */

	isBinary(scoreFunction = (item) => item) {

		let index = 0;

		while(true) {

			let parentValue = scoreFunction(this.#items[index]);
			let rightItem = this.#items[index * 2 + 1];
			let leftItem = this.#items[index * 2 + 2];

			if(rightItem === undefined && leftItem === undefined) {
				break;
			}

			if(rightItem !== undefined && rightItem !== null && scoreFunction(rightItem) > parentValue) {
				return false;
			}

			if(leftItem !== undefined && leftItem !== null && scoreFunction(leftItem) < parentValue) {
				return false;
			}

			index++;
		}

		return true;
	}

}

const tree = new BinaryTree();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
tree.insert(8);

console.log([...tree.inOrder()].reduce((array, item) => [...array, item], [])); // Expected [8,4,2,5,1,6,3,7]
console.log();

console.log([...tree.preOrder()].reduce((array, item) => [...array, item], [])); // Expected [1,2,4,8,5,3,6,7]
console.log();

console.log([...tree.postOrder()].reduce((array, item) => [...array, item], [])); // Expected [8,4,5,2,6,7,3,1]
console.log();

console.log(tree.get(7)) // example: get index 7 from #items[] .... Expected : 8
console.log(tree.get(1)) // example: get index 1 from #items[] .... Expected : 2
console.log();

console.log(tree.isBinary() === false); // Expected: true

tree.insert({ value: 8 });
tree.insert({ value: 11 });
tree.insert({ value: 18 });
tree.insert({ value: 29 });

console.log(tree.isBinary(item => item.value) === true); // Expected: true