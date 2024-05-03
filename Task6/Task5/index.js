function throttle(func, interval) {

    let timeoutId;

    const newFunction = () => {

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            return func();
        }, interval);
    };

    return newFunction();
}

function onScroll(event) {
	// Handle scroll event
	console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);
