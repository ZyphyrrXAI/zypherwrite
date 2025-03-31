async function generateContent() {
    let input = document.getElementById('inputText').value;
    let outputDiv = document.getElementById('output');
    
    if (input.trim() === '') {
        outputDiv.innerHTML = '<p style="color:red;">Please enter a topic or keywords.</p>';
        return;
    }
    
    outputDiv.innerHTML = '<p>Generating AI-powered content for: <strong>' + input + '</strong>...</p>';
    
    try {
        let response = await fetch('/generate-content', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input: input
            })
        });
        
        let data = await response.json();
        outputDiv.innerHTML += '<p><strong>Here is your AI-generated content:</strong></p>';
        outputDiv.innerHTML += '<p>' + data.content + '</p>';
    } catch (error) {
        outputDiv.innerHTML = '<p style="color:red;">Error generating content. Please try again later.</p>';
    }
}

function redirectToPremium() {
    window.location.href = "https://zyphyrrxai.github.io/zypherwrite/premium";
}

function showPremiumPopup() {
    alert("Upgrade to ZypherWrite Premium for unlimited AI content! Click OK to learn more.");
    redirectToPremium();
}

// Add monetization banner
document.addEventListener("DOMContentLoaded", function() {
    let banner = document.createElement("div");
    banner.innerHTML = '<p>🔥 Unlock unlimited AI writing! <a href="#" onclick="showPremiumPopup()">Go Premium Now</a></p>';
    banner.style.position = "fixed";
    banner.style.bottom = "10px";
    banner.style.width = "100%";
    banner.style.background = "#ffcc00";
    banner.style.textAlign = "center";
    banner.style.padding = "10px";
    document.body.appendChild(banner);
});
