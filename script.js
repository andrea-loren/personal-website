document.addEventListener('DOMContentLoaded', () => {
    // 1. TYPING EFFECT
    const nameText = "Andrea Loren Mannoia";
    const typedElement = document.getElementById('typed-name');
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < nameText.length) {
            typedElement.innerHTML += nameText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 80);
        }
    }
    typeWriter();

    // 2. DNA SEQUENCER MINI-GAME
    const gameModal = document.getElementById('game-modal');
    const openGameBtn = document.getElementById('game-mode-btn');
    const closeGameBtn = document.getElementById('close-game');
    const startBtn = document.getElementById('start-game-btn');
    const gameCanvas = document.getElementById('game-canvas');
    const scoreDisplay = document.getElementById('game-score');
    const timerDisplay = document.getElementById('game-timer');

    let score = 0;
    let timeLeft = 15;
    let gameInterval;
    let timerInterval;

    openGameBtn.addEventListener('click', () => gameModal.classList.remove('hidden'));
    closeGameBtn.addEventListener('click', () => gameModal.classList.add('hidden'));

    startBtn.addEventListener('click', startGame);

    function startGame() {
        score = 0;
        timeLeft = 15;
        scoreDisplay.textContent = score;
        timerDisplay.textContent = timeLeft;
        startBtn.style.display = 'none';

        gameInterval = setInterval(spawnTarget, 700);
        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);
    }

    function spawnTarget() {
        gameCanvas.innerHTML = '';
        const target = document.createElement('div');
        target.classList.add('target-dot');
        
        // Alternate colors
        if (Math.random() > 0.5) {
            target.style.background = 'var(--accent-pink)';
            target.style.boxShadow = '0 0 15px var(--accent-pink)';
        }

        const maxX = gameCanvas.clientWidth - 30;
        const maxY = gameCanvas.clientHeight - 30;
        target.style.left = `${Math.floor(Math.random() * maxX)}px`;
        target.style.top = `${Math.floor(Math.random() * maxY)}px`;

        target.addEventListener('click', () => {
            score += 10;
            scoreDisplay.textContent = score;
            target.remove();
        });

        gameCanvas.appendChild(target);
    }

    function endGame() {
        clearInterval(gameInterval);
        clearInterval(timerInterval);
        gameCanvas.innerHTML = '';
        startBtn.style.display = 'inline-flex';
        startBtn.textContent = 'Play Again';
        alert(`Time's up! You synthesized ${score} points of DNA! 🧬`);
    }
});