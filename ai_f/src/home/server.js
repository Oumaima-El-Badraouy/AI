const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Replace with your Hugging Face API key
const OPENAI_API_KEY = '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';

async function getHuggingFaceResponse(userMessage) {
    try {
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/gpt2', // Use GPT-2
            {
                inputs: userMessage,
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data[0].generated_text;
    } catch (error) {
        console.error("Erreur avec Hugging Face:", error.response ? error.response.data : error.message);
        return "Erreur lors de la récupération de la réponse de Hugging Face.";
    }
}

async function getRAGResponse(userMessage) {
    return `Réponse RAG basée sur: "${userMessage}" (simulée)`;
}

app.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Aucun message envoyé." });
        }

        console.log(`Question reçue : ${message}`);

        const botResponse = await getHuggingFaceResponse(message);
        const ragResponse = await getRAGResponse(message);

        res.json({ botResponse, ragResponse });
    } catch (error) {
        console.error('Error in /chat route:', error);
        res.status(500).json({ error: "Une erreur interne s'est produite." });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});