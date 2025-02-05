require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { OpenAI } = require('openai');

const app = express();
app.use(cors());
app.use(express.json()); // Pour traiter les requêtes JSON

const GOOGLE_API_KEY = `AIzaSyD1PlTnMASrTYoHaXWloB2GyV7HvxcovEs`;
const GOOGLE_CX_ID = `957a32164187e4098`;
const OPENAI_API_KEY =`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`;
// Initialiser l'API OpenAI
const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

app.post('/chat', async (req, res) => {
    const query = req.body.query;
    if (!query) {
        return res.status(400).json({ error: "A search query is required" });
    }

    try {
        // 🔎 Étape 1 : Rechercher sur Google Custom Search
        const googleResponse = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
            params: {
                key: GOOGLE_API_KEY,
                cx: GOOGLE_CX_ID,
                q: query
            }
        });

        const searchResults = googleResponse.data.items;
        let searchText = "Je n'ai trouvé aucun résultat pertinent.";

        if (searchResults && searchResults.length > 0) {
            searchText = searchResults.map(item => `Titre: ${item.title}, Description: ${item.snippet}`).join("\n\n");
        }

        // 🤖 Étape 2 : Générer une réponse avec ChatGPT
        const chatGptResponse = await openai.chat.completions.create({
            
                "model": "gpt-4",
                "prompt": "Your request here",
                "max_tokens": 100
              
        });

        const botReply = chatGptResponse.choices[0].message.content;

        // 📩 Retourner la réponse au frontend
        res.json({ reply: botReply });

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "An error occurred while fetching data" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

