function localize(model, ...object) {

    let resp = [];

    for(let i = 0; i < model.length; i++) {
        resp.push(model[i]);
        
        if(object[i]) {
            let getValues = translations[language][object[i]];
            resp.push(getValues);
        }
    }

    return resp.join(" ");
}

const translations = {

	en: {
	    greet: "Hello",
	    intro: "Welcome to our website"
    },
	fr: {
		greet: "Bonjour",
		intro: "Bienvenue sur notre site web"
	}
};

const language = "en"; // Change to "en" for English
const greeting = "greet";
const introduction = "intro";

const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;

console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")
