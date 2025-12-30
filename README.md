# Dictionary API Wrapper (Node.js)

A lightweight Node.js wrapper for the [Free Dictionary API](https://dictionaryapi.dev/).

## Features

-   **Get Definitions**: Verify word meanings, phonetics, and origins.
-   **Audio Pronunciation**: Access URLs to audio files.
-   **Synonyms/Antonyms**: Fetch related words.
-   **No API Key Needed**: Completely free API.

## Installation

```bash
npm install
```

## Usage

```javascript
const DictionaryClient = require('./index');

const client = new DictionaryClient();

async function main() {
    try {
        const word = "programming";
        const results = await client.getDefinition(word);
        
        console.log(`Word: ${results[0].word}`);
        console.log(`Phonetic: ${results[0].phonetic}`);
        
        results[0].meanings.forEach(meaning => {
            console.log(`\nPart of Speech: ${meaning.partOfSpeech}`);
            meaning.definitions.forEach(def => {
                console.log(` - Definition: ${def.definition}`);
            });
        });

    } catch (error) {
        console.error(error.message);
    }
}

main();
```

## Contact

Developed for Anunzio International by Anzul Aqeel.
Contact +971545822608 or +971585515742.

## License

MIT


---
### 🔗 Part of the "Ultimate Utility Toolkit"
This tool is part of the **[Anunzio International Utility Toolkit](https://github.com/anzulaqeel-anunzio/ultimate-utility-toolkit)**.
Check out the full collection of **180+ developer tools, scripts, and templates** in the master repository.

Developed for Anunzio International by Anzul Aqeel.
