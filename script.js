document.addEventListener('DOMContentLoaded', () => {
    // 1. TYPING EFFECT
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
        setTimeout(type, 250);
    }

    // 2. EXPERIENCE TAB SWITCHER
    const tabButtons = document.querySelectorAll('.exp-tab-btn');
    const tabPanes = document.querySelectorAll('.exp-pane');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');

            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetPane = document.getElementById(targetId);
            if (targetPane) targetPane.classList.add('active');
        });
    });
});
