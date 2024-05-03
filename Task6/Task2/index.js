function highlightKeywords(template, keywords) {

    let copyAndReplaceText = template.split("${").join("");

    for(let index in keywords) {
        copyAndReplaceText = copyAndReplaceText.replace(`${index}` +"}", `<span class='highlight'>${keywords[index]}</span>`);
    }

    return copyAndReplaceText
}

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);