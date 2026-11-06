document.addEventListener('DOMContentLoaded', () => {
    // 1. TYPING EFFECT WITH PERMANENT PINK CURSOR & LOWERCASE STYLING
    const typedElement = document.getElementById('typed-name');
    if (typedElement) {
        const fullText = "andrea loren mannoia";
        let index = 0;

        function type() {
            if (index <= fullText.length) {
                let current = fullText.substring(0, index);
                if (current.includes("loren")) {
                    current = current.replace("loren", '<span class="pink-text">loren</span>');
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
