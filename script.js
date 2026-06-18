document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.click-box');
    
    // Simple intersection observer for entrance animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = entry.target.style.transform.replace('scale(0.8)', 'scale(1)');
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    boxes.forEach(box => {
        // Initial state for animation
        if (window.innerWidth > 900) {
            box.style.opacity = '0';
            // We don't overwrite the initial CSS transform completely, just add fade in
            setTimeout(() => {
                box.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.6s ease';
                box.style.opacity = '1';
            }, 300);
        }

        // Add click interaction
        box.addEventListener('click', () => {
            const title = box.querySelector('h2').innerText;
            // For now, just a visual feedback or alert. 
            // In a full app, this would navigate to a new page or open a modal.
            
            // Create a ripple effect
            box.style.transform = 'scale(0.95)';
            setTimeout(() => {
                box.style.transform = '';
            }, 150);
            
            console.log(`Clicked on ${title}`);
            // alert(`Navigating to section: ${title}`);
        });
    });
});
