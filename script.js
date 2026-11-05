document.addEventListener('DOMContentLoaded', () => {
    // 1. TYPING EFFECT WITH PINK MIDDLE NAME
    const typedElement = document.getElementById('typed-name');
    if (typedElement) {
        const fullName = "Andrea Loren Mannoia";
        let charIndex = 0;

        function typeWriter() {
            if (charIndex <= fullName.length) {
                const currentText = fullName.substring(0, charIndex);
                
                // Replace "Loren" with pink highlight wrapper dynamically
                const formattedText = currentText.replace(
                    "Loren",
                    '<span class="highlight-pink">Loren</span>'
                );

                typedElement.innerHTML = formattedText;
                charIndex++;
                setTimeout(typeWriter, 75);
            }
        }
        typeWriter();
    }

    // 2. FULL-WEBSITE DNA GAME MODE
    const gameBtn = document.getElementById('game-mode-btn');
    let isGameActive = false;
    let score = 0;
    let gameInterval;
    let gameBanner;

    if (gameBtn) {
        gameBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!isGameActive) {
                startGameMode();
            } else {
                stopGameMode();
            }
        });
    }

    function startGameMode() {
        isGameActive = true;
        score = 0;
        gameBtn.textContent = '⏹ Stop Game';
        gameBtn.classList.remove('glow-pink');
        gameBtn.classList.add('glow-violet');

        gameBanner = document.createElement('div');
        gameBanner.id = 'full-game-banner';
        gameBanner.innerHTML = `<span>🧬 DNA Sequence Mode Active</span> | Score: <strong id="site-score">0</strong>`;
        document.body.appendChild(gameBanner);

        gameInterval = setInterval(spawnSiteNucleotide, 750);
    }

    function spawnSiteNucleotide() {
        const dot = document.createElement('div');
        dot.classList.add('floating-nucleotide');
        
        if (Math.random() > 0.5) {
            dot.style.background = 'var(--accent-pink)';
            dot.style.boxShadow = '0 0 15px var(--accent-pink)';
        } else {
            dot.style.background = 'var(--accent-bright)';
            dot.style.boxShadow = '0 0 15px var(--accent-bright)';
        }

        const scrollY = window.scrollY;
        const maxX = window.innerWidth - 40;
        const maxY = window.innerHeight - 40;

        dot.style.left = `${Math.max(10, Math.floor(Math.random() * maxX))}px`;
        dot.style.top = `${Math.max(10, Math.floor(scrollY + Math.random() * maxY))}px`;

        dot.addEventListener('click', () => {
            score += 10;
            const scoreElem = document.getElementById('site-score');
            if (scoreElem) scoreElem.textContent = score;
            
            dot.style.transform = 'scale(1.8)';
            dot.style.opacity = '0';
            setTimeout(() => dot.remove(), 150);
        });

        document.body.appendChild(dot);

        setTimeout(() => {
            if (dot.parentNode) dot.remove();
        }, 3000);
    }

    function stopGameMode() {
        isGameActive = false;
        clearInterval(gameInterval);
        gameBtn.textContent = '🎮 Play Game';
        gameBtn.classList.remove('glow-violet');
        gameBtn.classList.add('glow-pink');

        if (gameBanner) gameBanner.remove();
        document.querySelectorAll('.floating-nucleotide').forEach(el => el.remove());
        alert(`Game ended! Final Score: ${score} points! 🧬`);
    }
});
