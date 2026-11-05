document.addEventListener('DOMContentLoaded', () => {
    // 1. TYPING EFFECT WITH PINK MIDDLE NAME
    const typedElement = document.getElementById('typed-name');
    if (typedElement) {
        // Build styled string: "Andrea " + pink "Loren" + " Mannoia"
        const part1 = "Andrea ";
        const part2 = "Loren";
        const part3 = " Mannoia";
        
        let i = 0, j = 0, k = 0;
        
        function typeWriter() {
            if (i < part1.length) {
                typedElement.innerHTML += part1.charAt(i);
                i++;
                setTimeout(typeWriter, 70);
            } else if (j < part2.length) {
                if (j === 0) typedElement.innerHTML += `<span class="highlight-pink">`;
                document.querySelector('.highlight-pink').innerHTML += part2.charAt(j);
                j++;
                setTimeout(typeWriter, 70);
            } else if (k < part3.length) {
                if (k === 0) typedElement.innerHTML += `</span>`;
                typedElement.innerHTML += part3.charAt(k);
                k++;
                setTimeout(typeWriter, 70);
            }
        }
        typeWriter();
    }

    // 2. FULL-WEBSITE DNA SEQUENCER GAME
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

        // Create floating score banner at top
        gameBanner = document.createElement('div');
        gameBanner.id = 'full-game-banner';
        gameBanner.innerHTML = `<span>🧬 DNA Sequence Mode Active</span> | Score: <strong id="site-score">0</strong>`;
        document.body.appendChild(gameBanner);

        gameInterval = setInterval(spawnSiteNucleotide, 800);
    }

    function spawnSiteNucleotide() {
        const dot = document.createElement('div');
        dot.classList.add('floating-nucleotide');
        
        // Randomize color strand
        if (Math.random() > 0.5) {
            dot.style.background = 'var(--accent-pink)';
            dot.style.boxShadow = '0 0 15px var(--accent-pink)';
        } else {
            dot.style.background = 'var(--accent-bright)';
            dot.style.boxShadow = '0 0 15px var(--accent-bright)';
        }

        // Spawn anywhere within current viewable page
        const scrollY = window.scrollY;
        const maxX = window.innerWidth - 40;
        const maxY = window.innerHeight - 40;

        dot.style.left = `${Math.max(10, Math.floor(Math.random() * maxX))}px`;
        dot.style.top = `${Math.max(10, Math.floor(scrollY + Math.random() * maxY))}px`;

        dot.addEventListener('click', () => {
            score += 10;
            const scoreElem = document.getElementById('site-score');
            if (scoreElem) scoreElem.textContent = score;
            
            // Burst animation effect on click
            dot.style.transform = 'scale(1.8)';
            dot.style.opacity = '0';
            setTimeout(() => dot.remove(), 150);
        });

        document.body.appendChild(dot);

        // Despawn dot automatically after 3 seconds if not clicked
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

        // Clear remaining dots on screen
        document.querySelectorAll('.floating-nucleotide').forEach(el => el.remove());
        alert(`Game ended! Final Score: ${score} points! 🧬`);
    }
});
