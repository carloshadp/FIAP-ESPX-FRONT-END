let inputMessage = document.getElementById("message");

let chatLog = document.getElementById("chat-log");

let messageGemini = [];

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let messageText = inputMessage.value;

    let newMessageGemini = {
        "role": "user",
        "parts": [{"text": messageText}]
    }

    messageGemini.push(newMessageGemini);

    inputMessage.value = "";

    let messageElement = document.createElement("div");
    messageElement.classList.add("message")
    messageElement.classList.add("message--sent")
    messageElement.innerHTML = `
        <div class="message--text">${messageText}</div>
    `;
    chatLog.appendChild(messageElement);
    
})