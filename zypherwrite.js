async function generateContent() {
    let input = document.getElementById('inputText').value;
    let outputDiv = document.getElementById('output');
    
    if (input.trim() === '') {
        outputDiv.innerHTML = '<p style="color:red;">Please enter a topic or keywords.</p>';
        return;
    }
    
    outputDiv.innerHTML = '<p>Generating AI-powered content for: <strong>' + input + '</strong>...</p>';
    
    try {
        let response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
            },
            body: JSON.stringify({
                model: 'gpt-4',
                prompt: input,
                max_tokens: 150
            })
        });
        
        let data = await response.json();
        outputDiv.innerHTML += '<p><strong>Here is your AI-generated content:</strong></p>';
        outputDiv.innerHTML += '<p>' + data.choices[0].text + '</p>';
    } catch (error) {
        outputDiv.innerHTML = '<p style="color:red;">Error generating content. Please try again later.</p>';
    }
}

function redirectToPremium() {
    window.location.href = "https://zyphyrrxai.github.io/zypherwrite/premium";
}
