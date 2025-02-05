require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const OPENAI_API_KEY = `    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`;

// Fonction pour interroger ChatGPT
async function getChatGPTResponse(userMessage) {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-4",
                messages: [{ role: "user", content: userMessage }],
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("Erreur avec ChatGPT:", error);
        return "Erreur lors de la récupération de la réponse de ChatGPT.";
    }
}

// Fonction simulée pour le RAG (remplace ceci par ton vrai RAG)
async function getRAGResponse(userMessage) {
    // Ici, tu peux intégrer une base de données ou un modèle spécifique.
    return `Réponse RAG basée sur: "${userMessage}" (simulée)`;
}

// Route principale du chatbot
app.post('/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Aucun message envoyé." });
    }

    console.log(`Question reçue : ${message}`);

    const botResponse = await getChatGPTResponse(message);
    const ragResponse = await getRAGResponse(message);

    res.json({ botResponse, ragResponse });
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});

