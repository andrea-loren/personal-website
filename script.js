document.addEventListener('DOMContentLoaded', () => {
    // CLEAN TYPING EFFECT WITH PINK MIDDLE NAME & ACCURATE CURSOR
    const typedElement = document.getElementById('typed-name');
    
    if (typedElement) {
        const fullText = "Andrea Loren Mannoia";
        let index = 0;

        function type() {
            if (index <= fullText.length) {
                let current = fullText.substring(0, index);
                
                // Colorize "Loren" pink once it starts typing
                if (current.includes("Loren")) {
                    current = current.replace("Loren", '<span class="pink-text">Loren</span>');
                }
                
                typedElement.innerHTML = current;
                index++;
                setTimeout(type, 80);
            }
        }
        
        // Brief initial pause before typing starts
        setTimeout(type, 300);
    }
});
