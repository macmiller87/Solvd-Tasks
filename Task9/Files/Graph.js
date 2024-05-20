export class Graph {
    #nodes;
	#size;
	#adjacency;

    constructor() {
		this.#nodes = [];
		this.#size = 0;
		this.#adjacency = new Map();
	}

	/**
	 * Adds node to graph.
	 * @param node
	 * @returns {number} node index.
	 */

    add(node) {
		this.#nodes.push(node);
		this.#adjacency.set(this.#size, []);
		return this.#size++;
	}

	/**
	 * Connects nodes by indices or throw an error if ids are not in bounds.
	 * @param firstIndex
	 * @param secondIndex
	 * @param weight
	 */

    connect(firstIndex, secondIndex, weight = 1) {

		if(firstIndex < 0 || firstIndex > this.#size - 1) {
			throw new Error(`First index is out of bounds [0, ${this.#size - 1}]`);
		}

		if(secondIndex < 0 || secondIndex > this.#size - 1) {
			throw new Error(`Second index is out of bounds [0, ${this.#size - 1}]`);
		}

		this.#adjacency.set(firstIndex, [...this.#adjacency.get(firstIndex), { index: secondIndex, weight: weight }]);
		this.#adjacency.set(secondIndex, [...this.#adjacency.get(secondIndex), { index: firstIndex, weight: weight }]);
	}

	/**
	 * Loop function for DFS.
	 * @param currentIndex node index
	 * @param visited array of visited indices
	 * @param func
	 */	

    #innerDfs(currentIndex, visited, func) {

		func(this.#nodes[currentIndex]);
		visited[currentIndex] = true;

		let indices = this.#adjacency.get(currentIndex).map(item => item.index);

		for(const neighborIndex of indices) {

			if(!visited[neighborIndex]) {
				this.#innerDfs(neighborIndex, visited, func);
			}
		}
	}

	
	/**
	 * Depth first search function.
	 * @param func function for node processing
	 */

    dfs(func) {

		const visited = {};

		for(let i = 0; i < this.#size; i++) {

			if(!visited[i]) {
				this.#innerDfs(i, visited, func);
			}
		}
	}

	/**
	 * Breadth first search function.
	 * @param func function for node processing
	 */

    bfs(func) {

		const visited = {};
		const queue = [];
		queue.push(0);
		visited[0] = true;

		while (queue.length) {

			const currentIndex = queue.shift();
			func(this.#nodes[currentIndex]);

			let indices = this.#adjacency.get(currentIndex).map(item => item.index);

			for (const neighborIndex of indices) {

				if (!visited[neighborIndex]) {
					queue.push(neighborIndex);
					visited[neighborIndex] = true;
				}
			}
		}
	}

	/**
	 * Returns nodes of the shortest path between two nodes.
	 * @param startIndex
	 * @param endIndex
	 */

    bfsShortestPath(startIndex, endIndex) {

		if(startIndex < 0 || startIndex > this.#size - 1) {
			throw new Error(`Start index is out of bounds [0, ${this.#size - 1}]`);
		}

		if(endIndex < 0 || endIndex > this.#size - 1) {
			throw new Error(`End index is out of bounds [0, ${this.#size - 1}]`);
		}

		const visited = new Set();
		const queue = [[startIndex]];
		visited.add(startIndex);

		while(queue.length > 0) {

			const path = queue.shift();
			const node = path[path.length - 1];

			if(node === endIndex) {
				return path;
			}

			for(const neighbor of this.#adjacency.get(node)) {

				if (!visited.has(neighbor.index)) {
					visited.add(neighbor.index);
					const newPath = [...path, neighbor.index];
					queue.push(newPath);
				}
			}
		}

		return null;
	}

	/**
	 * Returns nodes of the shortest path between two nodes.
	 * @param startIndex
	 * @param endIndex
	 */

    dijkstra(startIndex, endIndex) {

		if(startIndex < 0 || startIndex > this.#size - 1) {
			throw new Error(`Start index is out of bounds [0, ${this.#size - 1}]`);
		}

		if(endIndex < 0 || endIndex > this.#size - 1) {
			throw new Error(`End index is out of bounds [0, ${this.#size - 1}]`);
		}

		const distances = {};
		const previous = {};
		const unvisited = new Set();

		for(const node of this.#adjacency.keys()) {
			distances[node] = Infinity;
			previous[node] = null;
			unvisited.add(node);
		}

		distances[startIndex] = 0;

		while(unvisited.size > 0) {

			const currentNode = this.#findNodeWithSmallestDistance(unvisited, distances);
			unvisited.delete(currentNode);

			for(const neighborEdge of this.#adjacency.get(currentNode)) {
				const neighbor = neighborEdge.index;
				const weight = neighborEdge.weight;
				const tentativeDistance = distances[currentNode] + weight;

				if(tentativeDistance < distances[neighbor]) {
					distances[neighbor] = tentativeDistance;
					previous[neighbor] = currentNode;
				}
			}
		}

		return this.#reconstructPath(previous, endIndex);
	}

    #findNodeWithSmallestDistance(nodes, distances) {

		let smallestDistance = Infinity;
		let smallestNode = null;

		for(const node of nodes) {

			if(distances[node] < smallestDistance) {
				smallestDistance = distances[node];
				smallestNode = node;
			}
		}

		return smallestNode;
	}

    #reconstructPath(previous, targetNode) {

		const path = [targetNode];
		let currentNode = targetNode;

		while(previous[currentNode] !== null) {
			path.unshift(previous[currentNode]);
			currentNode = previous[currentNode];
		}

		return path;
	}

}

const graph = new Graph();

graph.add('A');
graph.add('B');
graph.add('C');
graph.add('D');
graph.connect(0, 1);
graph.connect(0, 2);
graph.connect(1, 3);


graph.bfs((node) => {
    console.log(node) // Expected: A B C D
});

console.log();

const graph2 = new Graph();

graph2.add('0');
graph2.add('1');
graph2.add('2');
graph2.add('7');
graph2.add('8');
graph2.connect(0, 1, 4);
graph2.connect(1, 2, 8);
graph2.connect(0, 3, 8);
graph2.connect(1, 3, 11);
graph2.connect(2, 4, 2);
graph2.connect(3, 4, 7);

const path = graph2.dijkstra(0, 4);

console.log(path); // Expected: [ 0, 1, 2, 4 ]
console.log(path.length === 4 && path.every(x => [0, 1, 2, 4].includes(x))); // Expected: true

console.log();

const graph3 = new Graph();

graph3.add('0');
graph3.add('1');
graph3.add('2');
graph3.add('7');
graph3.add('8');
graph3.connect(0, 1, 4);
graph3.connect(1, 2, 8);
graph3.connect(0, 3, 8);
graph3.connect(1, 3, 11);
graph3.connect(2, 4, 2);
graph3.connect(3, 4, 7);

const path2 = graph3.bfsShortestPath(0, 4);

console.log(path2); // Expected: [ 0, 3, 4 ]
console.log(path2.length === 3 && path2.every(x => [0, 3, 4].includes(x))); // Expected: true