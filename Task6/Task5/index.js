function throttle(func, interval) {

    let timeout = null;

    return newFunction = (...args) => {

        if(!timeout) {

            func(...args);

            timeout = setTimeout(() => {
                timeout = null;
            }, interval);
        }
    }

}

function onScroll(event) {
	// Handle scroll event
	console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);
