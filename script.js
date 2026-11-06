document.addEventListener('DOMContentLoaded', () => {
    // 1. DYNAMIC TYPING EFFECT WITH MATCHING PINK CURSOR & STYLED WEIGHTS
    const typedElement = document.getElementById('typed-name');
    const cursorElement = document.querySelector('.custom-cursor');
    
    if (typedElement) {
        const fullText = "andrea loren mannoia";
        let index = 0;

        function type() {
            if (index <= fullText.length) {
                const currentText = fullText.substring(0, index);
                
                // 1. Check if currently typing within the "loren" character index range
                const isTypingLoren = index > 6 && index <= 12;

                // 2. Dynamically turn cursor pink while typing "loren"
                if (cursorElement) {
                    if (isTypingLoren) {
                        cursorElement.classList.add('pink-cursor');
                    } else {
                        cursorElement.classList.remove('pink-cursor');
                    }
                }

                // 3. Format typed text HTML
                let formattedText = currentText;
                if (currentText.includes("loren")) {
                    formattedText = currentText.replace("loren", '<span class="pink-text">loren</span>');
                } else if (index > 6) {
                    // Highlight partial "loren" in pink as it types character-by-character
                    const typedLorenPart = fullText.substring(7, index);
                    formattedText = "andrea " + `<span class="pink-text">${typedLorenPart}</span>`;
                }

                typedElement.innerHTML = formattedText;
                index++;
                setTimeout(type, 75);
            }
        }
        setTimeout(type, 200);
    }

    // 2. EXPERIENCE SECTION TAB SWITCHER
    const tabPills = document.querySelectorAll('.exp-pill');
    const tabPanes = document.querySelectorAll('.exp-pane');

    tabPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const targetId = pill.getAttribute('data-tab');

            tabPills.forEach(p => p.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            pill.classList.add('active');
            const activePane = document.getElementById(targetId);
            if (activePane) activePane.classList.add('active');
        });
    });
});
