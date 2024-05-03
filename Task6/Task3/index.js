function multiline(text) {

    const lines = text[0].split("\n");

    if(lines[0].trim() === "") {
        lines.shift();
    }

    if(lines[lines.length - 1].trim() === "") {
        lines.pop();
    }

    const digits = String(lines.length);

    const processLines  = lines.map((line, index) => {
        const lineNumber = (index + 1).toString().padStart(digits, "");
        return `${lineNumber} ${line}`;
    });

    return processLines.join("\n");

}

const code = multiline`
function add(a, b) {
return a + b;
}
`;

console.log(code);