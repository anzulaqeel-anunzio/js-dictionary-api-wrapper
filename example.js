// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel

const DictionaryClient = require('./index');

const client = new DictionaryClient();

(async () => {
    try {
        console.log("Searching for 'hello'...");
        const results = await client.getDefinition('hello');

        const entry = results[0];
        console.log(`Word: ${entry.word}`);
        if (entry.phonetics.length > 0) {
            console.log(`Audio: ${entry.phonetics[0].audio || 'N/A'}`);
        }

        entry.meanings.forEach(m => {
            console.log(`[${m.partOfSpeech}]: ${m.definitions[0].definition}`);
        });

    } catch (error) {
        console.error("Error:", error.message);
    }
})();

// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel
