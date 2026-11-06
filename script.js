document.addEventListener('DOMContentLoaded', () => {
    // 1. TYPING EFFECT (BOLD NAME WITH PINK MIDDLE NAME)
    const typedElement = document.getElementById('typed-name');
    if (typedElement) {
        const fullText = "Andrea Loren Mannoia";
        let index = 0;

        function type() {
            if (index <= fullText.length) {
                let current = fullText.substring(0, index);
                if (current.includes("Loren")) {
                    current = current.replace("Loren", '<span class="pink-text">Loren</span>');
                }
                typedElement.innerHTML = current;
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
