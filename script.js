document.addEventListener('DOMContentLoaded', () => {
    // 1. TYPING EFFECT FOR NAME HEADER
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
});

// 2. EXPERIENCE SECTION TAB SWITCHING
function showExpTab(tabId) {
    const panes = document.querySelectorAll('.tab-pane');
    const buttons = document.querySelectorAll('.tab-btn');

    panes.forEach(pane => pane.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    const activePane = document.getElementById(`tab-${tabId}`);
    if (activePane) activePane.classList.add('active');

    event.currentTarget.classList.add('active');
}