// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel

/*
 * Developed for Anunzio International by Anzul Aqeel
 * Contact +971545822608 or +971585515742
 */

const axios = require('axios');

class DictionaryClient {
    constructor() {
        this.baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';
    }

    async getDefinition(word) {
        try {
            const response = await axios.get(`${this.baseUrl}/${word}`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch definition for '${word}': ${error.message}`);
        }
    }
}

module.exports = DictionaryClient;

// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel
