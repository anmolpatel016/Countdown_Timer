let countdownInterval;
let targetDateTime;
let isRunning = false;

// Set minimum date to today
document.getElementById('target-date').min = new Date().toISOString().split('T')[0];

function startTimer() {
    const targetDate = document.getElementById('target-date').value;
    const targetTime = document.getElementById('target-time').value;
    
    if (!targetDate || !targetTime) {
        showMessage('Please select both date and time!', 'error');
        return;
    }

    targetDateTime = new Date(targetDate + 'T' + targetTime);
    const now = new Date();

    if (targetDateTime <= now) {
        showMessage('Please select a future date and time!', 'error');
        return;
    }

    if (isRunning) {
        clearInterval(countdownInterval);
    }

    isRunning = true;
    document.querySelector('.start-btn').textContent = 'Running...';
    document.querySelector('.start-btn').disabled = true;
    document.querySelector('.reset-btn').style.display = 'inline-block';
    document.getElementById('timer-display').classList.add('active');
    hideMessage();

    // Start the countdown
    countdownInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call
}

function updateTimer() {
    const now = new Date();
    const difference = targetDateTime - now;

    if (difference <= 0) {
        clearInterval(countdownInterval);
        showCountdownComplete();
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // Add special effects when less than 1 minute remaining
    if (days === 0 && hours === 0 && minutes === 0) {
        document.getElementById('timer-display').classList.add('final-countdown');
    }
}

function showCountdownComplete() {
    isRunning = false;
    document.getElementById('timer-display').classList.remove('final-countdown');
    
    // Display completion message
    showMessage('🎉 Countdown Complete! Time\'s Up! 🎉', 'success');
    
    // Reset display to zeros
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    
    // Re-enable start button
    document.querySelector('.start-btn').textContent = 'Start Countdown';
    document.querySelector('.start-btn').disabled = false;
    
    // Play completion sound (if browser supports it)
    try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGEcBTuZ3/LFCwgcaLvt559NEAxQp+PwtmMcBziR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGEcBTuZ3/LFCwgcaLvt559NEAxQp+PwtmMcBziR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGEcBTuZ3/LFCwgcaLvt559NEAxQp+PwtmMcBziR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGEcBTuZ3/LFCwgcaLvt559NEAxQp+PwtmMcBziR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGEcBTuZ3/LFCwgcaLvt559NEAxQp+PwtmMcBziR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGEcBTuZ3/LFCwgcaLvt559NEAxQp+PwtmMcBziR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGEcBTuZ3/LFCwgcaLvt559NEAxQp+PwtmMcBziR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGEcBTuZ3/LFCwgcaLvt559NEAxQp+PwtmMcBziR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGEcBTuZ3/LFCwgcaLvt559NEAxQp+PwtmMcBziR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGEcBTuZ3/LFCwgcaLvt559NEAxQp+PwtmMcBziR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGEcBTuZ3/LF');
        audio.play().catch(() => {}); // Ignore errors if audio fails
    } catch (e) {}
}

function resetTimer() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    
    isRunning = false;
    document.getElementById('timer-display').classList.remove('active', 'final-countdown');
    document.querySelector('.start-btn').textContent = 'Start Countdown';
    document.querySelector('.start-btn').disabled = false;
    document.querySelector('.reset-btn').style.display = 'none';
    
    // Reset display
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    
    // Clear inputs
    document.getElementById('target-date').value = '';
    document.getElementById('target-time').value = '';
    
    hideMessage();
}

function showMessage(text, type) {
    const messageEl = document.getElementById('message');
    messageEl.textContent = text;
    messageEl.className = `message ${type}`;
    messageEl.style.display = 'block';
    
    if (type === 'error') {
        setTimeout(hideMessage, 5000);
    }
}

function hideMessage() {
    const messageEl = document.getElementById('message');
    messageEl.style.display = 'none';
    messageEl.className = 'message';
}

// Set default time to 1 hour from now
window.onload = function() {
    const now = new Date();
    const defaultTime = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour from now
    
    document.getElementById('target-date').value = defaultTime.toISOString().split('T')[0];
    document.getElementById('target-time').value = defaultTime.toTimeString().slice(0, 5);
};