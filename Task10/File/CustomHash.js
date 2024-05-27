class CustomHash {
    #table;
    #size;

    constructor() {
        this.#table = new Array(20);
        this.#size = 0;
    }

    /**
	 * Returns hash of a key. O(n) complexity, where n is string size.
	 * @param key
	 * @returns {number} hash
	 */

    hash(key) {
        let hash = 0;
    
        for(let i = 0; i < key.length; i++) {
            const char = key.charCodeAt(i);
            hash += char;
        }

        return hash;
    }

    /**
	 * Inserts value by a key. O(n * m) complexity, where n is string size, m is amount of values in table.
	 * @param key
	 * @param value
	 * @returns {*} inserted value
	 */

    insert(key, value) {
        const getHash = this.hash(key);

        const uniforHashAndGetIndex = getHash % this.#table.length;

        if(this.#table[uniforHashAndGetIndex]) {

            for(let i = 0; i < this.#table[uniforHashAndGetIndex].length; i++) {

                if(this.#table[uniforHashAndGetIndex][i][0] === key) {
                    this.#table[uniforHashAndGetIndex][i][1] = value;
                    return;
                }
            }

            this.#table[uniforHashAndGetIndex].push([key, value]);

        }else {

            this.#table[uniforHashAndGetIndex] = [];
            this.#table[uniforHashAndGetIndex].push([key, value]);
        }

        this.#size++;
    }

    /**
	 * Returns value by a key. O(n * m) complexity, where n is string size, m is amount of values in table.
	 * @param key
	 * @returns {*} value
	 */

    get(key) {
        const getHash = this.hash(key);

        const uniforHashAndGetIndex = getHash % this.#table.length;

        if(this.#table[uniforHashAndGetIndex]) {

            for(let i = 0; i < this.#table.length; i++) {

                if(this.#table[uniforHashAndGetIndex][i][0] === key) {
                    return `[ ${key}, value: ${this.#table[uniforHashAndGetIndex][i][1]} ]`;
                }
            }
        }

        throw new Error("Key dosen't exist in Hash Table !");
    }

    /**
	 * Deletes value by a key. O(n * m) complexity, where n is string size, m is amount of values in table.
	 * @param key
	 */

    delete(key) {
        const getHash = this.hash(key);

        const uniforHashAndGetIndex = getHash % this.#table.length;

        if(this.#table[uniforHashAndGetIndex] && this.#table[uniforHashAndGetIndex].length) {
            
            for(let i = 0; i < this.#table.length; i++) {

                if(this.#table[uniforHashAndGetIndex][i][0] === key) {

                    this.#table[uniforHashAndGetIndex].splice(i, 1);
                    this.#size--;

                    return `Key deleted with sucess !`;
                }
            }
        }

        throw new Error("Key dosen't exist in Hash Table !");
    }

    /**
	 * Gets the value of #size, about amount of keys in table.
	 * @returns {number}
	 */

    size() {
        return this.#size;
    }

    /**
	 * Gets tableIndex and HashNumber of all key and their values in table.
	 *  @returns {*} keys and values
	 */

    display() {
        
        this.#table.forEach((values, index) => {

          values.map(([key, value]) => {

            const chainedValues = `[ ${key}, value: ${value} ]`;
            
            console.log(`tableIndex: ${index} HashNumber: ${this.hash(key)} : ${chainedValues}`);
          });

        });
    }

}

const customHash = new CustomHash();

console.log();

const hash1 = customHash.hash("key 1");
const hash2 = customHash.hash("key 2");
const hash3 = customHash.hash("key 3");
const hash4 = customHash.hash("key 4");
<<<<<<< HEAD

=======
;
>>>>>>> bc8a9426780dc8f5371eee7a846645b9eefecd73
console.log("HashNumber:", hash1);
console.log("HashNumber:", hash2);
console.log("HashNumber:", hash3);
console.log("HashNumber:", hash4);
console.log();

customHash.insert("key 1", 1);
customHash.insert("key 2", 30);
customHash.insert("key 3", 18);
customHash.insert("key 4", 88);

console.log(customHash.get("key 1"));
console.log(customHash.get("key 2"));
console.log(customHash.get("key 3"));
console.log(customHash.get("key 4"));
console.log();

console.log("keys amount:", customHash.size());
console.log();

console.log(customHash.delete("key 1"));
console.log(customHash.delete("key 3"));
console.log();

customHash.display();
console.log();

console.log("keys amount:", customHash.size());
console.log();

