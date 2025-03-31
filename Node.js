require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post('/generate-content', async (req, res) => {
    const { input } = req.body;
    
    if (!input) {
        return res.status(400).json({ error: 'Input is required' });
    }
    
    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: 'text-davinci-003',
            prompt: input,
            max_tokens: 100,
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        
        res.json({ content: response.data.choices[0].text.trim() });
    } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).json({ error: 'Failed to generate content' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
