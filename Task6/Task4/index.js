function debounce(func, delay) {

    let timeoutId;

    return newFunction = (...args) => {

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
    
}

function debouncedSearch(query) {
	// Perform search operation with the query
	console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 300);

const inputElement = document.getElementById("search-input");

inputElement.addEventListener("input", event => {
	debouncedSearchHandler(event.target.value);
});
