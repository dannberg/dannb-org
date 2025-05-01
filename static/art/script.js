document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality for project images
    const modal = document.getElementById('image-modal');
    const modalImg = document.querySelector('.image-modal-img');
    const modalBg = document.querySelector('.image-modal-bg');
    const projectImgs = document.querySelectorAll('.project-img');
    const funButton = document.getElementById('fun-button');

    // Helper to close modal with animation
    function closeModal() {
        modal.classList.remove('active');
        modal.classList.add('closing');
        setTimeout(() => {
            modal.classList.remove('closing');
            modalImg.src = '';
            modalImg.alt = '';
        }, 250); // match CSS transition duration
    }

    // Confetti effect for fun button
    if (funButton) {
        funButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create multiple bursts of confetti from different positions
            const defaults = {
                spread: 360,
                ticks: 200,
                gravity: 0,
                decay: 0.94,
                startVelocity: 30,
                shapes: ['star'],
                colors: [
                    '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', 
                    '#00FFFF', '#FFA500', '#FF69B4', '#7CFC00', '#FFD700',
                    '#4B0082', '#FF1493', '#00CED1', '#FF6347', '#8A2BE2'
                ],
                scalar: 1.5
            };

            function shoot() {
                confetti({
                    ...defaults,
                    particleCount: 40,
                    origin: { x: Math.random(), y: Math.random() - 0.2 }
                });
            }

            // Shoot confetti from multiple positions
            setTimeout(shoot, 0);
            setTimeout(shoot, 100);
            setTimeout(shoot, 200);
            setTimeout(shoot, 300);
            setTimeout(shoot, 400);
        });
    }

    projectImgs.forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modal.classList.add('active');
            modal.classList.remove('closing');
        });
    });

    // Close modal when clicking anywhere on the modal (including the image)
    modal.addEventListener('click', closeModal);

    // Optional: close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}); 