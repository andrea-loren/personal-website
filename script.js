document.addEventListener('DOMContentLoaded', () => {
    // 1. DYNAMIC TYPING EFFECT WITH FIXED PINK CURSOR
    const typedElement = document.getElementById('typed-name');
    const cursorElement = document.querySelector('.custom-cursor');
    
    if (typedElement) {
        const fullText = "andrea loren mannoia";
        let index = 0;

        function type() {
            if (index <= fullText.length) {
                const currentText = fullText.substring(0, index);
                
                // Keep cursor pink during and after "loren"
                if (cursorElement) {
                    if (index >= 7) {
                        cursorElement.classList.add('pink-cursor');
                    } else {
                        cursorElement.classList.remove('pink-cursor');
                    }
                }

                // Format text output
                let formattedText = currentText;
                if (currentText.includes("loren")) {
                    formattedText = currentText.replace("loren", '<span class="pink-text">loren</span>');
                } else if (index > 6) {
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
