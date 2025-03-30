function generateContent() {
    let input = document.getElementById('inputText').value;
    let outputDiv = document.getElementById('output');
    
    if (input.trim() === '') {
        outputDiv.innerHTML = '<p style="color:red;">Please enter a topic or keywords.</p>';
        return;
    }
    
    outputDiv.innerHTML = '<p>Generating AI-powered content for: <strong>' + input + '</strong>...</p>';
    
    setTimeout(() => {
        outputDiv.innerHTML += '<p><strong>Here is your AI-generated content:</strong></p>';
        outputDiv.innerHTML += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>';
    }, 2000);
}

function redirectToPremium() {
    window.location.href = "https://zyphyrrxai.github.io/zypherwrite/premium";
}
