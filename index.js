import readline from "readline";
import { generateResponse } from "./utils/fallback.js";

let model = "groq";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("AI Chat Started");
console.log("Current Model: Groq");

function chat() {

    rl.question("\nYou: ", async (input) => {

        if (!input.trim()) {
            console.log("Please enter something");
            return chat();
        }

        if (input === "/exit") {
            console.log("bye-bye!");
            rl.close();
            return;
        }

        if (input.toLowerCase() === "/groq") {
            model = "groq";
            console.log("Using Groq");
            return chat();
        }

        if (input.toLowerCase() === "/gemini") {
            model = "gemini";
            console.log("Using Gemini");
            return chat();
        }
        if (input.toLowerCase() === "/help") {

    console.log(`
Commands:

/groq    - Switch to Groq
/gemini  - Switch to Gemini
/help    - Show commands
/exit    - Exit chatbot
    `);
    if (input.toLowerCase() === "/clear") {

    console.clear();

    return chat();
}

    return chat();
}

       try {

    const answer =
        await generateResponse(input, model);

    console.log("\nAI:", answer);

}
catch(error) {

    console.log(
        "Something went wrong."
    );

    console.log(
        error.message
    );
}    
        
    });
}

chat();
