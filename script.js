const funnyLoadingMessages = [
    "Checking calendar 📅",
    "Hacking NASA database 🚀",
    "Consulting with time wizards 🧙‍♂️",
    "Bribing the calendar gods 💰",
    "Decoding ancient day-counting scrolls 📜",
    "Asking my pet hamster for advice 🐹",
    "Calculating quantum day probabilities ⚛️"
];

const days = {
    "Monday": "Tuesday",
    "Tuesday": "Wednesday", 
    "Wednesday": "Thursday",
    "Thursday": "Friday",
    "Friday": "Saturday",
    "Saturday": "Sunday",
    "Sunday": "Monday"
};

let currentMessageIndex = 0;
let loadingInterval;

function startGuessing() {
    const selectedDay = document.getElementById('daySelect').value;
    
    if (!selectedDay) {
        alert('Please select a day first! 😊');
        return;
    }
    
    // Hide selection area and show loading
    document.querySelector('.selection-area').classList.add('hidden');
    document.getElementById('loadingArea').classList.remove('hidden');
    document.getElementById('resultArea').classList.add('hidden');
    
    // Reset message index
    currentMessageIndex = 0;
    
    // Start showing loading messages
    showLoadingMessages(selectedDay);
}

function showLoadingMessages(selectedDay) {
    const loadingText = document.getElementById('loadingText');
    
    loadingInterval = setInterval(() => {
        if (currentMessageIndex < funnyLoadingMessages.length) {
            loadingText.textContent = funnyLoadingMessages[currentMessageIndex];
            currentMessageIndex++;
        } else {
            // All messages shown, reveal the result
            clearInterval(loadingInterval);
            showResult(selectedDay);
        }
    }, 2000); // Show each message for 2 seconds
}

function showResult(selectedDay) {
    // Hide loading area
    document.getElementById('loadingArea').classList.add('hidden');
    
    // Show result
    document.getElementById('selectedDay').textContent = selectedDay;
    document.getElementById('nextDay').textContent = days[selectedDay];
    document.getElementById('resultArea').classList.remove('hidden');
}

function resetApp() {
    // Clear any running intervals
    if (loadingInterval) {
        clearInterval(loadingInterval);
    }
    
    // Reset form
    document.getElementById('daySelect').value = '';
    
    // Show selection area, hide others
    document.querySelector('.selection-area').classList.remove('hidden');
    document.getElementById('loadingArea').classList.add('hidden');
    document.getElementById('resultArea').classList.add('hidden');
    
    // Reset message index
    currentMessageIndex = 0;
}

// Add some fun keyboard shortcuts
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const guessBtn = document.getElementById('guessBtn');
        if (!guessBtn.disabled && !document.querySelector('.selection-area').classList.contains('hidden')) {
            startGuessing();
        }
    }
    
    if (event.key === 'Escape') {
        resetApp();
    }
});